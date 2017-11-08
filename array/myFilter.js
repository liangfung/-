/**
 * 模拟原生filter
 */
function myFilter(arr, iteratee) {
  var result = [];
  for (var idx = 0,len = arr.length; idx < len; idx++) {
    var item = iteratee(arr[idx], idx, arr)
    if(item) {
      result.push(item)
    }
    return result;
  }
}