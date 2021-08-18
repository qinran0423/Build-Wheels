// instanceof 运算符用于检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上。

const { myInstanceof } = require('../index')

describe('测试 instanceof', () => {
  it('测试构造函数prototype 是否在实例对象的原型链上', async () => {
    function C() { }
    function D() { }

    let o = new C()

    expect(myInstanceof(o, C)).toBe(true)
    expect(myInstanceof(o, D)).toBe(false)
    expect(myInstanceof(o, Object)).toBe(true)
    expect(myInstanceof(C.prototype, Object)).toBe(true)
  })
})