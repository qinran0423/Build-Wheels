import { mixin } from '../index';

describe('test mixin index', () => {
    test('Mixin 实现', () => {
        const Base = class {};

        const fn = jest.fn();

        const canLog = {
            fn,
        };

        mixin(Base, canLog);

        const obj = new Base();
        obj.fn('haha');

        const calls = fn.mock.calls;
        expect(calls.length).toBe(1);
        expect(calls[0][0]).toBe('haha');
    });
});
