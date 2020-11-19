class Promise {
  constructor(executor) {
    this.status = 'pending'
    this.value = undefined
    this.reason = undefined
    this.onResolvedCallbacks = []
    this.onRejectedCallbacks = []

    const resolve = value => {
      if(this.status === 'pending') {
        this.status = 'fulfilled'
        this.value = value
        this.onResolvedCallbacks.forEach(fn => fn())
      }
    }

    const reject = reason => {
      if(this.status === 'pending') {
        this.status = 'rejected'
        this.reason = reason
        this.onRejectedCallbacks.forEach(fn => fn())
      }
    }

    try{
      executor(resolve, reject)
    } catch(e) {
      reject(error)
    }
  }

  then(onFulfilled, onRejected) {
    if(this.status === 'fulfilled') {
      onFulfilled(this.value)
    } else if(this.status === 'rejected') {
      onRejected(this.reason)
    } else if(this.status === 'pending') {
      this.onResolvedCallbacks.push(() => {onFulfilled(this.value)})
      this.onRejectedCallbacks.push(() => {onRejected(this.reason)})
    }
  }
}


module.exports = Promise