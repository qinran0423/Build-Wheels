const PENDING = 'PENDING',
  FULFILLED = 'FULFILLED',
  REJECTED = 'REJECTED';

class MyPromise {
  constructor(executor) {
    this.state = PENDING;
    this.value = undefined;
    this.reason = undefined;
    this.onResolveCallbacks = [];
    this.onRejectCallbacks = [];


    const resolve = (value) => {
      if (this.state === PENDING) {
        this.state = FULFILLED;
        this.value = value

        this.onResolveCallbacks.forEach(fn => fn())
      }
    }


    const reject = (reason) => {
      if (this.state === PENDING) {
        this.state = REJECTED;
        this.reason = reason;

        this.onRejectCallbacks.forEach(fn => fn())
      }
    }


    try {
      executor(resolve, reject)
    } catch (err) {
      reject(err)
    }
  }


  then(onFulFilled, onRejected) {
    if (this.state === FULFILLED) {
      onFulFilled(this.value)
    } else if (this.state === REJECTED) {
      onRejected(this.reason)
    } else {

      this.onResolveCallbacks.push(() => { onFulFilled(this.value) })
      this.onRejectCallbacks.push(() => { onRejected(this.reason) })
    }
  }
}

module.exports = {
  MyPromise
}