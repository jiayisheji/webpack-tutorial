const sass = require('sass');

/**
 * 解析less文件
 * @param {string} source 
 */
module.exports = function (source) {
  // 创建一个异步
  const callback = this.callback;
  // 不能使用 render 会抛出 The callback was already called. 错误
  // 也不能使用 this.async
  try {
    const result = sass.renderSync({
      data: source
    });
    callback(null, result.css);
  } catch (error) {
    callback(error);
  }
}