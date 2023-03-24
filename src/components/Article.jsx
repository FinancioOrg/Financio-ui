import React from 'react';
import ReactMarkdown from 'react-markdown';

function Article({ content }) {
  return (
    <div>
      <ReactMarkdown source={content} />
    </div>
  );
}

export default Article;