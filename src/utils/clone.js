/**
 *
 * @param {*} value
 * @returns
 * @example
 *
 * isObject({})
 * // => true
 *
 * isObject([1, 2, 3])
 * // => true
 *
 * isObject(Function)
 * // => true
 *
 * isObject(null)
 * // => false
 */
export function isObject(value) {
  const type = typeof value;
  return value != null && (type === 'object' || type === 'function');
}

export function shallowClone(obj) {
  if (!isObject(obj)) {
    return obj;
  }
  const result = {};
  for (const key of Object.keys(obj)) {
    result[key] = obj[key];
  }
  return result;
}

export function deepClone(obj, hash = new WeakMap()) {
  if (!isObject(obj)) {
    return obj;
  }
  if (obj instanceof Date) {
    return new Date(obj);
  }
  if (obj instanceof RegExp) {
    return new RegExp(obj);
  }

  if (hash.get(obj)) {
    return hash.get(obj);
  }

  // 所属类原型上的 constructor, 而原型上的 constructor 指向的是当前类本身
  const cloneObj = new obj.constructor();
  hash.set(obj, cloneObj);

  for (const key of Object.keys(obj)) {
    cloneObj[key] = deepClone(obj[key], hash);
  }

  return cloneObj;
}
