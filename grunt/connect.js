module.exports = {
  server: {
    options: {
      port: 9000,
      base: '<%= path.build %>',
      options: {
        maxAge: 300000
      }
    }
  }
}
