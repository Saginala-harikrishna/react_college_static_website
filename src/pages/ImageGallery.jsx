// src/pages/ImageGallery.jsx
import React from 'react';
import '../css/ImageGallery.css';

const images = [
  "https://source.unsplash.com/featured/?college,event",
  "https://source.unsplash.com/featured/?students,classroom",
  "https://source.unsplash.com/featured/?graduation",
  "https://source.unsplash.com/featured/?university,library"
];

function ImageGallery() {
  return (
    <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
      {images.map((url, idx) => (
        <img key={idx} src={url} alt={`Gallery ${idx}`} style={{ width: '300px', height: '200px', objectFit: 'cover' }} />
      ))}
    </div>
  );
}

export default ImageGallery;
