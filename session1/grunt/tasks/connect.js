module.exports = {
  cat: {
    options: {
      // keepalive: true,
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
