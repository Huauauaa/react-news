import React, { useState } from 'react';
import Foo from './Foo';

function Render() {
  const [count, setCount] = useState(0);
  const onClick = () => {
    setCount((c) => c + 1);
  };
  return (
    <div>
      <button onClick={onClick}>+</button>
      {count}
      <Foo />
    </div>
  );
}

export default Render;
