Object.prototype.myAssign = function (target, ...source) {
    if (target == null) {
        throw TypeError('Cannot convert undefined or null to object');
    }
    let ret = new Object(target);

    source.forEach((obj) => {
        if (obj != null) {
            for (let key in obj) {
                if (obj.hasOwnProperty(key)) {
                    ret[key] = obj[key];
                }
            }
        }
    });
    return ret;
};
