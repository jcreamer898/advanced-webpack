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

# WebPack

* Bundle all the things
* Flexible
* CommonJS, AMD, Node
* Loaders
* Plugins

???

* A static asset bundler
* Takes any static asset, passes it through a loader
* Creates bundles
* Extremely flexible
* Can write code in CommonJS, or AMD out of the box
* Use Babel-Loader for ES6

---

# Get Started

```shell
npm install -g webpack
```

* Install WebPack globally
* Install Babel Loader locally

---

# Run WebPack with the CLI

```bash
webpack --progress
```

* Now just run it!
* Should have an output at `dist`
* Transpiled JS

---

# Useful CLI options

* `--display-modules --display-reasons` shows some info about why your modules are included

--

* `--display-chunks` will show any other chunks you've created

--

* `--output-library-target target` maps to configuration options `output.libraryTarget`

--

* `-d` alias for `--debug --devtool source-map --output-pathinfo` will output source maps

---

# Performance tool

* `--profile --json >> stats.json` output build statistics for [analyse](webpack.github.io/analyse) tool

<img src="images/perf.png" style="width: 100%" />

???

Gives you hints on how to improve
Displays all modules and why they're included

---
class: center, middle

# Multiple Entry Bundling

---

class: left

# Load only the JavaScript/CSS needed

> "When you have eliminated the impossible, whatever remains, however improbable, must be the truth." Spock

* It is possible with WebPack

---

# Multiple Pages Example

```js
entry: {
  "app": "./js/index",
  "starfleet": "./js/about/index",
  "captainsLog": "./js/captains_log/index"
},
output: {
  path: "./dist",
  filename: "[name].js"
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
  common: [],
  /* ... */
},
plugins: [new webpack.optimize.CommonsChunkPlugin({
  name: "common",
  minChunks: 2
})]
```

* Create a "common" bundle
* Can default with jQuery, etc
* Will extract common modules

---
class: center, middle

# Critical CSS

---

# Critical CSS

* Important to show something fast
* Can utilize code splitting for this

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
  libraryTarget: "amd"
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

# Code Splitting

---

# Loaders

```js
module: {
  loaders: [{
    test: /\.js$/,
    exclude: /(node_modules)/,
    loader: "babel"
  }]
}
```

* Test file types
* Pass through loaders

???

* Many different types of loaders
* Pass in an array of loaders
* Use `test` to take any file with that extension and push it through the loader
* Here we're using the `babel-loader`
* Query params for options
---

# Loaders

```js
module: {
  loaders: [{
    test: /\.scss$/,
    loader: "style!css!sass"
  }]
}
```

* Use `node-sass`
* `sass-loader` compiles
* `css-loader` sends compiled CSS to...
* `style-loader` inlines CSS

---

1. CLI options
1. Targets (including node)
1. Code Splitting
1. Critical CSS
1. Create css files
1. Unit test w/ Karma and Mocha
1. Pre and post loaders
1. Feature flags

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
