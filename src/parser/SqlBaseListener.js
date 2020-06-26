// Generated from SqlBase.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by SqlBaseParser.
function SqlBaseListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

SqlBaseListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
SqlBaseListener.prototype.constructor = SqlBaseListener;

// Enter a parse tree produced by SqlBaseParser#statements.
SqlBaseListener.prototype.enterStatements = function(ctx) {
};

// Exit a parse tree produced by SqlBaseParser#statements.
SqlBaseListener.prototype.exitStatements = function(ctx) {
};


// Enter a parse tree produced by SqlBaseParser#singleStatement.
SqlBaseListener.prototype.enterSingleStatement = function(ctx) {
};

// Exit a parse tree produced by SqlBaseParser#singleStatement.
SqlBaseListener.prototype.exitSingleStatement = function(ctx) {
};


// Enter a parse tree produced by SqlBaseParser#singleExpression.
SqlBaseListener.prototype.enterSingleExpression = function(ctx) {
};

// Exit a parse tree produced by SqlBaseParser#singleExpression.
SqlBaseListener.prototype.exitSingleExpression = function(ctx) {
};


// Enter a parse tree produced by SqlBaseParser#queryStatement.
SqlBaseListener.prototype.enterQueryStatement = function(ctx) {
};

// Exit a parse tree produced by SqlBaseParser#queryStatement.
SqlBaseListener.prototype.exitQueryStatement = function(ctx) {
};


// Enter a parse tree produced by SqlBaseParser#listProperties.
SqlBaseListener.prototype.enterListProperties = function(ctx) {
};

// Exit a parse tree produced by SqlBaseParser#listProperties.
SqlBaseListener.prototype.exitListProperties = function(ctx) {
};


// Enter a parse tree produced by SqlBaseParser#listTopics.
SqlBaseListener.prototype.enterListTopics = function(ctx) {
};

// Exit a parse tree produced by SqlBaseParser#listTopics.
SqlBaseListener.prototype.exitListTopics = function(ctx) {
};


// Enter a parse tree produced by SqlBaseParser#listStreams.
SqlBaseListener.prototype.enterListStreams = function(ctx) {
};

// Exit a parse tree produced by SqlBaseParser#listStreams.
SqlBaseListener.prototype.exitListStreams = function(ctx) {
};


// Enter a parse tree produced by SqlBaseParser#listTables.
SqlBaseListener.prototype.enterListTables = function(ctx) {
};

// Exit a parse tree produced by SqlBaseParser#listTables.
SqlBaseListener.prototype.exitListTables = function(ctx) {
};


// Enter a parse tree produced by SqlBaseParser#listFunctions.
SqlBaseListener.prototype.enterListFunctions = function(ctx) {
};

// Exit a parse tree produced by SqlBaseParser#listFunctions.
SqlBaseListener.prototype.exitListFunctions = function(ctx) {
};


// Enter a parse tree produced by SqlBaseParser#listConnectors.
SqlBaseListener.prototype.enterListConnectors = function(ctx) {
};

// Exit a parse tree produced by SqlBaseParser#listConnectors.
SqlBaseListener.prototype.exitListConnectors = function(ctx) {
};


// Enter a parse tree produced by SqlBaseParser#listTypes.
SqlBaseListener.prototype.enterListTypes = function(ctx) {
};

// Exit a parse tree produced by SqlBaseParser#listTypes.
SqlBaseListener.prototype.exitListTypes = function(ctx) {
};


// Enter a parse tree produced by SqlBaseParser#showColumns.
SqlBaseListener.prototype.enterShowColumns = function(ctx) {
};

// Exit a parse tree produced by SqlBaseParser#showColumns.
SqlBaseListener.prototype.exitShowColumns = function(ctx) {
};


// Enter a parse tree produced by SqlBaseParser#describeFunction.
SqlBaseListener.prototype.enterDescribeFunction = function(ctx) {
};

// Exit a parse tree produced by SqlBaseParser#describeFunction.
SqlBaseListener.prototype.exitDescribeFunction = function(ctx) {
};


// Enter a parse tree produced by SqlBaseParser#describeConnector.
SqlBaseListener.prototype.enterDescribeConnector = function(ctx) {
};

// Exit a parse tree produced by SqlBaseParser#describeConnector.
SqlBaseListener.prototype.exitDescribeConnector = function(ctx) {
};


// Enter a parse tree produced by SqlBaseParser#printTopic.
SqlBaseListener.prototype.enterPrintTopic = function(ctx) {
};

// Exit a parse tree produced by SqlBaseParser#printTopic.
SqlBaseListener.prototype.exitPrintTopic = function(ctx) {
};


// Enter a parse tree produced by SqlBaseParser#listQueries.
SqlBaseListener.prototype.enterListQueries = function(ctx) {
};

// Exit a parse tree produced by SqlBaseParser#listQueries.
SqlBaseListener.prototype.exitListQueries = function(ctx) {
};


// Enter a parse tree produced by SqlBaseParser#terminateQuery.
SqlBaseListener.prototype.enterTerminateQuery = function(ctx) {
};

// Exit a parse tree produced by SqlBaseParser#terminateQuery.
SqlBaseListener.prototype.exitTerminateQuery = function(ctx) {
};


// Enter a parse tree produced by SqlBaseParser#setProperty.
SqlBaseListener.prototype.enterSetProperty = function(ctx) {
};

// Exit a parse tree produced by SqlBaseParser#setProperty.
SqlBaseListener.prototype.exitSetProperty = function(ctx) {
};


// Enter a parse tree produced by SqlBaseParser#unsetProperty.
SqlBaseListener.prototype.enterUnsetProperty = function(ctx) {
};

// Exit a parse tree produced by SqlBaseParser#unsetProperty.
SqlBaseListener.prototype.exitUnsetProperty = function(ctx) {
};


// Enter a parse tree produced by SqlBaseParser#createStream.
SqlBaseListener.prototype.enterCreateStream = function(ctx) {
};

// Exit a parse tree produced by SqlBaseParser#createStream.
SqlBaseListener.prototype.exitCreateStream = function(ctx) {
};


// Enter a parse tree produced by SqlBaseParser#createStreamAs.
SqlBaseListener.prototype.enterCreateStreamAs = function(ctx) {
};

// Exit a parse tree produced by SqlBaseParser#createStreamAs.
SqlBaseListener.prototype.exitCreateStreamAs = function(ctx) {
};


// Enter a parse tree produced by SqlBaseParser#createTable.
SqlBaseListener.prototype.enterCreateTable = function(ctx) {
};

// Exit a parse tree produced by SqlBaseParser#createTable.
SqlBaseListener.prototype.exitCreateTable = function(ctx) {
};


// Enter a parse tree produced by SqlBaseParser#createTableAs.
SqlBaseListener.prototype.enterCreateTableAs = function(ctx) {
};

// Exit a parse tree produced by SqlBaseParser#createTableAs.
SqlBaseListener.prototype.exitCreateTableAs = function(ctx) {
};


// Enter a parse tree produced by SqlBaseParser#createConnector.
SqlBaseListener.prototype.enterCreateConnector = function(ctx) {
};

// Exit a parse tree produced by SqlBaseParser#createConnector.
SqlBaseListener.prototype.exitCreateConnector = function(ctx) {
};


// Enter a parse tree produced by SqlBaseParser#insertInto.
SqlBaseListener.prototype.enterInsertInto = function(ctx) {
};

// Exit a parse tree produced by SqlBaseParser#insertInto.
SqlBaseListener.prototype.exitInsertInto = function(ctx) {
};


// Enter a parse tree produced by SqlBaseParser#insertValues.
SqlBaseListener.prototype.enterInsertValues = function(ctx) {
};

// Exit a parse tree produced by SqlBaseParser#insertValues.
SqlBaseListener.prototype.exitInsertValues = function(ctx) {
};


// Enter a parse tree produced by SqlBaseParser#dropStream.
SqlBaseListener.prototype.enterDropStream = function(ctx) {
};

// Exit a parse tree produced by SqlBaseParser#dropStream.
SqlBaseListener.prototype.exitDropStream = function(ctx) {
};


// Enter a parse tree produced by SqlBaseParser#dropTable.
SqlBaseListener.prototype.enterDropTable = function(ctx) {
};

// Exit a parse tree produced by SqlBaseParser#dropTable.
SqlBaseListener.prototype.exitDropTable = function(ctx) {
};


// Enter a parse tree produced by SqlBaseParser#dropConnector.
SqlBaseListener.prototype.enterDropConnector = function(ctx) {
};

// Exit a parse tree produced by SqlBaseParser#dropConnector.
SqlBaseListener.prototype.exitDropConnector = function(ctx) {
};


// Enter a parse tree produced by SqlBaseParser#explain.
SqlBaseListener.prototype.enterExplain = function(ctx) {
};

// Exit a parse tree produced by SqlBaseParser#explain.
SqlBaseListener.prototype.exitExplain = function(ctx) {
};


// Enter a parse tree produced by SqlBaseParser#registerType.
SqlBaseListener.prototype.enterRegisterType = function(ctx) {
};

// Exit a parse tree produced by SqlBaseParser#registerType.
SqlBaseListener.prototype.exitRegisterType = function(ctx) {
};


// Enter a parse tree produced by SqlBaseParser#dropType.
SqlBaseListener.prototype.enterDropType = function(ctx) {
};

// Exit a parse tree produced by SqlBaseParser#dropType.
SqlBaseListener.prototype.exitDropType = function(ctx) {
};


// Enter a parse tree produced by SqlBaseParser#query.
SqlBaseListener.prototype.enterQuery = function(ctx) {
};

// Exit a parse tree produced by SqlBaseParser#query.
SqlBaseListener.prototype.exitQuery = function(ctx) {
};


// Enter a parse tree produced by SqlBaseParser#resultMaterialization.
SqlBaseListener.prototype.enterResultMaterialization = function(ctx) {
};

// Exit a parse tree produced by SqlBaseParser#resultMaterialization.
SqlBaseListener.prototype.exitResultMaterialization = function(ctx) {
};


// Enter a parse tree produced by SqlBaseParser#tableElements.
SqlBaseListener.prototype.enterTableElements = function(ctx) {
};

// Exit a parse tree produced by SqlBaseParser#tableElements.
SqlBaseListener.prototype.exitTableElements = function(ctx) {
};


// Enter a parse tree produced by SqlBaseParser#tableElement.
SqlBaseListener.prototype.enterTableElement = function(ctx) {
};

// Exit a parse tree produced by SqlBaseParser#tableElement.
SqlBaseListener.prototype.exitTableElement = function(ctx) {
};


// Enter a parse tree produced by SqlBaseParser#tableProperties.
SqlBaseListener.prototype.enterTableProperties = function(ctx) {
};

// Exit a parse tree produced by SqlBaseParser#tableProperties.
SqlBaseListener.prototype.exitTableProperties = function(ctx) {
};


// Enter a parse tree produced by SqlBaseParser#tableProperty.
SqlBaseListener.prototype.enterTableProperty = function(ctx) {
};

// Exit a parse tree produced by SqlBaseParser#tableProperty.
SqlBaseListener.prototype.exitTableProperty = function(ctx) {
};


// Enter a parse tree produced by SqlBaseParser#printClause.
SqlBaseListener.prototype.enterPrintClause = function(ctx) {
};

// Exit a parse tree produced by SqlBaseParser#printClause.
SqlBaseListener.prototype.exitPrintClause = function(ctx) {
};


// Enter a parse tree produced by SqlBaseParser#intervalClause.
SqlBaseListener.prototype.enterIntervalClause = function(ctx) {
};

// Exit a parse tree produced by SqlBaseParser#intervalClause.
SqlBaseListener.prototype.exitIntervalClause = function(ctx) {
};


// Enter a parse tree produced by SqlBaseParser#limitClause.
SqlBaseListener.prototype.enterLimitClause = function(ctx) {
};

// Exit a parse tree produced by SqlBaseParser#limitClause.
SqlBaseListener.prototype.exitLimitClause = function(ctx) {
};


// Enter a parse tree produced by SqlBaseParser#retentionClause.
SqlBaseListener.prototype.enterRetentionClause = function(ctx) {
};

// Exit a parse tree produced by SqlBaseParser#retentionClause.
SqlBaseListener.prototype.exitRetentionClause = function(ctx) {
};


// Enter a parse tree produced by SqlBaseParser#gracePeriodClause.
SqlBaseListener.prototype.enterGracePeriodClause = function(ctx) {
};

// Exit a parse tree produced by SqlBaseParser#gracePeriodClause.
SqlBaseListener.prototype.exitGracePeriodClause = function(ctx) {
};


// Enter a parse tree produced by SqlBaseParser#windowExpression.
SqlBaseListener.prototype.enterWindowExpression = function(ctx) {
};

// Exit a parse tree produced by SqlBaseParser#windowExpression.
SqlBaseListener.prototype.exitWindowExpression = function(ctx) {
};


// Enter a parse tree produced by SqlBaseParser#tumblingWindowExpression.
SqlBaseListener.prototype.enterTumblingWindowExpression = function(ctx) {
};

// Exit a parse tree produced by SqlBaseParser#tumblingWindowExpression.
SqlBaseListener.prototype.exitTumblingWindowExpression = function(ctx) {
};


// Enter a parse tree produced by SqlBaseParser#hoppingWindowExpression.
SqlBaseListener.prototype.enterHoppingWindowExpression = function(ctx) {
};

// Exit a parse tree produced by SqlBaseParser#hoppingWindowExpression.
SqlBaseListener.prototype.exitHoppingWindowExpression = function(ctx) {
};


// Enter a parse tree produced by SqlBaseParser#sessionWindowExpression.
SqlBaseListener.prototype.enterSessionWindowExpression = function(ctx) {
};

// Exit a parse tree produced by SqlBaseParser#sessionWindowExpression.
SqlBaseListener.prototype.exitSessionWindowExpression = function(ctx) {
};


// Enter a parse tree produced by SqlBaseParser#windowUnit.
SqlBaseListener.prototype.enterWindowUnit = function(ctx) {
};

// Exit a parse tree produced by SqlBaseParser#windowUnit.
SqlBaseListener.prototype.exitWindowUnit = function(ctx) {
};


// Enter a parse tree produced by SqlBaseParser#partitionBy.
SqlBaseListener.prototype.enterPartitionBy = function(ctx) {
};

// Exit a parse tree produced by SqlBaseParser#partitionBy.
SqlBaseListener.prototype.exitPartitionBy = function(ctx) {
};


// Enter a parse tree produced by SqlBaseParser#groupBy.
SqlBaseListener.prototype.enterGroupBy = function(ctx) {
};

// Exit a parse tree produced by SqlBaseParser#groupBy.
SqlBaseListener.prototype.exitGroupBy = function(ctx) {
};


// Enter a parse tree produced by SqlBaseParser#values.
SqlBaseListener.prototype.enterValues = function(ctx) {
};

// Exit a parse tree produced by SqlBaseParser#values.
SqlBaseListener.prototype.exitValues = function(ctx) {
};


// Enter a parse tree produced by SqlBaseParser#selectSingle.
SqlBaseListener.prototype.enterSelectSingle = function(ctx) {
};

// Exit a parse tree produced by SqlBaseParser#selectSingle.
SqlBaseListener.prototype.exitSelectSingle = function(ctx) {
};


// Enter a parse tree produced by SqlBaseParser#selectAll.
SqlBaseListener.prototype.enterSelectAll = function(ctx) {
};

// Exit a parse tree produced by SqlBaseParser#selectAll.
SqlBaseListener.prototype.exitSelectAll = function(ctx) {
};


// Enter a parse tree produced by SqlBaseParser#joinRelation.
SqlBaseListener.prototype.enterJoinRelation = function(ctx) {
};

// Exit a parse tree produced by SqlBaseParser#joinRelation.
SqlBaseListener.prototype.exitJoinRelation = function(ctx) {
};


// Enter a parse tree produced by SqlBaseParser#relationDefault.
SqlBaseListener.prototype.enterRelationDefault = function(ctx) {
};

// Exit a parse tree produced by SqlBaseParser#relationDefault.
SqlBaseListener.prototype.exitRelationDefault = function(ctx) {
};


// Enter a parse tree produced by SqlBaseParser#joinedSource.
SqlBaseListener.prototype.enterJoinedSource = function(ctx) {
};

// Exit a parse tree produced by SqlBaseParser#joinedSource.
SqlBaseListener.prototype.exitJoinedSource = function(ctx) {
};


// Enter a parse tree produced by SqlBaseParser#innerJoin.
SqlBaseListener.prototype.enterInnerJoin = function(ctx) {
};

// Exit a parse tree produced by SqlBaseParser#innerJoin.
SqlBaseListener.prototype.exitInnerJoin = function(ctx) {
};


// Enter a parse tree produced by SqlBaseParser#outerJoin.
SqlBaseListener.prototype.enterOuterJoin = function(ctx) {
};

// Exit a parse tree produced by SqlBaseParser#outerJoin.
SqlBaseListener.prototype.exitOuterJoin = function(ctx) {
};


// Enter a parse tree produced by SqlBaseParser#leftJoin.
SqlBaseListener.prototype.enterLeftJoin = function(ctx) {
};

// Exit a parse tree produced by SqlBaseParser#leftJoin.
SqlBaseListener.prototype.exitLeftJoin = function(ctx) {
};


// Enter a parse tree produced by SqlBaseParser#joinWindow.
SqlBaseListener.prototype.enterJoinWindow = function(ctx) {
};

// Exit a parse tree produced by SqlBaseParser#joinWindow.
SqlBaseListener.prototype.exitJoinWindow = function(ctx) {
};


// Enter a parse tree produced by SqlBaseParser#joinWindowWithBeforeAndAfter.
SqlBaseListener.prototype.enterJoinWindowWithBeforeAndAfter = function(ctx) {
};

// Exit a parse tree produced by SqlBaseParser#joinWindowWithBeforeAndAfter.
SqlBaseListener.prototype.exitJoinWindowWithBeforeAndAfter = function(ctx) {
};


// Enter a parse tree produced by SqlBaseParser#singleJoinWindow.
SqlBaseListener.prototype.enterSingleJoinWindow = function(ctx) {
};

// Exit a parse tree produced by SqlBaseParser#singleJoinWindow.
SqlBaseListener.prototype.exitSingleJoinWindow = function(ctx) {
};


// Enter a parse tree produced by SqlBaseParser#joinWindowSize.
SqlBaseListener.prototype.enterJoinWindowSize = function(ctx) {
};

// Exit a parse tree produced by SqlBaseParser#joinWindowSize.
SqlBaseListener.prototype.exitJoinWindowSize = function(ctx) {
};


// Enter a parse tree produced by SqlBaseParser#joinCriteria.
SqlBaseListener.prototype.enterJoinCriteria = function(ctx) {
};

// Exit a parse tree produced by SqlBaseParser#joinCriteria.
SqlBaseListener.prototype.exitJoinCriteria = function(ctx) {
};


// Enter a parse tree produced by SqlBaseParser#aliasedRelation.
SqlBaseListener.prototype.enterAliasedRelation = function(ctx) {
};

// Exit a parse tree produced by SqlBaseParser#aliasedRelation.
SqlBaseListener.prototype.exitAliasedRelation = function(ctx) {
};


// Enter a parse tree produced by SqlBaseParser#columns.
SqlBaseListener.prototype.enterColumns = function(ctx) {
};

// Exit a parse tree produced by SqlBaseParser#columns.
SqlBaseListener.prototype.exitColumns = function(ctx) {
};


// Enter a parse tree produced by SqlBaseParser#tableName.
SqlBaseListener.prototype.enterTableName = function(ctx) {
};

// Exit a parse tree produced by SqlBaseParser#tableName.
SqlBaseListener.prototype.exitTableName = function(ctx) {
};


// Enter a parse tree produced by SqlBaseParser#expression.
SqlBaseListener.prototype.enterExpression = function(ctx) {
};

// Exit a parse tree produced by SqlBaseParser#expression.
SqlBaseListener.prototype.exitExpression = function(ctx) {
};


// Enter a parse tree produced by SqlBaseParser#logicalNot.
SqlBaseListener.prototype.enterLogicalNot = function(ctx) {
};

// Exit a parse tree produced by SqlBaseParser#logicalNot.
SqlBaseListener.prototype.exitLogicalNot = function(ctx) {
};


// Enter a parse tree produced by SqlBaseParser#booleanDefault.
SqlBaseListener.prototype.enterBooleanDefault = function(ctx) {
};

// Exit a parse tree produced by SqlBaseParser#booleanDefault.
SqlBaseListener.prototype.exitBooleanDefault = function(ctx) {
};


// Enter a parse tree produced by SqlBaseParser#logicalBinary.
SqlBaseListener.prototype.enterLogicalBinary = function(ctx) {
};

// Exit a parse tree produced by SqlBaseParser#logicalBinary.
SqlBaseListener.prototype.exitLogicalBinary = function(ctx) {
};


// Enter a parse tree produced by SqlBaseParser#predicated.
SqlBaseListener.prototype.enterPredicated = function(ctx) {
};

// Exit a parse tree produced by SqlBaseParser#predicated.
SqlBaseListener.prototype.exitPredicated = function(ctx) {
};


// Enter a parse tree produced by SqlBaseParser#comparison.
SqlBaseListener.prototype.enterComparison = function(ctx) {
};

// Exit a parse tree produced by SqlBaseParser#comparison.
SqlBaseListener.prototype.exitComparison = function(ctx) {
};


// Enter a parse tree produced by SqlBaseParser#between.
SqlBaseListener.prototype.enterBetween = function(ctx) {
};

// Exit a parse tree produced by SqlBaseParser#between.
SqlBaseListener.prototype.exitBetween = function(ctx) {
};


// Enter a parse tree produced by SqlBaseParser#inList.
SqlBaseListener.prototype.enterInList = function(ctx) {
};

// Exit a parse tree produced by SqlBaseParser#inList.
SqlBaseListener.prototype.exitInList = function(ctx) {
};


// Enter a parse tree produced by SqlBaseParser#like.
SqlBaseListener.prototype.enterLike = function(ctx) {
};

// Exit a parse tree produced by SqlBaseParser#like.
SqlBaseListener.prototype.exitLike = function(ctx) {
};


// Enter a parse tree produced by SqlBaseParser#nullPredicate.
SqlBaseListener.prototype.enterNullPredicate = function(ctx) {
};

// Exit a parse tree produced by SqlBaseParser#nullPredicate.
SqlBaseListener.prototype.exitNullPredicate = function(ctx) {
};


// Enter a parse tree produced by SqlBaseParser#distinctFrom.
SqlBaseListener.prototype.enterDistinctFrom = function(ctx) {
};

// Exit a parse tree produced by SqlBaseParser#distinctFrom.
SqlBaseListener.prototype.exitDistinctFrom = function(ctx) {
};


// Enter a parse tree produced by SqlBaseParser#valueExpressionDefault.
SqlBaseListener.prototype.enterValueExpressionDefault = function(ctx) {
};

// Exit a parse tree produced by SqlBaseParser#valueExpressionDefault.
SqlBaseListener.prototype.exitValueExpressionDefault = function(ctx) {
};


// Enter a parse tree produced by SqlBaseParser#concatenation.
SqlBaseListener.prototype.enterConcatenation = function(ctx) {
};

// Exit a parse tree produced by SqlBaseParser#concatenation.
SqlBaseListener.prototype.exitConcatenation = function(ctx) {
};


// Enter a parse tree produced by SqlBaseParser#arithmeticBinary.
SqlBaseListener.prototype.enterArithmeticBinary = function(ctx) {
};

// Exit a parse tree produced by SqlBaseParser#arithmeticBinary.
SqlBaseListener.prototype.exitArithmeticBinary = function(ctx) {
};


// Enter a parse tree produced by SqlBaseParser#arithmeticUnary.
SqlBaseListener.prototype.enterArithmeticUnary = function(ctx) {
};

// Exit a parse tree produced by SqlBaseParser#arithmeticUnary.
SqlBaseListener.prototype.exitArithmeticUnary = function(ctx) {
};


// Enter a parse tree produced by SqlBaseParser#atTimeZone.
SqlBaseListener.prototype.enterAtTimeZone = function(ctx) {
};

// Exit a parse tree produced by SqlBaseParser#atTimeZone.
SqlBaseListener.prototype.exitAtTimeZone = function(ctx) {
};


// Enter a parse tree produced by SqlBaseParser#dereference.
SqlBaseListener.prototype.enterDereference = function(ctx) {
};

// Exit a parse tree produced by SqlBaseParser#dereference.
SqlBaseListener.prototype.exitDereference = function(ctx) {
};


// Enter a parse tree produced by SqlBaseParser#simpleCase.
SqlBaseListener.prototype.enterSimpleCase = function(ctx) {
};

// Exit a parse tree produced by SqlBaseParser#simpleCase.
SqlBaseListener.prototype.exitSimpleCase = function(ctx) {
};


// Enter a parse tree produced by SqlBaseParser#columnReference.
SqlBaseListener.prototype.enterColumnReference = function(ctx) {
};

// Exit a parse tree produced by SqlBaseParser#columnReference.
SqlBaseListener.prototype.exitColumnReference = function(ctx) {
};


// Enter a parse tree produced by SqlBaseParser#subscript.
SqlBaseListener.prototype.enterSubscript = function(ctx) {
};

// Exit a parse tree produced by SqlBaseParser#subscript.
SqlBaseListener.prototype.exitSubscript = function(ctx) {
};


// Enter a parse tree produced by SqlBaseParser#structConstructor.
SqlBaseListener.prototype.enterStructConstructor = function(ctx) {
};

// Exit a parse tree produced by SqlBaseParser#structConstructor.
SqlBaseListener.prototype.exitStructConstructor = function(ctx) {
};


// Enter a parse tree produced by SqlBaseParser#typeConstructor.
SqlBaseListener.prototype.enterTypeConstructor = function(ctx) {
};

// Exit a parse tree produced by SqlBaseParser#typeConstructor.
SqlBaseListener.prototype.exitTypeConstructor = function(ctx) {
};


// Enter a parse tree produced by SqlBaseParser#qualifiedColumnReference.
SqlBaseListener.prototype.enterQualifiedColumnReference = function(ctx) {
};

// Exit a parse tree produced by SqlBaseParser#qualifiedColumnReference.
SqlBaseListener.prototype.exitQualifiedColumnReference = function(ctx) {
};


// Enter a parse tree produced by SqlBaseParser#cast.
SqlBaseListener.prototype.enterCast = function(ctx) {
};

// Exit a parse tree produced by SqlBaseParser#cast.
SqlBaseListener.prototype.exitCast = function(ctx) {
};


// Enter a parse tree produced by SqlBaseParser#parenthesizedExpression.
SqlBaseListener.prototype.enterParenthesizedExpression = function(ctx) {
};

// Exit a parse tree produced by SqlBaseParser#parenthesizedExpression.
SqlBaseListener.prototype.exitParenthesizedExpression = function(ctx) {
};


// Enter a parse tree produced by SqlBaseParser#arrayConstructor.
SqlBaseListener.prototype.enterArrayConstructor = function(ctx) {
};

// Exit a parse tree produced by SqlBaseParser#arrayConstructor.
SqlBaseListener.prototype.exitArrayConstructor = function(ctx) {
};


// Enter a parse tree produced by SqlBaseParser#mapConstructor.
SqlBaseListener.prototype.enterMapConstructor = function(ctx) {
};

// Exit a parse tree produced by SqlBaseParser#mapConstructor.
SqlBaseListener.prototype.exitMapConstructor = function(ctx) {
};


// Enter a parse tree produced by SqlBaseParser#functionCall.
SqlBaseListener.prototype.enterFunctionCall = function(ctx) {
};

// Exit a parse tree produced by SqlBaseParser#functionCall.
SqlBaseListener.prototype.exitFunctionCall = function(ctx) {
};


// Enter a parse tree produced by SqlBaseParser#searchedCase.
SqlBaseListener.prototype.enterSearchedCase = function(ctx) {
};

// Exit a parse tree produced by SqlBaseParser#searchedCase.
SqlBaseListener.prototype.exitSearchedCase = function(ctx) {
};


// Enter a parse tree produced by SqlBaseParser#literalExpression.
SqlBaseListener.prototype.enterLiteralExpression = function(ctx) {
};

// Exit a parse tree produced by SqlBaseParser#literalExpression.
SqlBaseListener.prototype.exitLiteralExpression = function(ctx) {
};


// Enter a parse tree produced by SqlBaseParser#timeZoneString.
SqlBaseListener.prototype.enterTimeZoneString = function(ctx) {
};

// Exit a parse tree produced by SqlBaseParser#timeZoneString.
SqlBaseListener.prototype.exitTimeZoneString = function(ctx) {
};


// Enter a parse tree produced by SqlBaseParser#comparisonOperator.
SqlBaseListener.prototype.enterComparisonOperator = function(ctx) {
};

// Exit a parse tree produced by SqlBaseParser#comparisonOperator.
SqlBaseListener.prototype.exitComparisonOperator = function(ctx) {
};


// Enter a parse tree produced by SqlBaseParser#booleanValue.
SqlBaseListener.prototype.enterBooleanValue = function(ctx) {
};

// Exit a parse tree produced by SqlBaseParser#booleanValue.
SqlBaseListener.prototype.exitBooleanValue = function(ctx) {
};


// Enter a parse tree produced by SqlBaseParser#type.
SqlBaseListener.prototype.enterType = function(ctx) {
};

// Exit a parse tree produced by SqlBaseParser#type.
SqlBaseListener.prototype.exitType = function(ctx) {
};


// Enter a parse tree produced by SqlBaseParser#typeParameter.
SqlBaseListener.prototype.enterTypeParameter = function(ctx) {
};

// Exit a parse tree produced by SqlBaseParser#typeParameter.
SqlBaseListener.prototype.exitTypeParameter = function(ctx) {
};


// Enter a parse tree produced by SqlBaseParser#baseType.
SqlBaseListener.prototype.enterBaseType = function(ctx) {
};

// Exit a parse tree produced by SqlBaseParser#baseType.
SqlBaseListener.prototype.exitBaseType = function(ctx) {
};


// Enter a parse tree produced by SqlBaseParser#whenClause.
SqlBaseListener.prototype.enterWhenClause = function(ctx) {
};

// Exit a parse tree produced by SqlBaseParser#whenClause.
SqlBaseListener.prototype.exitWhenClause = function(ctx) {
};


// Enter a parse tree produced by SqlBaseParser#unquotedIdentifier.
SqlBaseListener.prototype.enterUnquotedIdentifier = function(ctx) {
};

// Exit a parse tree produced by SqlBaseParser#unquotedIdentifier.
SqlBaseListener.prototype.exitUnquotedIdentifier = function(ctx) {
};


// Enter a parse tree produced by SqlBaseParser#quotedIdentifierAlternative.
SqlBaseListener.prototype.enterQuotedIdentifierAlternative = function(ctx) {
};

// Exit a parse tree produced by SqlBaseParser#quotedIdentifierAlternative.
SqlBaseListener.prototype.exitQuotedIdentifierAlternative = function(ctx) {
};


// Enter a parse tree produced by SqlBaseParser#backQuotedIdentifier.
SqlBaseListener.prototype.enterBackQuotedIdentifier = function(ctx) {
};

// Exit a parse tree produced by SqlBaseParser#backQuotedIdentifier.
SqlBaseListener.prototype.exitBackQuotedIdentifier = function(ctx) {
};


// Enter a parse tree produced by SqlBaseParser#digitIdentifier.
SqlBaseListener.prototype.enterDigitIdentifier = function(ctx) {
};

// Exit a parse tree produced by SqlBaseParser#digitIdentifier.
SqlBaseListener.prototype.exitDigitIdentifier = function(ctx) {
};


// Enter a parse tree produced by SqlBaseParser#sourceName.
SqlBaseListener.prototype.enterSourceName = function(ctx) {
};

// Exit a parse tree produced by SqlBaseParser#sourceName.
SqlBaseListener.prototype.exitSourceName = function(ctx) {
};


// Enter a parse tree produced by SqlBaseParser#decimalLiteral.
SqlBaseListener.prototype.enterDecimalLiteral = function(ctx) {
};

// Exit a parse tree produced by SqlBaseParser#decimalLiteral.
SqlBaseListener.prototype.exitDecimalLiteral = function(ctx) {
};


// Enter a parse tree produced by SqlBaseParser#floatLiteral.
SqlBaseListener.prototype.enterFloatLiteral = function(ctx) {
};

// Exit a parse tree produced by SqlBaseParser#floatLiteral.
SqlBaseListener.prototype.exitFloatLiteral = function(ctx) {
};


// Enter a parse tree produced by SqlBaseParser#integerLiteral.
SqlBaseListener.prototype.enterIntegerLiteral = function(ctx) {
};

// Exit a parse tree produced by SqlBaseParser#integerLiteral.
SqlBaseListener.prototype.exitIntegerLiteral = function(ctx) {
};


// Enter a parse tree produced by SqlBaseParser#nullLiteral.
SqlBaseListener.prototype.enterNullLiteral = function(ctx) {
};

// Exit a parse tree produced by SqlBaseParser#nullLiteral.
SqlBaseListener.prototype.exitNullLiteral = function(ctx) {
};


// Enter a parse tree produced by SqlBaseParser#numericLiteral.
SqlBaseListener.prototype.enterNumericLiteral = function(ctx) {
};

// Exit a parse tree produced by SqlBaseParser#numericLiteral.
SqlBaseListener.prototype.exitNumericLiteral = function(ctx) {
};


// Enter a parse tree produced by SqlBaseParser#booleanLiteral.
SqlBaseListener.prototype.enterBooleanLiteral = function(ctx) {
};

// Exit a parse tree produced by SqlBaseParser#booleanLiteral.
SqlBaseListener.prototype.exitBooleanLiteral = function(ctx) {
};


// Enter a parse tree produced by SqlBaseParser#stringLiteral.
SqlBaseListener.prototype.enterStringLiteral = function(ctx) {
};

// Exit a parse tree produced by SqlBaseParser#stringLiteral.
SqlBaseListener.prototype.exitStringLiteral = function(ctx) {
};


// Enter a parse tree produced by SqlBaseParser#nonReserved.
SqlBaseListener.prototype.enterNonReserved = function(ctx) {
};

// Exit a parse tree produced by SqlBaseParser#nonReserved.
SqlBaseListener.prototype.exitNonReserved = function(ctx) {
};



exports.SqlBaseListener = SqlBaseListener;