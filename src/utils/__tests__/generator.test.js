function* it(obj) {
  for (const key of Reflect.ownKeys(obj)) {
    yield [key, obj[key]];
  }
}

const obj = { id: 1, name: 'foo' };

for (const [key, value] of it(obj)) {
  console.log(key, value);
}
