const { merge } = require('webpack-merge')
const common = require('../../webpack.common')
const path = require('path').resolve(__dirname, './dist')

module.exports = merge(common, {
  entry: './es/index.js',
  output: {
    filename: 'etc-hooks.js',
    library: 'etc-hooks',
    path,
  },
})
