
require("../index");

const obj = {
  a: 1
}

function getthis() {
  return this
}

function getargs() {
  return [...arguments]
}

describe('test call', () => {

  it('call的第一个参数为空时 this指向window', () => {
    expect(getthis.myCall()).toBe(window)
  })


  it('call的第一个参数为obj时 this指向obj', () => {
    expect(getthis.myCall(obj)).toBe(obj)
  })

  it('call除去第一个参数后面的参数将带过来', () => {
    expect(getargs.myCall(obj, 1, 2, 3)).toEqual([1, 2, 3])
  })

})

describe('test apply', () => {
  it('apply的第一个参数为空时 this指向window', () => {
    expect(getthis.myApply()).toBe(window)
  })


  it('apply的第一个参数为obj时 this指向obj', () => {
    expect(getthis.myApply(obj)).toBe(obj)
  })

  it('apply除去第一个参数后面的参数将带过来', () => {
    expect(getargs.myApply(obj, [1, 2, 3])).toEqual([1, 2, 3])
  })
})


describe('test bind', () => {
  it('bind的第一个参数为空时 this指向window', () => {
    const fn = getthis.myBind()
    expect(fn()).toBe(window)
  })

  it('bind的第一个参数为obj 并且直接执行新的函数  this指向obj', () => {
    const fn = getthis.myBind(obj)
    expect(fn()).toEqual(obj)
  })

  it('bind的第一个参数为obj 并且new新的函数， this指向实例', async () => {
    const fn = getthis.myBind(obj)
    const result = new fn()
    expect(result).not.toEqual(obj)
    expect(result instanceof getthis).toEqual(true)
  })

  it('bind this 后面的参数为1,2,3时， 执行函数, 返回值为[1,2,3]', async () => {
    const fn = getargs.myBind(obj, 1,2,3)
    expect(fn()).toEqual([1,2,3])
  })

  it('bind this 后面的参数为1,2,3时， 执行函数参数为4，5, 返回值为[1,2,3]', async () => {
    const fn = getargs.myBind(obj, 1,2,3)
    expect(fn(4,5)).toEqual([1,2,3,4,5])
  })

  it('bind的参数为obj, 1,2,3 并且new新的函数，返回值为1，2，3', async () => {
    const fn = getargs.myBind(obj,1,2,3)
    expect(new fn()).toEqual([1,2,3])
  })
  it('bind的参数为obj, 1,2,3 并且new新的函数参数为4，5，返回值为1，2，3', async () => {
    const fn = getargs.myBind(obj,1,2,3)
    expect(new fn(4,5)).toEqual([1,2,3,4,5])
  })
})