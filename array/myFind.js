/**
 * 模拟Array.prptotype.find
 */
var myFind = function(arr, iteratee) {
  for(var idx = 0, len = arr.length; idx < len; idx++) {
    if(iteratee(arr[idx], idx, arr)) {
      return arr[idx]
      // 同理，findIndex函数则 return i
      // return i
    }
  }
  return undefined
}