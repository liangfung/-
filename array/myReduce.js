/**
 * 模拟原生reduce函数
 */
var myReduce = function(arr, iteratee, source) {
  var i,
      len = arr.length,
      memo;
  if(source != null) {
    i = 0;
    memo = source
  } else {
    i = 1;
    memo = arr[0]
  }
  for (; i < len; i++) {
    memo = iteratee(memo, arr[i])
  }
  return memo;
}