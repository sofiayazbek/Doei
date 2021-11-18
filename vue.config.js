module.exports = {
  devServer: {
    disableHostCheck: true,
    proxy: {
      '^/api': {
        target: 'https://doei-backend.sofiaainhoa.repl.co',
        ws: true,
        changeOrigin: true
      },
    }    
  }
};