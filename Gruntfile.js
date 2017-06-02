module.exports = function(grunt) {

    require('load-grunt-tasks')(grunt);

    var path = {
        src: "src/",
        build: "dist/",
        sass: "src/assets/sass/",
        css: "dist/assets/css/",
        js: "src/assets/js/",
        template: "src/templates/",
        imgSrc: "src/assets/img/",
        imgDist: "dist/assets/img"
    };

    require('load-grunt-config')(grunt,{
        config: {
            path: path
        }
    });

    grunt.registerTask('default', ['sass','jshint','concat','assemble','copy:copyGlyphs','copy:copyImage','connect','watch']);
    grunt.registerTask('production', ['clean','sass','jshint','concat','uglify','assemble:site','assemble:sitePartials','imagemin','copy']);

};