var path = require("path");

module.exports = {
  entry: {
    "app": "./lib/app"
  },
  output: {
    path: "./dist",
    libraryTarget: "commonjs",
    library: "MyAwesomeLogger",
    filename: "index.js"
  },
  target: "node",
  module: {
    loaders: [{
      test: /\.js$/,
      loader: "babel?presets[]=es2015"
    }]
  }
};
