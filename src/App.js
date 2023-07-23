import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
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
        <Route path="/about" element={<About />} />
        <Route path="/" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
