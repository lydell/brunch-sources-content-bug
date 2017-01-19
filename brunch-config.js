module.exports = {
  files: {
    stylesheets: {
      joinTo: {
        'concat.css': /\.css$/,
        'sass.css': /\.scss$/,
      }
    },
    javascripts: {
      joinTo: {
        'concat.js': /concat\d\.js$/,
        'require.js': 'app/main.js'
      }
    }
  }
}
