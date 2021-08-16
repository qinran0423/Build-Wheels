

Function.prototype.myCall = function (context) {
  context = context || window;
  context.fn = this;
  const args = [...arguments].slice(1);
  const result = context.fn(...args);
  delete context.fn;
  return result;
}

Function.prototype.myApply = function (context, args) {
  context = context || window;
  context.fn = this;
  if (!args || !(args instanceof Array)) {
    return context.fn()
  }

  let result = context.fn(...args)
  delete context.fn;
  return result
}

Function.prototype.myBind = function(context) {
  context = context || window;
  const originFn = this;
  const args = [].slice.call(arguments,1);

  var Fn = function() {
    const newArgs = [].slice.call(arguments)
    if(this instanceof Fn) {
      return new originFn(...args.concat(newArgs))
    }
    return originFn.apply(context, args.concat(newArgs))

  }

  return Fn;
}
