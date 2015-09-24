module.exports = {
   cat: {
       files: ['src/*.*'],
       tasks: ['test',
               'copy'],
       options: {
           livereload: true,
           spawn: true
       }
   }
};
