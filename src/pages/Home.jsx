// src/pages/Home.jsx
import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import Header from '../components/Header';
import About from '../components/about';
import AlumniSection from '../components/AlumniSection';

function Home() {
  return (
    <div>
         <Header />
      <HeroSection />
      <About />
      <AlumniSection />
    </div>
  );
}

export default Home;
