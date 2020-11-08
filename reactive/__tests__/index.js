const {reactive, effect} = require('../index')

describe("数据响应式", () => {
  it("测试数据改变时，添加的副作用函数将会被再次调用", () => {
    const data = reactive({
      name: 'abc',
      age: {
        n: 1
      }
    })
    // 响应函数
    const fn = jest.fn()

    // 添加副作用
    effect(fn)
    
    // 改变数据
    data.name = 'bar'

    // 确认fn生效
    expect(fn).toBeCalled()
  })
})