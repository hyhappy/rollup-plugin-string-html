> forked from [rollup-plugin-string](https://github.com/TrySound/rollup-plugin-string)

Converts html files to modules:

```js
import tpl from "./tpl.html";
console.log(`Template for render: ${tpl}`);
```

## Installation

```sh
yarn add rollup-plugin-string-html
```

## Usage

```js
import { rollup } from "rollup";
import html from "rollup-plugin-string-html";

rollup({
  entry: "main.js",
  plugins: [
    string({
      include: ["**/*.html"], // default
      exclude: ["**/index.html"],
      minifier: { // opts of html-minifier
          ...
      }
    })
  ]
});
```

## Minifier

The options of html-minifier 

default
```
collapseWhitespace: true,
removeComments: true,
removeEmptyAttributes: true,
minifyCSS: true,
minifyJS: true,
```

# License

MIT © [hahappy](mailto:1056605736@qq.com)
