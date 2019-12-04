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

const antlr4 = require('antlr4')
const SqlBaseLexer = require('./SqlBaseLexer')
const SqlBaseParser = require('./SqlBaseParser')
const NameExtractor = require('./nameExtractor')
const SyntaxErrorHandler = require('./SyntaxErrorHandler')
const replacer = require('./replacer')

// run the parser with custom syntax error handling
function parse(input) {

    const chars = new antlr4.InputStream(input)
    const lexer = new SqlBaseLexer.SqlBaseLexer(chars)
    const tokens = new antlr4.CommonTokenStream(lexer)
    const parser = new SqlBaseParser.SqlBaseParser(tokens)
    parser.annotations = []
    const SyntaxHandler = new SyntaxErrorHandler.SyntaxErrorHandler(parser.annotations)
    parser.removeErrorListeners()
    parser.addErrorListener(SyntaxHandler)
    parser.buildParseTrees = true
    return parser

}

// return sink/source topics from statements
function readRelations(statements) {

    var listener = new NameExtractor.NameExtractor()
    antlr4.tree.ParseTreeWalker.DEFAULT.walk(listener, statements)
    return {
        created: listener.created,
        from: listener.from,
        fromTopic: listener.fromTopic
    }

}

module.exports.parse = parse
module.exports.readRelations = readRelations
module.exports.replace = replacer
