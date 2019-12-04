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

function leaf (node) {

    return node.children && node.children.length ? leaf(node.children[0]) : node

}

const replacers = {
    tz: (node, value) => {

        if (node.children.length > 6) {

            let tz = leaf(node.children[node.children.length - 2])
            tz.symbol._text = value

        }
        return false

    }
}

function performReplacement(rules, rulename, text, node) {

    for (let r in rules) {

        let parts = r.split('/')
        if (parts[0].toLowerCase() !== rulename.toLowerCase()) continue
        if (parts.length === 1) return rules[r]
        if (parts[1].toLowerCase() === text.toLowerCase()) {

            if (parts.length === 2) return rules[r]
            if (replacers[parts[2]]) return replacers[parts[2]](node, rules[r])

        }

    }
    return false

}

function applyParameters(ast, w, node) {

    let replaced
    switch (ast.ruleNames[node.ruleIndex]) {

    case 'tableProperty':
        replaced = performReplacement(w.replacements, 'WITH', node.children[0].getText(), node)
        if (replaced !== false) {

            let l = leaf(node.children[2])
            l.symbol._text = replaced

        }
        break
    case 'timeZoneSpecifier':
        replaced = performReplacement(w.replacements, 'TIME ZONE', node.children[0].getText(), node)
        if (replaced !== false) {

            let l = leaf(node.children[2])
            l.symbol._text = replaced

        }
        break
    case 'primaryExpression':
        // function calls are always 3 sub expresssions or more
        // start with an identifier followed by '('
        // and are not named 'cast' ;)
        if (node.children.length < 3 ||
                node.children[0].getText().toLowerCase() === 'cast' ||
                node.children[1].getText() !== '(') break
        // probably a function call
        performReplacement(w.replacements, 'FUNCTION', node.children[0].getText(), node)
        break

    }

}

function replacer(tree, replacements) {

    const lineBreakWords = ['FROM', 'WINDOW', 'GROUP', 'HAVING', 'EMIT', 'WITH']
    const indentTwoRules = ['tableElements', 'limitClause']
    const indentThreeRules = ['tableElement', 'tableProperty', 'selectItem']
    const pad = i => (new Array(i >= 0 ? i : 0)).fill('  ').join('')
    const ast = tree.parser
    const walk = {
        skipSpace: true,
        newLine: false,
        indent: 0,
        statements: 1,
        format: true,
        replacements: {},
        visitChildren: (node) => {

            if (!node) return
            if (node.children) {

                return node.children.map(child => {

                    applyParameters(ast, walk, child)
                    if (child.children && child.children.length !== 0) {

                        if (ast.ruleNames[child.ruleIndex] === 'statement' && walk.statements > 1) {

                            walk.newLine = true
                            walk.statements++
                            walk.indent = 0

                        }
                        if (ast.ruleNames[child.ruleIndex] === 'query') {

                            walk.newLine = true
                            walk.indent = 1

                        }
                        if (indentTwoRules.includes(ast.ruleNames[child.ruleIndex])) {

                            walk.newLine = true
                            walk.indent = 2

                        }
                        if (indentThreeRules.includes(ast.ruleNames[child.ruleIndex])) {

                            walk.newLine = true
                            walk.indent = 3

                        }
                        return child.accept(walk)

                    } else {

                        const t = child.getText()
                        if (t === '<EOF>') return
                        let space = ''
                        if (walk.format) {

                            space = walk.skipSpace ? '' : ' '
                            if (lineBreakWords.includes(t)) {

                                if (t === 'FROM') {

                                    space = '\n' + pad(walk.indent - 1)

                                } else {

                                    space = '\n' + pad(2)
                                    walk.indent = 2

                                }

                            } else if (walk.newLine) {

                                walk.newLine = false
                                space = '\n' + pad(walk.indent)

                            }
                            if (t === 'JOIN') {

                                walk.newLine = true
                                walk.indent++

                            }
                            if (/^[.(=]$/.test(t)) {

                                walk.skipSpace = true

                            } else {

                                walk.skipSpace = false

                            }

                        }
                        if (/^[.,();=]$/.test(t)) {

                            return t

                        }
                        return space + t

                    }

                })

            }

        }}

    walk.replacements = replacements
    var out = tree.accept(walk)
    return out.flat(Infinity).join('')

}

module.exports = replacer
