import { useImperativeHandle, useState } from 'react';

function Child(props) {
  const [count, setCount] = useState(0);
  useImperativeHandle(props.onRef, () => {
    return {
      increase,
      getCount() {
        return count;
      },
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
