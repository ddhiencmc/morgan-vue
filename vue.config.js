module.exports = {
    css: {
        extract: true,
    },
    configureWebpack: {
        optimization: {
            splitChunks: false,
        },
        output: {
            filename: 'app.js'
        }
    }
}