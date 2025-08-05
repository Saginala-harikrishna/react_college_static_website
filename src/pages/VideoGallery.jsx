// src/pages/VideoGallery.jsx
import React from 'react';
import '../css/VideoGallery.css';


function VideoGallery() {
  return (
    <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap' }}>
      <iframe width="360" height="215" src="https://www.youtube.com/embed/O0VbG1TWRZc" title="Campus Tour" frameBorder="0" allowFullScreen></iframe>
      <iframe width="360" height="215" src="https://www.youtube.com/embed/sP2vFmuLJek" title="College Fest Highlights" frameBorder="0" allowFullScreen></iframe>
    </div>
  );
}

export default VideoGallery;
