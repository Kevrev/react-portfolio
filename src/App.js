import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';

function App() {
  return (
    <Router>
      <Nav />
      {/* <Route path="/" exact component={Home} />
      <Route path="/about" component={About} /> */}
    </Router>
  );
}

export default App;
