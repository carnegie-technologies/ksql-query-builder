/**********************************************************************
Copyright 2019 Carnegie Technologies

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
***********************************************************************/

const parser = require('./parser/index.js')
const fs = require('fs').promises
const path = require('path')

// make the config a variable, testing and reuse are easier if it's passed in
var config

// nicely print KSQL query parsing errors
function prettyPrintError(filename, text, error) {

    const lines = text.split('\n')
    const errorLineNum = error.row
    let errorLineOut = ''
    let errorLine = lines[error.row]
    let errorCol = error.column
    const width = process.stdout.columns || 80
    while (errorCol > width) {

        errorLineOut += errorLine.slice(0, width) + '\n'
        errorLine = errorLine.slice(width)
        errorCol -= width

    }
    errorLineOut = 'Error at column ' + error.column + ' on line ' + errorLineNum + '\n' +
        errorLineOut.replace(/\s*\n*$/g, '') + '\n' +
        errorLine.slice(0, width > errorCol ? width : -1)
    console.error(errorLineOut)
    console.error(Array(errorCol < 0 ? width - errorCol : errorCol).join(' ') + '^')
    console.error(error.text, '\n')

}

// recursively read all *.ksql files from the given directory
// read said files and perform variable replacement
// parse the ksql from the replaced text of those files
// add the file text and parsed AST to the ksqlmap object
// if errors parsing, pretty print errors and throw
async function getFiles(dir, replacements, ksqlmap) {

    const contents = await fs.readdir(dir, {
        withFileTypes: true
    })
    var exit = false
    await Promise.all(contents
        .filter(file => !(/^\.+$/).test(file.name))
        .map(async(file) => {

            if (file.isFile() && /\.ksql$/i.test(file.name)) {

                const name = path.join(dir, file.name)
                var ast
                try {

                    const text = await fs.readFile(name, 'utf8')
                    ast = parser.parse(text)
                    const statements = ast.statements()
                    // do a pass to grab all the syntax errors
                    parser.readRelations(statements)
                    // the annotations will contain and parsing errors
                    if (ast.annotations.length > 0) {

                        exit = true
                        console.error(Array((process.stdout.columns || 80)).join('='))
                        console.error('Error parsing file:', name.trim())
                        ast.annotations.forEach(a =>
                            prettyPrintError(name, text, a)
                        )
                        console.error('\n')

                    }

                    // loop over statements so we can filter them individually
                    for (let i = 0; i < statements.children.length; i++) {

                        // statement has no children it's empty, skip it
                        if (!statements.children[i] || !statements.children[i].children) continue

                        const statementName = `${name}  statement: ${i + 1}`
                        // the relations will contain the source and sink topics
                        ksqlmap[statementName] = parser.readRelations(statements.children[i])

                        ksqlmap[statementName].text = parser.replace(statements.children[i], replacements)
                        ksqlmap[statementName].tree = statements.children[i]

                    }

                } catch (e) {

                    // we probably had a file read error or parser crash error
                    // to get here

                    exit = true
                    if (ast.annotations.length === 0) {

                        console.error('error handling file', name, e)

                    }

                }

            }
            // recursion to hit all the subdirectories
            if (file.isDirectory()) {

                await getFiles(path.join(dir, file.name), replacements, ksqlmap)

            }

        }))
    if (exit) {

        throw new Error('Error parsing files')

    }
    return true

}

// where the magic happens
// we build a depenency map of the queries using the sink/source topics
// select the topics we have been asked to generate from the config(topics)
// use that list to work backwards up the tree and prune everything that we
// didn't touch. using the list of queries we have left work from the source
// topic(s) down in dependency order, flatten then dedup keeping the first
// entry of a duplicated query.  Finally map the selected queries in the
// sorted order into the output text prefacing each file with a comment
// including the filename then the text(with replacements) of the file itself
async function sortedQueries(ksqlmap) {

    const contents = {}
    const depends = {}
    let includedQueries = []
    let rootQueries = []

    // build dependency tree
    function getDeps(query) {

        return contents[query]
            .filter(q => !!contents[q])
            .map(q => getDeps(q))
            .sort()
            .concat(contents[query])

    }

    // helper for walking up the tree
    function getParents() {

        return Object.keys(depends)
            .map(q => [q].concat(depends[q]))

    }

    // get array of all child queries
    function getChildren(query) {

        return Object.keys(includedQueries)
            .filter(q => includedQueries[q] && includedQueries[q].includes(query))
            .map(q => [q].concat(getChildren(q)))

    }

    // get array of all children of root queries
    function getAllChildren() {

        return Object.keys(includedQueries)
            .filter(q => rootQueries.includes(q))
            .map(getChildren)
            .reduce((p, c) => p.concat(c.flat(Infinity)), [])

    }

    // convert the list of files in to something easier to operate on, specifically
    // we are creating an object with output topics as keys and source topics as values
    Object.keys(ksqlmap).forEach(query => {

        ksqlmap[query].created.forEach(source => {

            if (ksqlmap[query].from) {

                contents[source.toLowerCase()] = ksqlmap[query].from.map(q => q.toLowerCase())

            }

        })

        if (ksqlmap[query].fromTopic) {

            rootQueries.push(ksqlmap[query].from[0])

        }

    })

    // select output queries we want to generate
    // KSQL case is a little odd so just lowercase everything
    // and also grab all of it's dependencies
    const lowerCaseQueries = config.get('topics')
        .map(q => q.toLowerCase().trim())
        .sort()
    Object.keys(contents)
        .forEach(query => {

            if (lowerCaseQueries.includes(query.toLowerCase().trim())) {

                depends[query.toLowerCase().trim()] = getDeps(query)

            }

        })

    // filter the full list of topics to just the ones we have been
    // asked to generate as output topics
    includedQueries = getParents()
        .flat(Infinity)
        .sort()
        .reduce((prev, cur) => Object.assign(prev, {
            [cur]: contents[cur]
        }), {})

    // generate list of topics in the correct order
    const order = getAllChildren()
        .flat(Infinity)
        .filter((cur, idx, arr) => !arr.slice(idx + 1).includes(cur))

    // convert ordered list of queries from ordered list of topics
    // sort the keys to make the output consistent across runs
    const queries = order.map(q => Object.keys(ksqlmap).sort().filter(k => ksqlmap[k].created.includes(q))).flat(Infinity)

    // we can still get duplicates here so filter out items that appear earlier in the list
    const dedupedQueries = queries.filter((cur, idx, arr) => !arr.slice(0, idx).includes(cur))

    // map filenames into the text of those files
    const text = '--- queries generated on ' + (new Date()).toISOString() + '\n' +
        dedupedQueries.map(q => `--- from file: ${q}\n` + ksqlmap[q].text).join('\n')
    const output = config.get('output')
    if (String(process.env.LOG_LEVEL).toLowerCase() === 'debug') {

        console.error('includedQueries:', JSON.stringify(includedQueries))
        console.error('order:', JSON.stringify(order))
        console.error('queries:', JSON.stringify(queries))
        console.error('dedupedQueries:', JSON.stringify(dedupedQueries))
        console.error('dedupedQueries:', JSON.stringify(lowerCaseQueries))

    }
    // in KSQL linting mode do not write a queries file
    if (String(output).length) {

        fs.writeFile(output, text)
        console.error('wrote queries to', output)

    }

    // always return the text of the rendered queries in order
    return text

}

// main entry point
exports.run = async function (conf) {

    config = conf

    const ksqlmap = {}

    const replacements = config.get('replacements') || {}

    try {

        await getFiles(config.get('queriesPath'), replacements, ksqlmap)

    } catch (error) {

        if (config.get('lint') === true) {

            process.exit(-1)

        }
        if (error.code === 'ENOENT') {

            console.error('Error directory', config.get('queriesPath'), 'does not exist')

        }
        return false

    }
    return sortedQueries(ksqlmap)

}
