module.exports = {
   cat: {
       files: ['src/**/*', 'test/**/*'],
       tasks: [
         'clean:dist',
         'test',
         'copy:cat',
         'shell:buildJsToDist'
       ],
       options: {
           livereload: true,
           spawn: true
       }
   }
};
