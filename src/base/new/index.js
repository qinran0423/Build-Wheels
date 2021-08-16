module.exports.myNew = function() {
  const Fn = [].shift.call(arguments)
  const _this = {};
  _this.__proto__ = Fn.prototype;
  const res = Fn.apply(_this, arguments)
  return res instanceof Object ? res : _this
}