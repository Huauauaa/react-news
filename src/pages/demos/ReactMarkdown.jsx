import React from 'react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

/**
 * https://github.com/remarkjs/react-markdown
 * @returns
 */
function ReactMarkdown() {
  const markdown = `A paragraph with *emphasis* and **strong importance**.

> A block quote with ~strikethrough~ and a URL: https://reactjs.org.

* Lists
* [ ] todo
* [x] done

A table:

| a | b |
| - | - |
`;

  return <Markdown remarkPlugins={[remarkGfm]} children={markdown} />;
}

export default ReactMarkdown;
