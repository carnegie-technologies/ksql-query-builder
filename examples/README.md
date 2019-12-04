# Example configurations and usage

# Example output

[queries.ksql](queries.ksql) contains the ouput of `ksql-query-builder --config=complete.json`

## Configuration

Example configuration files and [queries](./queries/README.md)

* [basic.json](basic.json) - very basic example, only selects one output topicc
* [development.json](development.json) - example of a development file vs production
* [production.json](production.json) - exmaple of a production file vs development
* [replacements.json](replacements.json) - examples of currently supported replacements
* [complete.json](complete.json) - combination of the above, shows all the properties set

## example development/production workflow
```bash
ksql-query-builder --config=development.json | tee queries.json
# vs
ksql-query-builder --config=production.json || exit
```

## Replacements

Replacements occur for all statements that have a matching feature, if you need replace text in
specific queries preprocess them using different tool then compose them together with
ksql-query-builder.

The property name of the replacement is structured like a path and the value is used without
interpolation. If the value needs quoting in the query you must include the quotes in the json.
Property names are case insensitive.

At this time any property set in a `WITH` block and timezone specifiers can be replaced using
`with/NAME` where `NAME` is any property set inside a `WITH(...)`.

### Future goals (feedback welcome!)

* support generic function parameter replacement in the form `function/name/number` where the `name`
is a function name and `number` is the position of the parameter you want to replace.
* support additional features like window sizes eg `"window/size": "30 MINUTES"` and methods
`"window/advance": "30 SECONDS"`.
