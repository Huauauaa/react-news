import { deprecate } from 'core-decorators';

function strong(target) {
  target.AK = true;
}

@strong
class Soldier {
  @deprecate
  test() {}
}

test('de', () => {
  console.log(Soldier.AK);

  const s = new Soldier();
  s.test();
});
