import React from 'react';
import { Input } from 'antd';
import TreeAntd from './TreeAntd';
import { debounce, throttle } from '../../utils/debounce';

function AntdPage() {
  const onChange = throttle((...args) => {
    console.log(args);
  }, 2e3);

  return (
    <div>
      <Input onInput={onChange} />
      <TreeAntd />
    </div>
  );
}

export default AntdPage;
