const { throttle } = require('../index')

it('节流 Throttle', (done) => {
  // 定义一个mock 函数
  let mockFn = jest.fn()

  // 封装为节流方法
  let fn = throttle(mockFn, 100)

  // 同步调用多次
  fn(1)
  fn(2)
  fn(3)

  // 希望mockFn只调用一次
  expect(mockFn.mock.calls.length).toBe(1)

  mockFn = jest.fn()
  fn = throttle(mockFn, 100)
  fn(1)
  setTimeout(() => {
    fn(2)
    // 希望mockFn调两次
    expect(mockFn.mock.calls.length).toBe(2)
    done()
  }, 150)
})