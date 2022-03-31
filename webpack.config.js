const path = require('path')

module.exports = {
  mode: 'production',
  entry: './index.js',
  output: {
    filename: 'dwj_utils.js',
    path: path.resolve(__dirname, 'build'),
    libraryTarget: 'umd',
    library: 'dwjUtils',
    globalObject: 'this'
  }
}
