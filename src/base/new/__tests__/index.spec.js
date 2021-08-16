const { myNew } = require('../index');

it('new 函数没有返回值', () => {
  const mockFn = jest.fn();
  const obj = myNew(mockFn)
  expect(obj).toEqual({})
  expect(obj.__proto__).toEqual(mockFn.prototype)
})

it('函数返回基本数据类型', async () => {
  const mockFn = jest.fn(() => 1)
  const obj = myNew(mockFn)
  expect(obj).toEqual({})
  expect(obj.__proto__).toEqual(mockFn.prototype)
})

it('函数返回引用数据类型', () => {
  function mockFn(){
    return {a:1}
  }
  const obj = myNew(mockFn)
  expect(obj).toEqual({ a: 1 })
  expect(obj.__proto__).toEqual(mockFn.prototype)
})

it('函数this赋值', () => {
  function mockFn(a, b) {
    this.a = a;
    this.b = b
  }
  const obj = myNew(mockFn, 1, 2)
  expect(obj).toEqual({a:1,b:2})
  expect(obj.__proto__).toEqual(mockFn.prototype)
})