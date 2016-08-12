module.exports = {
  entry: ["./js/app.ts"],
  output: {
    path: "./dist",
    publicPath: "/assets/",
    filename: "bundle.js"
  },
  resolve: {
      // Add '.ts' and '.tsx' as resolvable extensions.
      extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
  },
  module: {
    loaders: [{
      test: /\.ts$/,
      loader: "ts"
    }]
  }
};
