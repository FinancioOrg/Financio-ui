import React from 'react';

function ArticleContent({ htmlContent }) {
  return (
    <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
  );
}

export default ArticleContent;