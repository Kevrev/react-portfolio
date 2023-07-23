import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import About from './pages/About';

function App() {
  return (
    <Router>
      {/* Keep the nav bar on every page */}
      <Nav />
      <Routes>
        {/* Routes to each page */}
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
        {/* Always land on about page, even with 404 */}
        <Route path="/" element={<About />} />
        <Route path="*" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
