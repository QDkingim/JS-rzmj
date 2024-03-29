// 计算乘积
var mult = function () {
  var a = 1;
  for (let i = 0, l = arguments.length; i < l; i++) {
    a = a * arguments[i];
  }
  return a;
}

// 计算加和
var plus = function () {
  var a = 0;
  for (let i = 0, l = arguments.length; i < l; i++) {
    a = a + arguments[i];
  }
  return a;
}

// 创建缓存代理的工厂
var createProxyFactory = function (fn) {
  var cache = {}
  return function () {
    var args = Array.prototype.join.call(arguments, ',');
    if (args in cache) {
      return cache[args]
    }
    return cache[args] = fn.apply(this, arguments)
  }
}

var proxyMult = createProxyFactory(mult)
var proxyPlus = createProxyFactory(plus)

console.log(proxyMult(1, 2, 3, 4)); // 24
console.log(proxyPlus(1, 2, 3, 4)); // 10