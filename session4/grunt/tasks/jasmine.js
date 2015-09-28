module.exports = {
    cat: {
        src: './src/**/*.js',
        options: {
            specs: './test/**/*.spec.js',
            vendor: [
                "./bower_components/jquery/dist/jquery.js"
            ]
        }
    }
};