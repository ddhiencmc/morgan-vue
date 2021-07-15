module.exports = {
  css: {
    extract: false,
  },
  // options...
  configureWebpack: {
    output: {
      libraryExport: 'default',
      filename: '[name].bundle.js',
      chunkFilename: 'app.js',
    },
  },
}
