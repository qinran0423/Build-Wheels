
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