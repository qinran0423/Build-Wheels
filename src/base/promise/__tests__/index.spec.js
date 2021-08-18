const { MyPromise } = require('../index')
it('基本功能Promise返回成功测试', (done) => {
  const promise = new MyPromise((resolve, reject) => {
    setTimeout(() => {
      resolve('success')
    }, 50);
  })

  promise.then(data => {
    expect(data).toBe('success')
    done()
  })
})

it('基本功能Promise返回失败测试', (done) => {
  const promise = new MyPromise((resolve, reject) => {
    setTimeout(() => {
      reject('fail')
    }, 50);
  })

  promise.then(data => {
    console.log('resolve data: ', data);
  }, error => {
    expect(error).toBe('fail')
    done()
  })
})
