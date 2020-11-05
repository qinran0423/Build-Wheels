module.exports = {
  compile(template) {
    // 转化template
    // 最终输出： <b>${key}</b>
    template = template.replace(/\{\{(.+)\}\}/g, function() {
      let key = arguments[1].trim()
      return '${'+ key +'}'
    })

    // 最终希望输出： let str = ''; with(obj) { str += '${key}' }; return str;
    const body = "let str = ''; with(obj) { str +=`" + template + "`} return str"
    console.log(body);
    return new Function('obj', body)
  }
}