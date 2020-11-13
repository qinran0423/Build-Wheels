module.exports.compose = middlewares => {
  return function() {
    function dispatch(i) {
      const fn = middlewares[i]
      // 判断索引对应的中间件是否存在，不存在则说明已经处理完所有的中间件
      if(!fn) {
        return
      }

      return fn(function next() {
        return dispatch(i + 1)
      })
    }
   return dispatch(0)
  }
} 