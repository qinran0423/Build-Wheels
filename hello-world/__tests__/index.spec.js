// 1.导出一个模块
// 2.返回一个函数，函数接受一个函数参数，如果传递该参数则执行，同时传入hi给他
// 3.返回helloworld

describe('test helloworld index', () => {
    // 测试用例1：验证返回值
    test('should return a helloworld string ', () => {
        const hello = require('../index');
        const result = hello();
        expect(result).toBe('helloworld');
    });
    // 测试用例2：验证回调函数是否被调用并传入hi
    test('should call fn and receive a hi', () => {
        const hello = require('../index');
        // 模拟一个函数
        const fn = jest.fn((x) => x);
        hello(fn);

        // 验证fn是否被调用
        const calls = fn.mock.calls;
        // 模拟函数被调用的次数
        expect(calls.length).toBe(1);
        // 模拟函数第一次调用的第一个参数是hi
        expect(calls[0][0]).toBe('hi');
        // 模拟函数调用的第一个参数是hi返回hi
        expect(fn.mock.results[0].value).toBe('hi');
        //jest 测试
    });
});
