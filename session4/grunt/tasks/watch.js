module.exports = {
   cat: {
       files: ['src/*.*', 'test/*.*'],
       tasks: ['test',
               'copy'],
       options: {
           livereload: true,
           spawn: true
       }
   }
};
