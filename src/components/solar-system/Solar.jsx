import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import HTML from './solar.html'

function MyComponent() {
  const [htmlContent, setHtmlContent] = useState('');

  useEffect(() => {
    fetch('./solar.html')
      .then(response => response.text())
      .then(html => setHtmlContent(html));
  }, []);

  return (
    <div>
      {htmlContent ? (
        <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
      ) : (
        <p>Loading HTML content...</p>
      )}
    </div>
  );
}


export default Solar