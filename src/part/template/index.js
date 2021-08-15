module.exports.compile = (template) => {
    template = template.replace(/\{\{([^}]+)\}\}/g, function () {
        let key = arguments[1].trim();
        return '${' + key + '}';
    });

    let head = `let str = '';\r\n with(obj){\r\n`;
    head += 'str+=`';
    template = template.replace(/\{\%([^%]+)\%\}/g, function () {
        return '`\r\n' + arguments[1] + '\r\nstr+=`\r\n';
    });
    //with函数拼接
    let tail = '`}\r\n return str;';
    //构造 Generate 函数
    return new Function('obj', head + template + tail);
};
