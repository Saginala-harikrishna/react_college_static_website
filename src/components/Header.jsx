// src/Components/Header.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import '../css/Header.css'; // CSS styling

function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Logo_example.svg/1200px-Logo_example.svg.png"
          alt="College Logo"
          className="college-logo"
        />
        <h1 className="college-name">RiyadhJS College</h1>
      </div>

      <nav className="nav-links">
        <NavLink to="/" className="nav-link" activeclassname="active" end>
          Home
        </NavLink>
        <NavLink to="/events" className="nav-link" activeclassname="active">
          Events
        </NavLink>
        <NavLink to="/gallery" className="nav-link" activeclassname="active">
         Gallery
        </NavLink>
        <NavLink to="/SportsEvents" className="nav-link" activeclassname="active">
          Sports
        </NavLink>
          <NavLink to="/news" className="nav-link" activeclassname="active">
         News
        </NavLink>
          <NavLink to="/contact" className="nav-link" activeclassname="active">
         Contact
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
