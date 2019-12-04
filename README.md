# KSQL query linter and composer with dependency resolution

The general purpose of this tool is to lint, perform variable replacement, and compose KSQL
queries from many individual files into a single output file selected by output topics. The
queries in the output file should always be in the correct order for stream/table composition.
For specific details about how query selection and ordering works see the [src/main.js](src/main.js)
file.

## Install

Install globally with [npm](https://nodejs.org/en/docs/meta/topics/dependencies/#npm)
```bash
npm install -g ksql-query-builder
```
or [yarn](https://yarnpkg.com/)
```bash
yarn global add ksql-query-builder
```

## Usage

Basic usage, `ksql-query-builder --topics='output,topics_desired` in a directory with queries will
read and parse all queries found in the current directory or below then output all the queries
necessary to generate the `output` and `topics_desired` topics.  To use replacements, create a
[json file](config.json) with the replacement property set to an object, see [#replacements] for
details. To only lint all the queries in a directory use `--lint`.

# Example output

See [examples/queries.ksql](examples/queries.ksql) for an example of what the formatted and ordered
queries look like.

### Replacements

At this time any property set in a `WITH` block and timezone specifiers can be replaced. To perform
parameter replacement create a config file:
```json
{
  "replacements": {
    "with/partitions": 2,
    "with/VALUE_FORMAT": "'JSON'",
    "time zone": "'new time zone'",
    "function/timestamptostring/tz": "'UTC'"
  },
  "queries": ["order_total"]
}
```
the property name of the replacement is structured like a path and the value is used without
interpolation. If the value needs quoting in the query you must include the quotes in the json.
Property names are case insensitive.

### Automation

This tool was developed specifically to support automation workflows, the `--lint` option should
work the way most other linting tools do in a CI/CD pipeline. For deployments to different
environments that need different scaling performance set the PARTITIONS accordingly, for example
use 1 PARTITION for a development environment and 3 PARTITIONS for production.  The output of
every run should have a unique checksum because the first line is a comment with the ISO time the
output was generated, removing that line should generate consistent files given the same input.

See [examples](examples/README.md) for details, including a suggested development vs production
workflow.

### Library usage

This package can be used as a dependency, you will need to pass in a configuration
object the the exported `run` method. See [src/app.js](src/app.js) for an example of how it works.

### Limitations

Only statements that create topics/streams will be included in the output, if you need drop
statements or other statements for setup(eg `SET 'value' = ...`) you will need to prepend them to the output.

## Configuration

Options can be specified via the command line in the form `--arg=value`, as environment
variables, or in a [config file](examples/README.md)
* `--queries` or `QUERIES_PATH` - The path to the KSQL queries defaults to `./`, use absolute
or relative path, relative paths are resolved relative to the config.json file or `$PWD`
* `--config` or `QUERIES_CONFIG` - The path to the configuration file you would like to use
* `--output` or `OUTPUT` - The path to the file you would like to save the output
queries in, if unset and not in linting mode queries are sent to STDOUT
* `--topics` or `TOPICS` - List of comma-separated topics that you want to have populated,
these are the target topics that will generate output data, the tool will select all the
necessary dependencies and output them in the correct order. N.B. All other topics will *not*
be included in the ouput.
* `--lint` - turns on linting mode which disables writing queries to a file, default off

an example would be

myconfig.json
```json
{
  "replacements": {"with/partitions":2},
  "queries": ["order_total"]
}
```

```bash
yarn generate --queries=path/to/queries/relative/to/config/ --config=myconfig.json --output=queries.ksql
```

## Syntax Errors and Linting

In all cases of syntax error the program will exit without writing a query file. When a
syntax error is encountered in a file the output will be something like

```console
$ yarn generate --queries=tests/queries-bad/ --config=tests/config-good.json --output=queries.ksql
yarn run v1.21.0
$ node ./src/app.js --queries=queries-bad --config=src/tests/config-good.json --output=queries.ksql
===============================================================================================================================================================
Error parsing file: queries-bad/bad-for-clause.ksql
Error at column 22 on line 1

  SELECT * FROM bar b ON (a.id=b.id)
                     ^
mismatched input 'ON' expecting ';'



===============================================================================================================================================================
Error parsing file: queries-bad/bad-struct.ksql
Error at column 96 on line 0

CREATE STREAM pageviews (viewtime BIGINT, user_id VARCHAR, page_id VARCHAR, `Properties` VARCHAR>)
                                                                                               ^
extraneous input '>' expecting {',', ')'}



Done in 0.21s.
```

## KSQL language updates

see [README.md](src/parser/README.md) in the parser directory for grammar
update instructions

## License

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
