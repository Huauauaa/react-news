import { useState, useCallback, useMemo } from 'react';
import Child from './Child';

function Parent() {
  console.log('parent');
  const [count, setCount] = useState(0);
  const onClick = useCallback(() => {
    setCount((c) => c + 1);
  }, []);

  const todoList = useMemo(() => [{ id: 1, text: 'react' }], []);

  const onDouble = () => {
    setCount((c) => c * 2);
  };
  return (
    <fieldset>
      <legend>use memo</legend>
      {count}
      <button onClick={onClick}>parent btn</button>

      <Child onClick={onClick} name='useCallback' />
      <Child onClick={onDouble} name='vanilla' />
      <Child todoList={todoList} name='vanilla2' />
    </fieldset>
  );
}

export default Parent;
