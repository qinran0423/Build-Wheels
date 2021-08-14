
let effective

function effect(fn) {
  effective = fn
}


function reactive(data) {
  if(typeof data !== 'object' || data === null) {
    return data
  }

  const observed = new Proxy(data, {
    get(target, key, receiver) {
      let result = Reflect.get(target, key, receiver);
      return typeof result === 'object' ? reactive(result) : result
    },
    set(target, key,  value,  receiver) {
      effective()
      return Reflect.set(target, key, value, receiver)
    }
  })

  return observed
}


module.exports = {
  reactive,
  effect
}