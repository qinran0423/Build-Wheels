## 模板引擎

为了实现视图与业务逻辑的分离，无论 MVP、MVVM、MVC 那个 V 都会使用模板引擎。下面我们说说模板引擎的要求。

### {{ }} 表达式

其实就是 将{{ }}中的值根据替换为表达式的结果。

| 模板                              |     | 结果           |
| --------------------------------- | --- | -------------- |
| `<b>{{ name }}</b>`               | →   | `<b>tom</b>`   |
| `<b>{{ name.toUpperCase() }}</b>` | →   | `<b>TOM</b>`   |
| `<b>{{ '[' + name + ']' }}</b>`   | →   | `<b>[tom]</b>` |

## 功能实现

模板渲染的功能大概可以归纳为两步：

1. 编译模板为 Generate 函数
2. 执行渲染函数

### 编译过程

我们把编译过程其实就是通过正则表达式的匹配

第一步 将{{ xxx }}表达式 转化为 ES6 模板字符串 ${ xxx }

```
  // 全局正则表达式替换
  template = template.replace(/\{\{([^}]+)\}\}/g, function () {
    let key = arguments[1].trim();
    return "${" + key + "}";
  });
```

第二步 将{% %}表达式 转化为 JS 语句这样的就可以在模板中使用 if、foreach 了

### 构造 Generate 函数

```
    new Function， 可以往函数里动态的传递内容，
    let str = 'return ' + '`Hello ${name}!`';
    let func = new Function('name', str);
    func('Jack'); "Hello Jack!"
```

## 正则匹配

1. 最前面的“/”与最后面的“/”是分隔符，表示正则表达式的开始与结束。
2. “\{\{”“\}\}”就是找前后两组花括号
3. “.”表示任意字符。“+”表示前面表达式一次乃至多次。“?”表示匹配模式是非贪婪的。
4. ()圆括号包着是为了把中间的内容提取出来
5. /\{\{(.+?)\}\}/g 完整的意思就是:在全部范围内查找匹配前后有两组花括号的字符串。
6. []”代表的是一个字符集，”^”只有在字符集中才是反向字符集的意思

## 正则匹配

    3.js with 语法 能改变{}中自由变量中的查找方式,将{}中的变量当做 obj 的属性来查找 4.编译流程
    complite 函数 模板编译成 render 函数 执行 render 函数返回 vnode
    例如
    const compiler = require('vue-template-compiler');
    const tempalte = '<p>message</p>';
    const res = compiler.compile(template);
    console.log(res.render);
    输出 with(this){return createElement('p',[createTextVNode(toString(message))])}
    h -> vnode
    createElement -> vnode
