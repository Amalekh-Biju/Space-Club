import React, { useEffect, useState } from 'react';
import parse from 'html-react-parser';

const Solar = () => {
  const [htmlContent, setHtmlContent] = useState('');

  useEffect(() => {
    fetch('./solar.html') 
      .then(response => response.text())
      .then(html => setHtmlContent(html));
  }, []);

  const parsedHtml = parse(htmlContent);

  return (
    <div>
      {parsedHtml}
    </div>
  );
};

export default Solar;