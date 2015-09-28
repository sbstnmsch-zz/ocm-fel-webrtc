module.exports = {
    cat: {
        files: [{
            expand: true,
            cwd: "src",
            src: ['**/**'],
            dest: 'dist/'
        }]
    },
    vendor: {
        files: [{
            expand: true,
            cwd: "node_modules",
            src: ['jquery/dist/jquery.js', 'normalize.css-browser/normalize.css', 'bootstrap/dist/css/bootstrap.css'],
            flatten: true,
            dest: 'dist/'
        }]
    }
};
