/**
 * 模拟原生的map函数，使用iteratee迭代器
 * @param {Array} arr
 * @param {Function} iteratee
 */
var myMap = function(arr, iteratee) {
  var result = []
  for (let idx = 0; idx<arr.length; idx++) {
    // myMap时高阶函数，需要传入函数(iteratee)作为参数
    // 其中，iteratee接收三个参数，分别是index, element, array。在函数中分别接收
    result[idx] = iteratee(arr[idx], idx, arr)
    // 细节： 在map函数中需要在iteratee中显式的写一个return，返回处理的ele值。所以，可以使用直接赋值传入到result数组中
  }
  return result;
}

var result = myMap([1,2,3], function(ele, idx, array) {
  return ele * 2
})
console.log(result);
