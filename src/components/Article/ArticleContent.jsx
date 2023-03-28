import React from 'react';
import ReactMarkdown from 'react-markdown';

function ArticleContent({ htmlContent }) {
  return (
    <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
  );
}

export default ArticleContent;