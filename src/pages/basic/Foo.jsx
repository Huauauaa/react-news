import React from 'react';

function Foo() {
  console.log('Foo render');
  return <div>Foo</div>;
}

export default React.memo(Foo);
