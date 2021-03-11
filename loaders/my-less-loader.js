const less = require('less');

/**
 * 解析less文件
 * @param {string} source 
 */
module.exports = function (source) {
  less.render(source, (error, output) => {
    this.callback(error, output.css)
  })
}