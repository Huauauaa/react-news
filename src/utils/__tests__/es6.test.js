test('map => obj', () => {
  const map = new Map([
    ['a', 1],
    ['b', 2],
  ]);
  const obj = Object.fromEntries(map.entries());
  expect(obj.a).toBe(1);
  expect(obj.b).toBe(2);
});

test('obj => map', () => {
  const map = new Map(Object.entries({ id: 1, name: 'foo' }));
  expect(map.get('id')).toBe(1);
  expect(map.get('name')).toBe('foo');
});

test('Reflect', () => {
  const obj = {};
  Reflect.defineProperty(obj, 'id', { value: 1 });
  expect(obj.id).toBe(1);
  expect(Reflect.ownKeys(obj)).toEqual(['id']);
});

test('generator', () => {
  function* itable(obj) {
    for (const key of Reflect.ownKeys(obj)) {
      yield [key, obj[key]];
    }
  }

  const obj = { id: 1, name: 'foo' };

  for (const [key, value] of itable(obj)) {
    console.log(key, value);
  }
});
