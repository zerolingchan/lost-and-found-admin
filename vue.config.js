module.exports = {
    devServer: {
      proxy: {
        '/dev': {
        //   target: 'http://198.13.50.56',
          target: 'http://127.0.0.1:12345',
          changeOrigin: true,
          pathRewrite: {
            '^/dev': '/'
          },
          logLevel: 'debug'
        }
      },
      logLevel: 'debug'
    },
    outputDir: 'docs'
  }