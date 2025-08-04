// src/Components/AlumniCard.jsx
import React from 'react';
import '../css/AlumniCard.css'; // CSS styling

function AlumniCard({ name, image }) {
  return (
    <div className="alumni-card">
      <img src={image} alt={name} className="alumni-image" />
      <h4 className="alumni-name">{name}</h4>
    </div>
  );
}

export default AlumniCard;
