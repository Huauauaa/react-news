import { useImperativeHandle, useState } from 'react';

function Child({ ref1 }) {
  const [count, setCount] = useState(0);
  useImperativeHandle(ref1, () => {
    return {
      increase,
      count,
    };
  });
  function increase() {
    console.log('Child func');
    setCount((c) => c + 1);
  }

  return (
    <div>
      {count}
      <button onClick={increase}>child +</button>
    </div>
  );
}

export default Child;
