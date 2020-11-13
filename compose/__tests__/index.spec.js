const {compose} = require('../index')

describe('koa中间件实现', () => {
  it('同步实现', async () => {
    const mockFN = jest.fn()

    const middlewares = [
      (next) => {
        mockFN('1 start')
        next()
        mockFN('1 end')
      },
      (next) => {
        mockFN('2 start')
        next()
        mockFN('2 end')
      }
    ]

    const func = compose(middlewares)
    func()
    const calls = mockFN.mock.calls
    

    expect(calls.length).toBe(4)
    expect(calls[0][0]).toBe('1 start')
    expect(calls[1][0]).toBe('2 start')
    expect(calls[2][0]).toBe('2 end')
    expect(calls[3][0]).toBe('1 end')
  })
})
