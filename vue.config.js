module.exports = {
    devServer: {
      port: 8088,
      proxy: {
        '/api': {
          target: 'http://198.13.50.56',
          changeOrigin: true,
          logLevel: 'debug'
        }
      },
      logLevel: 'debug'
    },
    outputDir: 'docs',
    publicPath: '/lost-and-found-admin'
  }