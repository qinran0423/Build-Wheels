export const deepClone = (origin, hasmap = new WeakMap()) => {
    if(origin == undefined || typeof origin !== 'object') {
      return origin
    }
    // date
    if(origin.constructor === Date) {
      return new Date(origin)
    }
    // RegExp
    if(origin.constructor === RegExp) {
      return new RegExp(origin)
    }
  
    const hashKey = hasmap.get(origin)
    if(hashKey) {
      return hashKey
    }
    const cloneContext = new origin.constructor()
  
    hasmap.set(origin, cloneContext)
    for (const key in origin) {
      if(origin.hasOwnProperty(key)) {
        cloneContext[key] = deepClone(origin[key], hasmap)
      }
    }
    console.log(hasmap);
    return cloneContext
  }