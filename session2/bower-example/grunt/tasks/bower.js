module.exports = {
  dev: {
    dest: 'dist/vendor',
    options: {
      packageSpecific: {
        'bootstrap': {
          files: [
            "dist/css/bootstrap.css"
          ]
        }
      }
    }
  }
};
