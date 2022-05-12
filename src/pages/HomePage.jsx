import React from 'react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import README from '../../README.md?raw';

function HomePage() {
  return <Markdown remarkPlugins={[remarkGfm]} children={README} />;
}

export default HomePage;
