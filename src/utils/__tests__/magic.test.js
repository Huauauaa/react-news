test('x!== x', () => {
  const x = NaN;
  expect(x !== x).toBe(true);
});

test('!isNaN(x) && x !== x', () => {
  global.x = 0; // Any value is OK
  Object.defineProperty(global, 'x', {
    get() {
      return Math.random();
    },
  });
  expect(!isNaN(x) && x !== x).toBe(true);
});

test('x === x + 1', () => {
  const x = Number.MAX_SAFE_INTEGER + 1;
  expect(x === x + 1).toBe(true);
});
test('x > x', () => {
  const x = {
    value: 1,
    [Symbol.toPrimitive]() {
      return --this.value;
    },
  };

  expect(x > x).toBe(true);
});
test('typeof x === ‘undefined’ && x.length > 0 ', () => {
  const x = document.all;

  expect(typeof x === 'undefined' && x.length > 0).toBe(true);
});
