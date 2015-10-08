module.exports = {
  cat: {
    options: {
      port: 3518,
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
