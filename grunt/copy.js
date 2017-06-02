module.exports = {
    copyFonts: {
        expand: true,
        cwd: '<%= path.src %>assets/fonts/',
        src: [
            '*'
        ],
        dest: '<%= path.build %>assets/fonts/'
    },
    copyGlyphs: {
        expand: true,
        cwd: 'node_modules/bootstrap-sass/assets/fonts/bootstrap',
        src: [
            '*'
        ],
        dest: '<%= path.build%>/assets/fonts/bootstrap/'
    },
    copyImage: {
        expand: true,
        cwd: '<%= path.src %>assets/img/',
        src: [
            '*'
        ],
        dest: '<%= path.build %>assets/img/'
    }
};