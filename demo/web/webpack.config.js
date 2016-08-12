const webpack = require("webpack");

const CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;

module.exports = {
  entry: {
    common: [],
    another: "./js/anotherApp.js",
    app: "./js/app.js",
    moar: "./js/moarApp.js",
  },
  output: {
    path: "./dist",
    filename: "[name].js"
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: "babel?presets[]=es2015&plugins[]=transform-class-properties"
    }]
  },
  plugins: [
    new CommonsChunkPlugin({
      name: "common",
      minChunks: 3
    }),
  ]
};
