module.exports = {
  entry: './src/app.jsx',
  externals: {
    jquery: 'jQuery'
  },
  output: {
    path: __dirname,
    filename: './src/bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [{
      loader: 'babel-loader',
      query: {
        presets: ['react',  'es2015', 'stage-0']
      },
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/
    }]
  },
  devServer: {
    contentBase: 'app/ui/www',
    devtool: 'eval',
    hot: true,
    inline: true,
    port: 3000,
    historyApiFallback: true
  },
  devtool: 'inline-source-map'
};
