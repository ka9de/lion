const { transformHtml } = require('./transform-html.js');
const { transformCss } = require('./transform-css/transform-css.js');

/**
 * @typedef {import('../types/csstree').SelectorPlain} SelectorPlain
 * @typedef {import('../types/csstree').Selector} Selector
 * @typedef {import('../types/csstree').CssNodePlain} CssNodePlain
 * @typedef {import('../types/csstree').CssNode} CssNode
 * @typedef {import('../types/shadow-cast').CssTransformConfig} CssTransformConfig
 */

/**
 * @param {string} annotatedHtmlString
 * @param {CssTransformConfig} [cssTransformConfig]
 */
function transformHtmlAndCss(annotatedHtmlString, cssTransformConfig) {
  const htmlResult = transformHtml(annotatedHtmlString);
  console.log(htmlResult.cssTransformConfig);
  // throw new Error('wtf');

  const cssResult = transformCss({
    ...htmlResult.cssTransformConfig,
    ...cssTransformConfig,
    htmlMeta: htmlResult.meta,
  });

  // Override for now, allow deep merge via options
  return {
    shadowHtml: htmlResult.shadowHtml,
    slotsHtml: htmlResult.slotsHtml,
    shadowCss: cssResult,
  };
}

module.exports = {
  transformHtmlAndCss,
};
