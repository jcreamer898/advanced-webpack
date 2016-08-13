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
* [Microsoft MVP](https://mvp.microsoft.com/en-us/MyProfile/Preview?previewAs=Public)

???

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
* Vast ecosystem w/ strange API

???

* A static asset bundler
* Takes any static asset, passes it through a loader
* Creates bundles
* Extremely flexible
* Can write code in CommonJS, or AMD out of the box
* Use Babel-Loader for ES6
---
class: center, middle

### When I looked at the WebPack API for the first time...

--

![](images/confused.gif)

???

Jim told me about it  
Strange, but doable

---

# Basics

```js
module.exports = {
  entry: ["./lib/app"]
  output: {
    path: "./dist",
    filename: "index.js"
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: "babel?presets[]=es2015"
    }]
  }
};
```
```shell
npm install --save-dev webpack babel-loader babel-preset-es2015
webpack --progress
```

* Looks for `webpack.config.js` by default
* Use progress to show output info

???

Uses entry to figure out what to put into the bundles  
Figures out which loaders to use by file extension  
Different than grunt or gulp  

---

### Useful CLI options

![](images/hidden-modules.png)

* webpack --progress
* Modules hidden by default

???
* --colors and webpack.config.js are defaults

---

### Useful CLI Options

![](images/display-modules.png)

* `--display-modules` shows all your modules

---

### Useful CLI options

![](images/display-reasons.png)

* `--display-modules --display-reasons` shows some info about why your modules are included

---
### Useful CLI options

![](images/display-chunks.png)

* `--display-chunks` will show any other chunks you've created

---
### Useful CLI options

* `--output-library-target target` maps to webpack.config options 
  * aka `output.libraryTarget`
* Can map any config

---
### Useful CLI options

* `-d` alias for `--debug --devtool source-map --output-pathinfo` will output source maps
* `--watch` to recompile assets when source files change
* `-p` alias for `--optimize-minimize --optimize-occurence-order`

---

### WebPack Dev Server

```shell
npm install webpack-dev-server -g
webpack-dev-server --progress --colors --hot --inline
```

* Hosts assets at localhost:8080
* Uses socketjs to refresh browser
* Uses Hot Module Replacement
* Add to webpack.config... publicPath: "/assets/"

---

### Use w/ NPM to replace grunt

```js
{
  "scripts": {
    "dev": "webpack --watch --progress --config webpack.dev",
    "build": "webpack --config webpack.prod",
    "watch": "webpack-dev-server --progress --hot --inline"
  }
}
```

* `npm run dev` for local
* `npm run build` on production
* `npm run watch` for ci with dev server

---

### Performance tool

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

### Load only the JavaScript/CSS needed

* Each page needs it's own assets
* How to separate?
* What about common code? jQuery?
* It is possible with WebPack

---

### Multiple Pages Example

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
exclude: true

### Plugins

* Many different webpack Plugins
* Easy to install and use
* `CommonsChunk`, `Uglify`, `ExtractTextPlugin`
* [Many more](http://webpack.github.io/docs/plugins.html)


---

### CommonsChunk

```js
entry: {
  common: ["jquery", "babel-polyfill"],
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
* Will extract common modules, JS, and CSS

---
class: center, middle

# CSS w/ WebPack

---

### CSS Loaders

```js
module: {
  loaders: [{
    test: /\.scss$/,
    loader: "style!css!sass"
  }]
}
```
```
// src/components/header/header.js
import Navigation from "../navigation";

require("./header.scss");

export default class Header {
  // ...
}
```

* Uses `node-sass`
* `sass-loader` compiles
* `css-loader` sends compiled CSS to...
* `style-loader` **inlines** CSS
* `require` css keeps things together

???

node-sass is a c++ version of sass which is very fast  
You may be thinking, wait... css in JavaScript?

---
class: center, middle

### The first time you hear you can include CSS from a JS file...

![](images/whut.gif)

---

### css-loader

<img src="images/instagram.png" style="width: 80%" />

---

### css-loader

* Inline css is fast
* Not always ideal
* Flash of unstyled content issues

???

In a web app, you can deal with css Easy

---
class: center, middle

### When you expect your CSS to load, but you have a flash of unstyled content...

![](images/css.gif)

---

### ExtractTextPlugin

```shell
npm install extract-text-webpack-plugin --save-dev
```

* https://github.com/webpack/extract-text-webpack-plugin

---

### ExtractTextPlugin

```js
let ExtractTextPlugin = require("extract-text-webpack-plugin");

//...

loaders: [{
  test: /\.scss$/,
  loader: ExtractTextPlugin.extract(
    "style-loader",
    "css-loader!" +
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

### Critical CSS

* Important to show something fast
* Render the "above the fold" content
* Use WebPageTest.org or Chrome DevTools
* [Scott Jehl](https://www.filamentgroup.com/lab/performance-rwd.html) on critical css
* Can utilize code splitting

---

### Critical CSS

<img src="images/above-the-fold.png" style="width: 100%;" />

---

### Timeline

![](http://d.pr/i/zYks+)

* Render fast

---

###  Code Splitting

* Create "dyanmic chunks"
* Load async like w/ require.js
* Uses `require` or `require.ensure`

---

### Code Splitting

```js
// cities.js
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

* Above `ensure` goes to `cities` or `common`
* Creates a named chunk called "below_the_fold"
* Also have a `below_the_fold.js` file, not to be confused
* Create small files

???

main has subnav, footer, top experiences, components I know will most likely be positioned above the fold

---
### Code Splitting

![](images/build.png)

---

### Chunk in a chunk

```js
require.ensure([
  //...
], function(require) {
  require([
    "rizzo-next/src/components/hotels",
    "rizzo-next/src/components/food_and_drink",
    "rizzo-next/src/components/survival_guide"
  ], function(Hotels) {
    // ...
  });
});
```
---

### Chunk in a chunk in a chunk

```js
require.ensure([
  //...
], function(require) {
  require([
    //...
  ], function() {
    require([
      //...
    ], function() {

    });
  });
});
```
---

### Chunk in a chunk in a chunk in a chunk

```js
require.ensure([
  //...
], function(require) {
  require([
    //...
  ], function() {
    require([
      //...
    ], function() {
      require([
        //...
      ], function() {

      });
    });
  });
});
```

---
class: center, middle

### Chunkception?

![](images/inception-top.gif)

---

class: center, middle

# Build Targets

---

### Target AMD

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

### Target Node.js

```js
output: {
  libraryTarget: "commonjs"
},
target: "node"
```


* Support all ES features
* Not all versions of node support ES2015
* Just stop when you can upgrade

---

### Target Node.js

```js
// lib/logger.js
import airbrake from "node-airbrake";

export default class Logger {
  log(message) {
    airbrake.notify(message);
  }
}
```

* Will export as module.exports = Logger;

---
class: center, middle

# Transpiling w/ WebPack

---
class: center middle

## When you have dreams about new JS features and remember you still have to support IE8...

![](images/picard-surprise.gif)

---

### Transpile Loaders

```js
module: {
  loaders: [{
    test: /\.jsx?$/,
    exclude: /(node_modules)/,
    loader: "babel?presets[]=es2015,stage-2"
  }, {
    test: /\.ts$/,
    loader: "ts"
  }, {
    test: /\.coffee$/,
    loader: "coffee"
  }]
}
```

* Test file types
* Pass through loaders for Transpilers
* Babel works w/ ES6 AND React

???

* Many different types of loaders
* Pass in an array of loaders
* Use `test` to take any file with that extension and push it through the loader
* Here we're using the `babel-loader`
* Query params for options

---
exclude: true
### TC39 stages

* TC39 has [stages](https://tc39.github.io/process-document/)
* 0 for strawman
* 1 for proposed
* 2 for Draft
* Decorators by [Yehuda Katz](http://twitter.com/wycats) is proposed

---

### Use early stages Now

```js
@component
class MyComponent() {
  // class properties
  foo = "bar";

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

* Decorators allow you to wrap methods
* Use now and test w/ `stage-2`
* Great for the TC39
* `babel-plugin-transform-class-properties`

---
class: center, middle

# More Plugins and Loaders

---

### PreLoaders and PostLoaders

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

### Multiple Builds

```js
// webpack.dev.js
module.exports = {
  entry: { /*...*/ },
  output: {},
  loaders: [],
  devtool: "source-map"
};
```
```js
// webpack.prod.js
let common = require("./webpack.common");

module.exports = Object.assign(common, {
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("development"),
      },
    }),
  ]
});
```
* Separate Builds
* Could have a common as well
* `webpack --config webpack.prod`

---

### Define Plugin

```js
// webpack.dev.js
new webpack.DefinePlugin({
  "process.env": {
    NODE_ENV: JSON.stringify("development"),
  },
});
```
```js
// webpack.prod.js
new webpack.DefinePlugin({
  "process.env": {
    NODE_ENV: JSON.stringify("production"),
  },
});
```

* Multiple webpack configs
* Will replace w/ `false` or `true`
* Removed in a prod build

---

### Feature flags w/ Define Plugin

```js
export default class Logger {
  /**
   * Log an error
   * @param {Error|Object|String} message Either string or object containing error details
   */
  error(err) {
    console.error(err);

    if (proccess.env.NODE_ENV === "production") {
      airbrake.notify(err);
    }
  }
}
```

* Removed when minified

---

### Provide Plugin

```js
const provide = new webpack.ProvidePlugin({
  $: path.join(__dirname, "node_modules", "jquery/dist/jquery"),
  jQuery: path.join(__dirname, "node_modules", "jquery/dist/jquery"),
});
```

* Inject dependencies into every module
* No need to import $ everywhere

---
### Inject Loader

```js
import $ from "jquery";
```
```js
let Injector = require("inject!../../../src/components/login/login_manager");

let doneSpy = sinon.spy(), failSpy = sinon.spy();

let ajaxMock = sinon.stub()
  .returns({
    done: doneSpy,
    fail: failSpy
  });

let LoginManager = Injector({
  "jquery": {
    ajax: ajaxMock
  }
});
```

* Mock module dependencies
* Helps in isolating the system under test

---

### Create a custom plugin

```js
class Notifier {
  apply(compiler) {
    compiler.plugin("done", (stats) => {
      const pkg = require("../package.json");
      const notifier = require("node-notifier");
      const time = ((stats.endTime - stats.startTime) / 1000).toFixed(2);

      notifier.notify({
        title: pkg.name,
        message: `WebPack is done!\n${stats.compilation.errors.length} errors in ${time}s`,
        contentImage: "https://pbs.twimg.com/profile_images/634838765819662336/5PLMpxMI.png",
      });
    });
  }
}

module.exports = Notifier;
```

* Needs an `apply` API
* Many different events you can hook into

---

### Create a custom plugin

```js
const Notifier = require("webpack/notifier");

//...

plugins: [
  new Notifier()
  // ...
];
```

* Pass an instance 

---
class: center, middle
### WebPack 2

![](images/brace.jpg)

---

### WebPack 2
* [Roadmap](https://webpack.github.io/docs/roadmap.html)
* Native ES6 module support
* System.js for chunk loading
* Performance enhancements
* Tree shaking

???

ES6 works in webpack 1 only w/ babel  
Tree shaking removes unused exports  
Didn't know what tree shaking was so like everyone else I googled it with giphy  

---
class: center, middle

### So, I googled it...

--

### ...with giphy

<img src="images/giphytree.png" width="80%" />

---
class: center, middle

### Tree shaking

![](images/treeshaking.gif)

???

That's not it...
Turns out it's...

---

### Tree shaking

```js
export function myFunction() {
  return "First thing";
}

export function myOtherFunction() {
  return "This other thing";
}
```
```js
import { myOtherFunction } from "./functions";
```

* Will exclude myFunction from output w/ minification
* Static analysis of ES6 modules

---
class: center,middle

# Demos

---

# Resources

* [WebPack](http://webpack.github.io)
* http://webpack.github.io/analyse/
* Awesome Pete Hunt [Instgram talk](https://www.youtube.com/watch?v=VkTCL6Nqm6Y)
* http://jonathancreamer.com/advanced-webpack-part-1-the-commonschunk-plugin/
* http://www.2ality.com/2015/12/webpack-tree-shaking.html
* https://gist.github.com/sokra/27b24881210b56bbaff7



---
class: center, middle

# Thanks

### [@jcreamer898](http://twitter.com/jcreamer898)
### [jonathancreamer.com](http://jonathancreamer.com)
