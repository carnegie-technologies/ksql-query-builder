const capcon = require('capture-console')
const fs = require('fs')
const path = require('path')
const expect = require('expect.js')
const {
    run
} = require('../main')
process.env.QUERIES_CONFIG = 'src/tests/config-good.json'
const config = require('../config')
config.set('output', 'queries.ksql')

function startCapture() {

    var output = ''
    capcon.startIntercept(process.stderr, function (stderr) {

        output += stderr

    })
    return () => {

        capcon.stopIntercept(process.stderr)
        return output

    }

}

describe('main', async function () {

    describe('run', async function (done) {

        it('runs successfully with good input', async function () {

            config.set('queriesPath', path.join(__dirname, 'queries-good/'))
            const getCapture = startCapture()
            await run(config)
            const output = getCapture().toString().trim()
            expect(output).to.be('wrote queries to queries.ksql')
            fs.unlink('queries.ksql', () => {})
            return true

        })
        it('bad input generates useful error messages', async function () {

            config.set('queriesPath', path.join(__dirname, 'queries-bad/'))
            const getCapture = startCapture()
            await run(config)
            const output = getCapture().toString().trim()
            expect(output).to.contain('Error parsing file:')
            expect(output).to.contain('Error at column 96 on line 0')
            expect(output).to.contain('Error at column 22 on line 1')
            expect(output).to.contain("extraneous input '>' expecting {',', ')'}")
            expect(output).to.contain("mismatched input 'ON' expecting ';'")
            return true

        })

    })

})
