import { useState } from 'react';
import BasicComponent from './basic/BasicComponent';
import { default as UseImperativeHandle } from './useImperativeHandle/Parent';

function App() {
  return (
    <div>
      <UseImperativeHandle />
      <BasicComponent />
    </div>
  );
}

export default App;
