// 短时间内多次调用，以第一次为准
it('节流', (done) => {
  const { throttle } = require('../index')

  const mockFn = jest.fn()

  const fn = throttle(mockFn, 20)

  fn(1)
  fn(2)


  setTimeout(() => {
    fn(3)
    fn(4)
  }, 30);

  setTimeout(() => {
    const calls = mockFn.mock.calls
    expect(calls.length).toBe(2)
    expect(calls[0][0]).toBe(1)
    expect(calls[1][0]).toBe(3)
    done()
  },100)

})

it('防抖', (done) => {
  const { debounce } = require('../index')

  const mockFn = jest.fn()

  const fn = debounce(mockFn, 20)

  fn(1)
  fn(2)

  setTimeout(() => {
    fn(3)
    fn(4)
  }, 30);
  setTimeout(() => {
    const calls = mockFn.mock.calls

    expect(calls.length).toBe(2);
    expect(calls[0][0]).toBe(2)
    expect(calls[1][0]).toBe(4)
    done()


  }, 100);
})