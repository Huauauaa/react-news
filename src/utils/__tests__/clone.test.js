import * as clone from '../clone';

test('shallowClone', () => {
  const a = 'a';
  const obj = { address: { id: 1, post: 23 } };
  expect(clone.shallowClone(a)).toBe('a');
  const cloneObj = clone.shallowClone(obj);
  const deepCloneObj = clone.deepClone(obj);
  expect(cloneObj.address.post).toBe(23);
  expect(deepCloneObj.address.post).toBe(23);
  obj.address.post = 99;
  expect(cloneObj.address.post).toBe(99);
  expect(deepCloneObj.address.post).toBe(23);

  const arr = [{ id: 1 }, { id: 2 }, { id: 3 }];
  const cloneArr = clone.shallowClone(arr);
  const deepCloneArr = clone.deepClone(arr);

  expect(cloneArr[1].id).toBe(2);
  expect(deepCloneArr[1].id).toBe(2);

  arr[1].id = 20;
  expect(cloneArr[1].id).toBe(20);
  expect(deepCloneArr[1].id).toBe(2);
});
