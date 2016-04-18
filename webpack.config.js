module.exports = {
  context: __dirname,
  entry: './src/index.jsx',
  output: {
    filename: 'index.js',
    path: './lib'
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    modulesDirectories: ['node_modules']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        exclude: [__dirname + '/node_modules'],
        query: {
          presets: ['es2015', 'react'],
          cacheDirectory: true
        }
      }
    ]
  }
};
