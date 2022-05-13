export class HuaModel {
  constructor() {}

  someFn(...args) {
    console.log('someFn', ...args);
  }
}

const utils = {
  extend(a, b, context) {
    for (const key of Object.keys(b)) {
      if (typeof b[key] === 'function') {
        a[key] = b[key].bind(context);
      } else {
        a[key] = b[key];
      }
    }
  },
};

export function createAxi() {
  const instance = new HuaModel();
  const result = instance.someFn.bind(instance);

  utils.extend(result, HuaModel.prototype, instance);

  return result;
}

HuaModel.prototype.foo = function () {
  this.someFn('foo');
};

HuaModel.prototype.bar = function () {
  this.someFn('bar');
};

export default createAxi();
