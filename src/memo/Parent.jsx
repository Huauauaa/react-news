import { useState, useCallback } from 'react';
import Child from './Child';

function Parent() {
  console.log('parent');
  const [count, setCount] = useState(0);
  const onClick = useCallback(() => {
    setCount((c) => c + 1);
  }, []);
  return (
    <fieldset>
      <legend>use memo</legend>
      {count}
      <button onClick={onClick}>parent btn</button>

      <Child onClick={onClick} />
    </fieldset>
  );
}

export default Parent;
