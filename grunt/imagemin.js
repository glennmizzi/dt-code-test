module.exports = {
  options: {
    cache: false
  },
  files: {
    expand: true,
    cwd: '<%= path.imgSrc %>',
    src: ['**/*.{png,jpg,gif,svg}'],
    dest: '<%= path.imgDist %>'
  }
}
