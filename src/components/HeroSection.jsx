// src/Components/HeroSection.jsx
import React from 'react';
import '../css/Hero.css'; // CSS styling

function HeroSection() {
  return (
    <section className="hero">
      <img
        src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80"
        alt="College Campus with Students"
        className="hero-image"
      />
      <div className="hero-text">
        <h2>Welcome to RiyadhJS College</h2>
        <p>Empowering students with knowledge, skill, and innovation</p>
      </div>
    </section>
  );
}

export default HeroSection;
