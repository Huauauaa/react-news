import { deprecate, autobind } from 'core-decorators';

function strong(target) {
  target.AK = true;
}

@strong
class Soldier {
  @deprecate
  test() {}

  @autobind
  getInstance() {
    return this;
  }
}

test('de', () => {
  console.log(Soldier.AK);

  const s = new Soldier();
  s.test();
  expect(s.getInstance()).toBe(s);
});
