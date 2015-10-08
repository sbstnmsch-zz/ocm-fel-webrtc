module.exports = {
  cat: {
    options: {
      port: '<%= config.port %>',
      livereload: true,
      base: {
        path: 'dist',
        options: {
          index: 'flip.html',
          maxAge: 300000
        }
      }
    }
  }
};
