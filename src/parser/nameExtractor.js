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

var SqlBaseListener = require('./SqlBaseListener').SqlBaseListener

// This class defines a complete listener for a parse tree produced by SqlBaseParser.
function NameExtractor() {

    SqlBaseListener.call(this)
    this.created = []
    this.from = []
    this.text = ''
    this.fromTopic = false
    return this

}

NameExtractor.prototype = Object.create(SqlBaseListener.prototype)
NameExtractor.prototype.constructor = NameExtractor

// Enter a parse tree produced by SqlBaseParser#createStream.
NameExtractor.prototype.enterCreateStream = function (ctx) {

    this.created.push(ctx.sourceName().getText().toLowerCase())
    this.fromTopic = true

}

// Enter a parse tree produced by SqlBaseParser#createStreamAs.
NameExtractor.prototype.enterCreateStreamAs = function (ctx) {

    this.created.push(ctx.sourceName().getText().toLowerCase())

}

// Enter a parse tree produced by SqlBaseParser#createTable.
NameExtractor.prototype.enterCreateTable = function (ctx) {

    this.created.push(ctx.sourceName().getText().toLowerCase())
    this.fromTopic = true

}

// Enter a parse tree produced by SqlBaseParser#createTableAs.
NameExtractor.prototype.enterCreateTableAs = function (ctx) {

    this.created.push(ctx.sourceName().getText().toLowerCase())

}

// Enter a parse tree produced by SqlBaseParser#tableProperty.
NameExtractor.prototype.enterTableProperty = function (ctx) {

    if (ctx.identifier().getText() === 'KAFKA_TOPIC') {

        this.from.push(
            ctx.literal().getText().toLowerCase().replace(/['"]/g, '')
        )

    }

}

// Enter a parse tree produced by SqlBaseParser#tableName.
NameExtractor.prototype.enterRelationPrimary = function (ctx) {

    this.from.push(ctx.sourceName().getText().toLowerCase())

}

// Enter a parse tree produced by SqlBaseParser#tableName.
NameExtractor.prototype.enterTableName = function (ctx) {

    this.from.push(ctx.getText().toLowerCase())

}

exports.NameExtractor = NameExtractor
