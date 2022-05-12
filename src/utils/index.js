export function* iterEntries(obj) {
  const keys = Object.keys(obj);

  for (let i = 0, l = keys.length; i < l; i += 1) {
    const key = keys[i];
    yield [key, obj[key]];
  }
}

export function foo() {
  console.log('foo');
}
