module.exports.createStore = opts => {
  class Store {
    constructor(opts) {
      this.state = opts.state
      this.mutations = opts.mutations
    }

    commit(type) {
      this.mutations[type](this.state)
      this.effectFn()
    }

    effect(fn) {
      this.effectFn = fn
    }
  }

  return new Store(opts)
}