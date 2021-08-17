Object.prototype.myCreate = function(proto, propertiesObject) {
  if(typeof proto !== 'object') {
    throw TypeError('Object prototype may only be an Object or null: ' + proto)
  }

  function F() {};
  F.prototype = proto;
  let o = new F();

  if(propertiesObject){
    Object.keys(propertiesObject).map(prop => {
      let desc = propertiesObject[prop];
      if(typeof desc !== 'object' || desc === null) {
        throw TypeError('Object prototype may only be an Object: ' + desc)
      } else {
        Object.defineProperty(o, prop, desc)
      }
    })
  }

  return o;
}