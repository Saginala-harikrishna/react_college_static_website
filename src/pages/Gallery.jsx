// src/pages/Gallery.jsx
import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function Gallery() {
  return (
    <div style={{ padding: '30px' }}>
      <h2>Media Gallery</h2>
      <nav>
        <ul>
          <li><Link to="images">Image Gallery</Link></li>
          <li><Link to="videos">Video Gallery</Link></li>
        </ul>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
}

export default Gallery;
