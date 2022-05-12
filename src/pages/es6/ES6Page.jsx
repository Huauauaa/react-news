import React from 'react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Es6 from './Es6';
import es6 from './es6.md?raw';

function ES6Page() {
  return (
    <>
      <Markdown remarkPlugins={[remarkGfm]} children={es6} />
      <Es6 />
    </>
  );
}

export default ES6Page;
