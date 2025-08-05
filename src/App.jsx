// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';

import Events from './pages/Events';
import EducationalEvents from './pages/EducationalEvents';
import SportsEvents from './pages/SportsEvents';
import CulturalEvents from './pages/CulturalEvents';

import Gallery from './pages/Gallery';
import ImageGallery from './pages/ImageGallery';
import VideoGallery from './pages/VideoGallery';

import News from './pages/News';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
     <Header />
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Events */}
        <Route path="/events" element={<Events />}>
          <Route path="educational" element={<EducationalEvents />} />
          <Route path="sports" element={<SportsEvents />} />
          <Route path="cultural" element={<CulturalEvents />} />
        </Route>

        {/* Gallery */}
        <Route path="/gallery" element={<Gallery />}>
          <Route path="images" element={<ImageGallery />} />
          <Route path="videos" element={<VideoGallery />} />
        </Route>
        <Route path="/SportsEvents" element={<SportsEvents />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
