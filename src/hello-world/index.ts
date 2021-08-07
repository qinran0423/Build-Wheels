// 1.导出一个模块
// 2.返回一个函数，函数接受一个函数参数，如果传递该参数则执行，同时传入hi给他
// 3.返回helloworld

module.exports = function(fn: any):string{
  fn && fn('hi');
  return 'helloworld';
}