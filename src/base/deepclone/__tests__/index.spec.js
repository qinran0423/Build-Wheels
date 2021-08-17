import { deepClone } from '../index';
class Person {
    constructor(name) {
        this.name = name;
    }
}
const man = new Person('GH');

const obj = {
    str: 'deep',
    num: 1,
    udf: undefined,
    bool: true,
    nl: null,
    syb: Symbol('lalala'),
    obj: {
        o: {
            name: 'Oliver',
        },
    },
    cls: new Person('GH1'),
    arr: [
        {
            name: 'randy1',
        },
        {
            name: 'randy2',
        },
    ],

    man: man,
};
const cloneObj = deepClone(obj);

function isObj(input) {
    const type = typeof input;
    return input !== null && (type === 'object' || type === 'function');
}

for (const key of Object.keys(cloneObj)) {
    const item = obj[key];
    const cItem = cloneObj[key];
    const type = Object.prototype.toString.call(cItem);
    //  基本数据类型  string, number, boolean, null, undefined, symbol
    if (!isObj(cItem)) {
        test('基本类型:' + type, () => {
            expect(cItem).toBe(item);
        });
    } else {
        //引用数据类型
        test(type, () => {
            expect(cItem === item).toBeFalsy();
            expect(cItem).toEqual(item);
        });
    }
}
