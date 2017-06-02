module.exports = {
  dev: {
    options: {
      sourceMap: true,
      style: 'expanded',
      // tell Sass to look in the Bootstrap stylesheets directory when compiling
      includePaths: ['node_modules/bootstrap-sass/assets/stylesheets']
    },
    files: {
      // the first path is the output and the second is the input
      '<%= path.css %>main.css': '<%= path.sass %>main.scss'
    }
  },
  // this is the "production" Sass config used with the "grunt buildcss" command
  dist: {
    options: {
      sourceMap: false,
      style: 'compressed',
      includePaths: ['node_modules/bootstrap-sass/assets/stylesheets']
    },
    files: {
      '<%= path.css %>main.css': '<%= path.sass %>main.scss'
    }
  }
}
