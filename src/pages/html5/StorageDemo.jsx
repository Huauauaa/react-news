import React, { useEffect } from 'react';

function StorageDemo() {
  const onClick = () => {
    localStorage.setItem('now', Date.now());
  };

  const onStorage = () => {
    console.log(localStorage.getItem('now'));
  };
  useEffect(() => {
    window.addEventListener('storage', onStorage);

    return () => {
      window.removeEventListener('storage', onStorage);
    };
  }, []);

  return (
    <fieldset>
      <legend>StorageDemo</legend>
      <button onClick={onClick}>change storage</button>
    </fieldset>
  );
}

export default StorageDemo;
