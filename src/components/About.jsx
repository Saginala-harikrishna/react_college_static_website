// src/Components/about.jsx
import React from 'react';
import '../css/About.css'; // CSS styling

function About() {
  return (
    <section className="about-section">
      <div className="about-container">
        <h2>About RiyadhJS College</h2>
        <p>
          RiyadhJS College is located in the heart of Riyadh, offering a vibrant academic environment that promotes excellence in technology and innovation.
        </p>

        <h3>Facilities</h3>
        <ul>
          <li>Modern Computer Labs</li>
          <li>Digital Classrooms</li>
          <li>Central Library</li>
          <li>Hostels & Cafeteria</li>
          <li>Sports Complex and Gym</li>
        </ul>

        <h3>Courses Offered</h3>
        <ul>
          <li>B.Tech in Computer Science</li>
          <li>B.Tech in Information Technology</li>
          <li>Bachelor of Business Administration (BBA)</li>
          <li>Bachelor of Commerce (B.Com)</li>
          <li>Master of Computer Applications (MCA)</li>
        </ul>
      </div>
    </section>
  );
}

export default About;
