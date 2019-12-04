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

// class for gathering errors and returning nice feedback
var SyntaxErrorHandler = function (annotations) {

    antlr4.error.ErrorListener.call(this)
    this.annotations = annotations
    return this

}

SyntaxErrorHandler.prototype = Object.create(antlr4.error.ErrorListener.prototype)
SyntaxErrorHandler.prototype.constructor = SyntaxErrorHandler

SyntaxErrorHandler.prototype.syntaxError = function (recognizer, offendingSymbol, line, column, msg, e) {

    // just a way to grab the relevant error details
    this.annotations.push({
        row: line - 1,
        column: column,
        text: msg,
        type: 'error'
    })

}

exports.SyntaxErrorHandler = SyntaxErrorHandler
