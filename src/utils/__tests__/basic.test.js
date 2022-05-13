test('find', () => {
  expect([NaN].indexOf(NaN)).toBe(-1);
  expect([NaN].includes(NaN)).toBe(true);
  expect(NaN === NaN).toBe(false);
  expect(Object.is(NaN, NaN)).toBe(true);
});

test('transform', () => {
  const b = false;
  const nu = null;
  expect(b.toString()).toBe('false');
  expect({}.toString()).toBe('[object Object]');
  expect({ id: 1 }.toString()).toBe('[object Object]');
  console.log({ id: 1 }.toString(), { id: 1 });
  expect(b == '').toBe(true);
  expect(b == null).toBe(false);
  expect(true == null).toBe(false);
  expect([2].valueOf()).toEqual([2]);
});
