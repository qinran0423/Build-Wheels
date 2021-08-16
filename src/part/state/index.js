module.exports. createStore = function (options) {
  class Store {
    constructor(options) {
      this.state = options.state;
      this.mutations = options.mutations;
    }
  
    commit(type) {
      this.mutations[type](this.state)
      this.effect()
    }
  
    effect(fn) {
      this.effect = fn
    }
  
  }

  return new Store(options)
}

