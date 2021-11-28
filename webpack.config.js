
const path =  require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports = {
  target: 'node',
  entry: {
    main: path.resolve(__dirname, './index.js')
  },
  output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js'
  },

  plugins: [
    new CleanWebpackPlugin(),
  ],

  mode: 'production'
}
