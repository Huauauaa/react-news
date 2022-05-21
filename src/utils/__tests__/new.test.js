function Foo() {
  console.log('Foo');
  return {
    id: 1,
  };
}

function Bar() {
  console.log('Bar');
  return null;
}

function Baz() {
  console.log('Baz');
  return 1;
}

describe('new', () => {
  it('return a object', () => {
    const foo = new Foo();
    expect(foo.id).toBe(1);
  });

  it('return null', () => {
    const bar = new Bar();
    expect(bar.id).toBe(undefined);
  });
  it('return simple type', () => {
    const baz = new Baz();
    expect(baz.id).toBe(undefined);
  });
});
