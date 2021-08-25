import { curry } from '../index';
function sumFn(a, b, c) {
    return a + b + c;
}

let curryFn = curry(sumFn);

test('toBeFalsy', () => {
    expect(curryFn(1)(2)(3) === sumFn(1, 2, 3)).toBeTruthy();
});
test('toBeFalsy', () => {
    expect(curryFn(1, 2)(3) === sumFn(1, 2, 3)).toBeTruthy();
});
