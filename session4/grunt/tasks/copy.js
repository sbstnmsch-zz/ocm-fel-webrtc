module.exports = {
    cat: {
        files: [{
            expand: true,
            cwd: "src",
            src: ['**/*.{html,jpg,css}'],
            dest: 'dist/'
        }]
    }

};
