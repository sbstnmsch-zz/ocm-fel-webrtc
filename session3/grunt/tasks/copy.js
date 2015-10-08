module.exports = {
    cat: {
        files: [{
            expand: true,
            cwd: "src",
            src: ['**/**'],
            dest: 'dist/'
        }]
    }

};
