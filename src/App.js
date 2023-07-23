import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import About from './pages/About';

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<About />} />
        <Route path="*" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
