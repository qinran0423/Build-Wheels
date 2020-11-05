const { compile } = require('../index')

it('{{}} 表达式', () => {
  const output = compile("<b>{{ name }}</b>")({name: 'randy'})
  expect(output).toBe('<b>randy</b>')
})