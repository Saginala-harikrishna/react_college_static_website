// src/Components/AlumniSection.jsx
import React from 'react';
import AlumniCard from './AlumniCard';
import '../css/AlumniCard.css'; // Reusing same CSS

const alumniData = [
  {
    name: "Fatima Al-Sabah",
    image: "https://randomuser.me/api/portraits/women/65.jpg"
  },
  {
    name: "Mohammed Al-Faisal",
    image: "https://randomuser.me/api/portraits/men/52.jpg"
  },
  {
    name: "Ayesha Rahman",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    name: "Omar Al-Zahrani",
    image: "https://randomuser.me/api/portraits/men/33.jpg"
  }
];

function AlumniSection() {
  return (
    <section className="alumni-section">
      <h2 className="alumni-heading">Our Proud Alumni</h2>
      <div className="alumni-grid">
        {alumniData.map((alumnus, index) => (
          <AlumniCard
            key={index}
            name={alumnus.name}
            image={alumnus.image}
          />
        ))}
      </div>
    </section>
  );
}

export default AlumniSection;
