
function throttle (fn, deplay) {
  let last = 0;
  return (...args) => {
    let now = Date.now()
    if(now > last + deplay) {
      fn.apply(this, args)
      last = now
    }
  }
}


function debounce(fn, deplay) {
  let timer;
  return (...args) => {
    if(timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn.apply(this,args)
    }, deplay);
  }
}
module.exports = {throttle, debounce}