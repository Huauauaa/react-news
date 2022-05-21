import { deprecate, autobind } from 'core-decorators';

function strong(target) {
  console.log('strong');
  target.AK = true;
  target.prototype.AK = true;
}

function property(target, propertyKey) {
  console.log('target', target);
  console.log('propertyKey', propertyKey);
  target[propertyKey] = '1';
}

function age(a = 18) {
  console.log({ a });
  return function (constructor) {
    console.log(constructor);
    constructor.prototype.age = a;
  };
}

@strong
@age(11)
class Soldier {
  @property
  name = '';

  @deprecate
  test() {}

  @autobind
  getInstance() {
    return this;
  }
}

test('de', () => {
  const s = new Soldier();
  s.test();
  expect(Soldier.AK).toBe(true);
  expect(s.AK).toBe(true);
  expect(s.getInstance()).toBe(s);
  expect(s.age).toBe(11);
  expect(s.name).toBe('');
});
