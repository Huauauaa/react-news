import * as utils from '../index';

test('iterEntries', () => {
  const obj = { foo: 1, bar: [], baz: false, too: { a: 1 } };
  for (const [key, value] of utils.iterEntries(obj)) {
    console.log(key, value);
  }
});

test('去小数部分 |', () => {
  expect(1.2 | 0).toBe(1);
  expect(-1.2 | 0).toBe(-1);
  expect(-0.6 | 0).toBe(0);
});

test('去小数部分 Math.trunc', () => {
  expect(Math.trunc(1.2)).toBe(1);
  expect(Math.trunc(-1.2)).toBe(-1);
  expect(Math.trunc(-0.6)).toBe(-0); // !
});
test('foo', () => {
  utils.foo();
  expect(0).not.toBe(-0);
});
