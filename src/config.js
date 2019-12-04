/**
 * @file Sets up the configuration manager and any validation functions it needs
 */
const convict = require('convict')
const path = require('path')

/** The configuration to provide to the generator */
var config = convict({
    queriesPath: {
        doc: 'The path to the KSQL queries',
        format: 'String',
        default: './',
        arg: 'queries',
        env: 'QUERIES_PATH'
    },
    configFile: {
        doc: 'The path to the configuration file you would like to use to configure for this deployment',
        format: 'String',
        default: 'false',
        arg: 'config',
        env: 'QUERIES_CONFIG'
    },
    output: {
        doc: 'The path to the file you would like to save the output queries in',
        format: 'String',
        default: '',
        arg: 'output',
        env: 'OUTPUT'
    },
    lint: {
        doc: 'Exit on Syntax Errors',
        format: 'Boolean',
        arg: 'lint',
        default: false
    },
    topics: {
        doc: 'Array of the names of topics we want to generate',
        format: 'Array',
        default: [],
        arg: 'topics',
        env: 'TOPICS'
    },
    replacements: {
        doc: 'Replacements to make in the generated queries',
        format: 'Object',
        default: {}
    }
})

if (config.get('configFile') !== 'false') {

    config.loadFile(path.resolve(process.cwd(), config.get('configFile')))

    if (!config.get('configFile').startsWith('/')) {

        // set working directory to the directory the config file is in
        process.chdir(path.dirname(path.resolve(process.cwd(), config.get('configFile'))))

    }

}

module.exports = config
config.validate({
    allowed: 'strict'
})
