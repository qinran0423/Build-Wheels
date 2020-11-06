module.exports = {
  throttle(fn, delay) {
    let last = 0
    return (...args) => {
      const now = +Date.now()
      if(now - last > delay) {
        last = now
        fn.apply(this, args)
      }
    }
  }
}