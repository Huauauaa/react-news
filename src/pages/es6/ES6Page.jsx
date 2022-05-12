import React from 'react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import varLetConst from './varLetConst.md?raw';

function ES6Page() {
  return (
    <div>
      <fieldset>
        <Markdown remarkPlugins={[remarkGfm]} children={varLetConst} />
      </fieldset>
    </div>
  );
}

export default ES6Page;
