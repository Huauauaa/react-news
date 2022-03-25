import { useEffect, useRef, useCallback } from 'react';
import Child from './Child';

function Parent() {
  const ChildRef = useRef();
  let timer;

  function onTriggerChild() {
    ChildRef.current.increase();
    timer = setTimeout(() => {
      console.log("After, child's count is ", ChildRef.current.count);
    }, 0);
  }
  useEffect(() => {
    return () => {
      clearTimeout(timer);
    };
  });
  return (
    <fieldset>
      <legend>useImperativeHandle</legend>
      <button onClick={onTriggerChild}>trigger child +</button>
      <Child ref1={ChildRef} />
    </fieldset>
  );
}

export default Parent;
