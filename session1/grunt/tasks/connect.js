module.exports = {
  cat: {
    options: {
      port: 8008,
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
