/**
 * 这样要使用普通函数 不然this指向会有问题
 */
module.exports = function (source) {
  console.log(source);
  return source
}