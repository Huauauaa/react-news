import { useEffect, useState } from 'react';

/**
 * TODO
 * @returns
 */
function SetMap() {
  // const [data, setData] = useState(null);
  const [weakData, setWeakData] = useState(new WeakSet([]));
  useEffect(() => {
    console.log('effect');
    // setData(new Set([...document.querySelectorAll('.set-item')]));
    setWeakData(new WeakSet([...document.querySelectorAll('.set-item')]));
    console.log(weakData);
  }, []);

  // useEffect(() => {
  //   console.log({ data });
  // }, [data]);
  useEffect(() => {
    console.log({ weakData });
  }, [weakData]);

  const onRemove = () => {
    console.log('remove');
    const el = document.querySelector('.set-item');
    el.parentNode.removeChild(el);
    console.log(weakData);
  };
  return (
    <fieldset>
      <legend>set map</legend>
      <button onClick={onRemove}>remove</button>
      <div className="set-item">1</div>
      <div className="set-item">2</div>
    </fieldset>
  );
}

export default SetMap;
