require('../index')

it('测试没有参数', () => {
  expect(() => Object.myCreate()).toThrow(TypeError)
})

// it('测试第一个参数为null', () => {
//   const newObj = Object.myCreate(null);

//   expect(newObj).toEqual({})
//   expect(newObj.__proto__).toEqual(undefined)
// })

it('测试第一个参数为object', () => {
  const obj = {
    a: 1
  }
  const newObj = Object.myCreate(obj)
  expect(newObj).toEqual({})
  expect(newObj.__proto__).toEqual(obj)
})

it('测试第一个参数为object，且存在第二个参数', () => {
  let obj = {
    a: 1
  }
  let val = 1
  let obj1 = {
    b: {
      value: 2
    },
    c: {
      get() {
        return val
      },
      set(value) {
        val = value
      }
    }
  }
  let obj2 = Object.myCreate(obj,obj1)
  expect(obj2.b).toBe(2)
  expect(obj2.c).toBe(1)
  expect(obj2.__proto__).toEqual(obj)
  obj2.c = 3
  expect(obj2.c).toBe(3)
})

it('测试第一个参数为object，且存在第二个参数异常', () => {
  let obj1 = {
    a: null
  }
  expect(() => Object.myCreate({},obj1)).toThrow(TypeError)
})