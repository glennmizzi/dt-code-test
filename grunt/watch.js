module.exports = {
  copy: {
    files: ['<%= path.src %>*'],
    tasks: ['copy']
  },
  sass: {
    files: ['<%= path.sass %>*'],
    tasks: ['sass']
  },
  jshint: {
    files: ['<%= path.js %>**/*.js'],
    tasks: ['jshint']
  },
  concat: {
    files: ['<%= path.js %>**/*.js'],
    tasks: ['concat']
  },
  uglify: {
      files: ['<%= path.js %>**/*.js'],
      tasks: ['uglify']
  },
  assemble: {
    files: ['<%= path.template %>**/*.hbs'],
    tasks: ['assemble']
  },
  imagemin: {
    files: ['<%= path.imgSrc %>**/*.{png,jpg,gif,svg}'],
    tasks: ['imagemin']
  }
}
