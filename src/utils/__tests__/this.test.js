function myNew(fn, ...args) {
  const obj = {};
  obj.__proto__ = fn.prototype;
  const result = fn.apply(obj, args);
  return typeof result === 'object' && result !== null ? result : obj;
}

const Person = function (name, age) {
  this.name = name;
  this.age = age;
};

test('new', () => {
  const p = myNew(Person, 'Martin', 1);
  console.log(p);
  expect(p.name).toBe('Martin');
});
