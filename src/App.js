import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import About from './pages/About';

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
