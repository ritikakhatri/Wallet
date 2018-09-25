const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry:  './src/index.js',
   plugins: [
     new CleanWebpackPlugin(['dist']),
     new HtmlWebpackPlugin({
      template: path.join(__dirname, "./public/index.html"),
       title: 'Production'
     })
   ],
   module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: { presets: ['env'] }
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      }
    ]
  },
   output: {
     filename: 'bundle.js',
     path: path.resolve(__dirname, 'dist')
   }
};