const complite = (template) => {
    template = template.replace(/\{\{([^}]+)\}\}/g, function () {
        let key = arguments[1].trim();
        return '${' + key + '}';
    });

    let head = `let str = '';\r\n with(obj){\r\n`;
    head += 'str+=`';
    template = template.replace(/\{\%([^%]+)\%\}/g, function () {
        return '`\r\n' + arguments[1] + '\r\nstr+=`\r\n';
    });

    let tail = '`}\r\n return str;';

    return new Function('obj', head + template + tail);
};

export default complite;