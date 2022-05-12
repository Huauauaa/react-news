import m1 from '../m1';
import M2 from '../m2';

test('m1', () => {
  expect(m1.foo()).toBe('foo');
  expect(m1.bar).toBe('bar');
  // NOT RECOMMEND
  m1.bar = 'bar1';
  expect(m1.bar).toBe('bar1');
  // expect(foo()).toBe('foo');
});

test('m2', () => {
  expect(M2.name).toBe('m2');
});
