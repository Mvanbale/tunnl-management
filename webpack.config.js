var debug = true;
var webpack = require('webpack');
var path = require('path');

module.exports = {
  context: path.join(__dirname, "src"),
  devtool: "cheap-module-source-map",
  entry: "./js/client.js",
  module: {
    loaders: [
      { test: /\.json$/, loader: "json-loader" },
      {
        test: /\.js?$/,
        exclude: /(node_modules|bower_components)/,

        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy'],
        },
        loader: 'babel-loader',
      },
      {
      test: /\.css$/, // Only .css files
      loader: 'style!css' // Run both loaders
    }
    ]
  },
  output: {
    path: __dirname + "/src/",
    filename: "client.min.js"
  },
  plugins: debug ? [] : [
    new webpack.DefinePlugin({
    'process.env.NODE_ENV': '"production"'
}),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],
};
