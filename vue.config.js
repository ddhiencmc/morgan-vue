module.exports = {
  css: {
    extract: true,
    loaderOptions: {
      css: {},
    },
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
