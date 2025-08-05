// src/pages/Events.jsx
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import '../css/Events.css';
function Events() {
  return (
    <div style={{ padding: '30px' }}>
      <h2>Our Events</h2>
      <nav>
        <ul>
          <li><Link to="educational">Educational Events</Link></li>
          <li><Link to="sports">Sports Events</Link></li>
          <li><Link to="cultural">Cultural Events</Link></li>
        </ul>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
}

export default Events;
