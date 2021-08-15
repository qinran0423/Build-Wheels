

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
