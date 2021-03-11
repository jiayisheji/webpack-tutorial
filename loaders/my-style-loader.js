/**
 * 创建style标签放置css文本
 * @param {string} source 
 */
module.exports = function (source) {
  return `const tag = document.createElement('style');
tag.innerHTML = ${source};
document.head.appendChild(tag);
  `
}

