module.exports = {
    site: {
        // Target-level options
        options: {
            prettify: {indent: 2},
            marked: {sanitize: false},
            production: false,
            assets: '<%= path.src %>',
            ext: '.html',
            layoutdir: '<%= path.src %>templates/layouts',
            partials: ['<%= path.src %>templates/partials/**/*.hbs']
        },
        files: [
            {expand: true, cwd: '<%= path.src %>templates/pages', src: ['*.hbs'], dest: '<%= path.build %>'}
        ]
    }
}