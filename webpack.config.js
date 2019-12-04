module.exports = {
    mode: 'production',
    entry: './src/main.js',
    output: {
        path: __dirname,
        filename: 'bundle.js',
        libraryTarget: 'commonjs'
    },
    devtool: 'none',
    optimization: {
        usedExports: true
    },
    target: 'node'
}
