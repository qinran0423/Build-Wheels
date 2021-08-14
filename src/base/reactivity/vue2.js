
let effective

function effect(fn) {
  effective = fn
}

function reactive(data) {
  if(typeof data !== 'object' || data === null) {
    return data
  }

  if(Array.isArray(data)) {
    reactiveArray(data)
  }

  Object.keys(data).forEach((key) => {
    let value = data[key];
    reactive(value)
    Object.defineProperty(data, key, {
      enumerable: false,
      configurable: true,
      get() {
        return value
      },
      set(val) {
        if(val !== value) {
          effective()
          value = val
        }
      }
    })
  })

  return data
}


function reactiveArray(data) {
  const oldArrayPrototype = Array.prototype;
  const proto = Object.create(oldArrayPrototype);

  ['push','pop','shift','unshift','splice','sort','reverse'].forEach(method => {
    proto[method] = function() {
      effective()
      oldArrayPrototype[method].call(this, ...arguments)
    }
  }) 

  data.__proto__ = proto
}


module.exports = {
  reactive,
  effect
}