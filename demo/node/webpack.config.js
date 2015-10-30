var path = require("path");

module.exports = {
  entry: {
    "app": "./lib/app"
  },
  output: {
    path: "./lib",
    target: "commonjs2",
    filename: "index.js"
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: "babel-loader"
    }]
  },
  resolveLoader: {
    root: path.join(__dirname, "../web/node_modules")
  }
};
