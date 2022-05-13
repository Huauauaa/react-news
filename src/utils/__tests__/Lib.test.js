import hua, { HuaModel } from '../hua';

test('Hua', () => {
  const instance = new HuaModel();
  instance.someFn(11);

  hua(22);
  hua.foo();
  hua.bar();
});
