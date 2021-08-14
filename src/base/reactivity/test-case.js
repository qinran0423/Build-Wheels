
// reactive : 使数据变成响应式 
// effect: 添加副作用函数
module.exports = function({reactive, effect}) {
  
  it('测试数据改变时 是否被响应', () => {
    // 是data变成响应式数据
    const data = reactive({
      name: 'mick',
    })
    // 模拟一个函数
    const mockFn = jest.fn()

    // 添加副作用
    effect(mockFn)

    // 改变响应式数据
    data.name = 'randy'
    // 当响应式数据发生变化，副作用函数应该会被执行
    expect(mockFn).toHaveBeenCalled()
  })
  
  it('测试嵌套数据改变时 是否被响应', () => {
    // 是data变成响应式数据
    const data = reactive({
      age: {
        n: 25
      }
    })
    // 模拟一个函数
    const mockFn = jest.fn()

    // 添加副作用
    effect(mockFn)

    // 改变响应式数据
    data.age.n = 20
    // 当响应式数据发生变化，副作用函数应该会被执行
    expect(mockFn).toHaveBeenCalled()
  })


  it('测试数组发生变化 是否被响应', () => {
    // 是data变成响应式数据
    const data = reactive({
      arr: [1]
    })
    // 模拟一个函数
    const mockFn = jest.fn()

    // 添加副作用
    effect(mockFn)

    // 改变响应式数据
    data.arr.push(2)
    // 当响应式数据发生变化，副作用函数应该会被执行
    expect(mockFn).toHaveBeenCalled()
  })
}