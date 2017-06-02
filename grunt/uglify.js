module.exports = {
    all: {
        options: {
            mangle: true,
            compress: true,
            wrap: true,
            banner: '/*! Compiled on <%= grunt.template.today("yyyy-mm-dd")%> */'
        },
        files: {
            'dist/assets/js/vendor.min.js': ['src/assets/js/vendor.js'],
            'dist/assets/js/script.min.js': ['src/assets/js/script.js']
        }
    }
}