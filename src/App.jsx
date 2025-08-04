// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Events from './pages/Events';
import About from './components/about';
import Gallery from './pages/Gallery'; // if Sports is Gallery
import News from './pages/News';       // optional
import Contact from './pages/Contact'; // optional

function App() {
  return (
    <Router>
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/about" element={<About />} />
        <Route path="/sports" element={<Gallery />} /> {/* assuming this maps to sports */}
        {/* Add more routes if needed */}
      </Routes>
    </Router>
  );
}

export default App;
