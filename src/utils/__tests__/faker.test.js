import * as faker from '../faker';

test('shallowClone', () => {
  const a = 'a';
  const obj = { address: { id: 1, post: 23 } };
  expect(faker.shallowClone(a)).toBe('a');
  const cloneObj = faker.shallowClone(obj);
  const deepCloneObj = faker.deepClone(obj);
  expect(cloneObj.address.post).toBe(23);
  expect(deepCloneObj.address.post).toBe(23);
  obj.address.post = 99;
  expect(cloneObj.address.post).toBe(99);
  expect(deepCloneObj.address.post).toBe(23);

  const arr = [{ id: 1 }, { id: 2 }, { id: 3 }];
  const cloneArr = faker.shallowClone(arr);
  const deepCloneArr = faker.deepClone(arr);

  expect(cloneArr[1].id).toBe(2);
  expect(deepCloneArr[1].id).toBe(2);

  arr[1].id = 20;
  expect(cloneArr[1].id).toBe(20);
  expect(deepCloneArr[1].id).toBe(2);
});
