module.exports = {
  all: {
    options: {
      curly: true,
      eqeqeq: true,
      eqnull: true,
      browser: true,
      globals: {
        jQuery: true
      }
    },
    files: {
      src: ['<%= path.js %>modules/*.js']
    }
  }
}
