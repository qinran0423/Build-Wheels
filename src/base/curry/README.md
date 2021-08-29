# 柯里化是指这样一个高阶函数(假设叫做 createCurry)，他接收函数 A 作为参数，运行后能够返回一个新的函数。并且这个新的函数能够处理函数 A 的剩余参数。就是把一个函数要接收的多个参数,分开放在多个函数里，然后把接收的值处理返回。

## 优点：入口单一，易于测试与复用，易于定位 bug

## 缺点：函数嵌套，占用内存，效率低

`
function sumFn(a, b, c) {
return a + b + c;
}

function curry(a) {
return function (b) {
return function (c) {
return a + b + c;
};
};
}
sumFn(1,2,3)
let result1 = curry(1);
result1(2)(3);
`

### Function.length length 属性指明函数的形参个数。 Array.prototype.slice.call(arguments)

### 对比函数的参数和当前传入参数

### 若参数不够就继续递归返回 curry

### 若参数够就调用函数返回相应的值
