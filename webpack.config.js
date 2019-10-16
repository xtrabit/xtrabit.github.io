const path = require('path');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'src', 'index.jsx'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'static')
  },
  module: {
    rules: [
      {
        test: /(.js$|.jsx$)/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devServer: {
    contentBase: [
      path.join(__dirname, './')
    ],
    historyApiFallback: {
      rewrites: [
        { from: /./, to: './404.html' }
      ]
    }
  }
};
