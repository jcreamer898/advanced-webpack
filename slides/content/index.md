name: intro
class: center, middle

# Advanced WebPack

---
class: center, middle

# whoami

### Jonathan Creamer

<img src="images/family.jpg" style="width: 80%;" />

---

# whoami

* Currently Senior Front End Engineer at [Lonely Planet](http://lonelyplanet.com)
* Past JavaScript Engineer appendTo
* Nashville, TN

<img src="images/lonelyplanet_bw.png" style="width: 10em" />

* Love JavaScript, tweet at [@jcreamer898](http://twitter.com/jcreamer898), blog at [jonathancreamer.com](http://jonathancreamer.com)
* [Microsoft IE MVP](https://mvp.microsoft.com/en-us/MyProfile/Preview?previewAs=Public), [Telerik Developer Expert](http://developer.telerik.com/community/developer-experts/)

???


---

name: agenda

# Agenda

1. Intro
1. CLI options
1. Targets (including node)
1. Code Splitting
1. Create css files
1. Unit test w/ Karma and Mocha
1. Critical CSS
1. Stats w/ online tool
1. Pre and post loaders
1. Feature flags

---
class: center, middle

# WebPack

---
class: center, middle

### When I looked at the WebPack API for the first time...

![](images/confused.gif)

---

# WebPack

* Bundle all the things
* Flexible
* CommonJS, AMD, Node
* Loaders
* Plugins
* Vast ecosystem w/ strange API

???

* A static asset bundler
* Takes any static asset, passes it through a loader
* Creates bundles
* Extremely flexible
* Can write code in CommonJS, or AMD out of the box
* Use Babel-Loader for ES6

---

# Run WebPack with the CLI

```shell
npm install -g webpack
webpack --progress
```

* Use progress to show output info

---

# Useful CLI options

![](images/display-reasons.png)

* `--display-modules --display-reasons` shows some info about why your modules are included

---
# Useful CLI options

![](images/display-chunks.png)

* `--display-chunks` will show any other chunks you've created

---
# Useful CLI options

* `--output-library-target target` maps to configuration options `output.libraryTarget`
* Can map any config

---
# Useful CLI options

* `-d` alias for `--debug --devtool source-map --output-pathinfo` will output source maps
* `-p` alias for `--optimize-minimize --optimize-occurence-order`

---

# Performance tool

<img src="images/perf.png" style="width: 100%" />

* `--profile --json >> stats.json` output build statistics for [analyse](http://webpack.github.io/analyse) tool

???

Gives you hints on how to improve
Displays all modules and why they're included

---
class: center, middle

# Multiple Entry Bundling

---

class: left

# Load only the JavaScript/CSS needed

* Each page needs it's own assets
* How to separate?
* What about common code? jQuery?
* It is possible with WebPack

---

# Multiple Pages Example

```js
entry: {
  common: ["jquery"],
  continents: "./javascripts/continents.js",
  countries: "./javascripts/countries.js",
  cities: "./javascripts/cities.js",
  polyfill: ["babel/polyfill"]
},
output: {
  path: path.join(__dirname, "public", "javascripts"),
  filename: "[name].js",
  chunkFilename: "[name]_[chunkhash:20].js",
  publicPath: "/javascripts/",
  libraryTarget: "var"
},
```

* Divide your app with entries
* `[name]`, `[hash]`, and `[chunkhash]`
* Can use the hash ones for cache busting

???

[hash] is compliation
[chunkhash] is the hash of the actual chunk

---

# Plugins

* Many different webpack Plugins
* Easy to install and use
* `CommonsChunk`, `Uglify`, `ExtractTextPlugin`
* [Many more](http://webpack.github.io/docs/plugins.html)


---

# CommonsChunk

```js
entry: {
  common: ["jquery"],
  /* ... */
},
plugins: [new webpack.optimize.CommonsChunkPlugin({
  name: "common",
  minChunks: 2
})]
```

* Create a "common" bundle
* 2 or more times
* Can default with jQuery, etc
* Will extract common modules

---
class: center, middle

# CSS

---

# CSS Loaders

```js
module: {
  loaders: [{
    test: /\.scss$/,
    loader: "style!css!sass"
  }]
}
```

* Uses `node-sass`
* `sass-loader` compiles
* `css-loader` sends compiled CSS to...
* `style-loader` **inlines** CSS

???

node-sass is a c++ version of sass which is very fast

---

# css-loader

<img src="images/instagram.png" style="width: 100%" />

---

# css-loader

* Inline css is fast
* Not always ideal
* Flash of unstyled content issues

???

In a web app, you can deal with css Easy

---

# ExtractTextPlugin

```shell
npm install extract-text-webpack-plugin --save-dev
```

* https://github.com/webpack/extract-text-webpack-plugin

---

# ExtractTextPlugin

```js
let ExtractTextPlugin = require("extract-text-webpack-plugin");

//...

loaders: [{
  test: /\.scss$/,
  loader: ExtractTextPlugin.extract(
    "style-loader",
    "css-loader!" +
    "autoprefixer-loader?browsers=last 3 version" +
    "!sass-loader?outputStyle=expanded&" +
    "includePaths[]=" + path.resolve(__dirname, "./node_modules"))
},
//...
],
plugins: [new ExtractTextPlugin("[name].css")]
```

* Will create css files
* Named after your entries
* `cities.css`, `continents.css`, `common.css`, etc

---

# Critical CSS

* Important to show something fast
* Render the "above the fold" content
* Can utilize code splitting
* Use WebPageTest or Chrome DevTools

---

# Critical CSS

<img src="images/above-the-fold.png" style="width: 100%;" />

---

# Timeline

![](http://d.pr/i/zYks+)


---

#  Code Splitting

* Create "chunks"
* Load async like w/ require.js
* Uses `require` or `require.ensure`

---

# Code Splitting

```js
import Masthead from "rizzo-next/src/components/masthead";
import rizzo from "rizzo-next";
import "./main";

// ...

require.ensure([
  "./below_the_fold"
], function(require) {
  // Now require it "sync"
  require("./below_the_fold");

}, "below_the_fold");
```
![](images/below_stats.png)

* Creates a named chunk called "below_the_fold"

---

# Code Splitting

```js
require.ensure([
  "./below_the_fold"
], function(require) {
  // Now require it "sync"
  require("./below_the_fold");

  // Create yet another unnamed chunk
  require([
    "rizzo-next/src/components/hotels",
    "rizzo-next/src/components/food_and_drink",
    "rizzo-next/src/components/survival_guide"
  ], function(Hotels) {
    // ...
  });
});
```

* Create another chunk
---

class: center, middle

# Build Targets

---

# Target AMD

```js
output: {
  libraryTarget: "amd"
}
```

* `var` is default (basically IFFEs)
* WebPack supports AMD modules
* Can also OUTPUT them
* Also supports `umd`
* Start with CommonJS, or even ES6

???

Allows you to write in any format and output AMD still if needed

---

# Target Node.js

```js
output: {
  libraryTarget: "commonjs2"
},
target: "node"
```


* Support all ES features
* Not all versions of node support ES2015

---

# Target Node.js

```js
// lib/logger.js
import airbrake from "node-airbrake";

export default class Logger {
  log(message) {
    airbrake.notify(message);
  }
}
```

* Will export as `module.exports = Logger;`

---
class: center, middle

# Loaders

---
class: center middle

## When you have dreams about new JS features and remember you still have to support IE8...

![](images/picard-surprise.gif)

---

# Transpile Loaders

```js
module: {
  loaders: [{
    test: /\.js$/,
    exclude: /(node_modules)/,
    loader: "babel"
  }, {
    test: /\.ts$/,
    loader: "typescript"
  }, {
    test: /\.coffee$/,
    loader: "coffee"
  }]
}
```

* Test file types
* Pass through loaders for Transpilers

???

* Many different types of loaders
* Pass in an array of loaders
* Use `test` to take any file with that extension and push it through the loader
* Here we're using the `babel-loader`
* Query params for options

---

# TC39 stages

* TC39 has [stages](https://tc39.github.io/process-document/)
* 0 for strawman
* 1 for proposed
* 2 for Draft
* Decorators by [Yehuda Katz](http://twitter.com/wycats) is proposed

---

# Use early stages Now

```js
@component
class MyComponent() {
  @readonly
  get alerts() {
    return [/*...*/];
  }
  @publish
  fooMethod() {
    // ...
  }
}
```

```js
loader: "babel?stage=1"
```

* Decorators allow you to wrap methods
* Use now and test w/ `stage=1`
* Great for the TC39

---

# PreLoaders and PostLoaders

```js
preLoaders: [{
  test: /\.jsx?$/,
  loader: "eslint-loader",
  exclude: /node_modules/
}],
postLoaders: [{
  test: /\.js$/,
  include: path.resolve("src/components/"),
  loader: "istanbul-instrumenter"
}]
```

* Runs before other loaders
* `jslint`, `eslint`, `istanbul`
* Istanbul instrumentation for code coverage

---
class: center, middle

# More Plugins

---

# Feature flags w/ Define Plugin

```js
export default class Logger {
  /**
   * Log an error
   * @param {Error|Object|String} message Either string or object containing error details
   */
  error(err) {
    console.error(err);

    if (ENV_PROD) {
      airbrake.notify(err);
    }
  }
}
```

---

# Define Plugin

```js
// webpack.dev.js
var define = new webpack.DefinePlugin({
  ENV_PROD: true
});
```
```js
// webpack.dev.js
var define = new webpack.DefinePlugin({
  ENV_PROD: false
});
```

* Multiple webpack configs
* Will replace w/ `false` or `true`
* Removed in a prod build

---

# Resources

* [WebPack](http://webpack.github.io)
* Awesome Pete Hunt [Instgram talk](https://www.youtube.com/watch?v=VkTCL6Nqm6Y)
* Link to Slides -> http://bit.ly/cob-js-23
* GitHub Repo -> http://bit.ly/cob-js-23-repo

---
class: center, middle

# Thanks

### [@jcreamer898](http://twitter.com/jcreamer898)
### [jonathancreamer.com](http://jonathancreamer.com)

![](images/livelong.gif)
