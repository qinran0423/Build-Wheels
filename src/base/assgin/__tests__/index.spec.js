require('../index');
it('throw when target is not an object', () => {
    expect(() => Object.myAssign()).toThrow(TypeError);
});

it('return the modified target object', () => {
    expect(
        Object.myAssign({}, { foo: 'foo' }, null, undefined, { foo: 'bar' })
    ).toEqual({
        foo: 'bar',
    });
});
