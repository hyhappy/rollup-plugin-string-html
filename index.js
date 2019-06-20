const { createFilter } = require("rollup-pluginutils");
const { minify } = require('html-minifier');

function html(opts = {}) {
  if (!opts.include) {
    opts.include = '**/*.html'
  }

  const filter = createFilter(opts.include, opts.exclude);

  return {
    name: "string-html",

    transform(code, id) {
      if (filter(id)) {
        const { minifier = {} } = opts
        if (minifier) {
          code = minify(code, {
            collapseWhitespace: true,
            removeComments: true,
            removeEmptyAttributes: true,
            minifyCSS: true,
            minifyJS: true,
            ...minifier
          })
        }
        return {
          code: `export default ${JSON.stringify(code)};`,
          map: { mappings: "" }
        };
      }
    }
  };
}

module.exports = html
