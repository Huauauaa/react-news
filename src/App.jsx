import { useState } from 'react';
import BasicComponent from './basic/BasicComponent';
import { default as UseImperativeHandle } from './useImperativeHandle/Parent';
import { default as MemoDemo } from './memo/Parent';

function App() {
  return (
    <div>
      <MemoDemo />
      <UseImperativeHandle />
      <BasicComponent />
    </div>
  );
}

export default App;
