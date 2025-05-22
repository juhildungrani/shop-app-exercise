const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './index.web.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  resolve: {
    alias: {
      'react-native$': 'react-native-web',
    },
    extensions: ['.web.js', '.js', '.json', '.tsx'], // ✅ added .tsx
  },
  module: {
    rules: [
      {
        test: /\.(js|web.js)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['module:metro-react-native-babel-preset'],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      templateContent: `
        <html>
          <head><title>ShopApp Web</title></head>
          <body><div id="app-root"></div></body>
        </html>
      `,
    }),
  ],
  devServer: {
    static: './dist',
    hot: true,
    historyApiFallback: true,
    port: 8080,
  },
};
