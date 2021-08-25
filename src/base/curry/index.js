export const curry = (fn, ...args) => {
    let custArgsLen = fn.length;
    let argsLen = args.length;

    if (custArgsLen > argsLen) {
        return function (...args2) {
            return curry(fn, ...args, ...args2);
        };
    } else {
        return fn(...args);
    }
};
