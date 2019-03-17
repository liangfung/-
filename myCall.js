Function.prototype.myCall = function(context, ...args) {
	context = context || window
	context.fn = this
	let result = context.fn(...args)
	delete context.fn
	return result
}

Function.prototype.myBind = function(context, ...args) {
	context = context || window
	let _this = this
	return function F(...innerArgs){
		if(this instanceof F){
			return new _this(...args, ...innerArgs)
		}
		let arg = [...args, ...innerArgs]
	  return _this.apply(context, arg)
	}
}

function foo(b) {
	console.log(this.a, b)
}

let bar = foo.myBind({a: 333})
let obj = {
	a: 'obj',
	bar: bar
}
obj.bar('666')

foo.myCall({a: 'aaa'}, 'bbb')
