const compose = (...fns) => fns.reduce((a, b) => (...args) => a(b(...args)))


// example
var sum1 = arr => arr.map(o => o + 1)
var toString = arr => arr.map(o => o + '***')

console.log(compose(toString, sum1)([1,2,3]))
