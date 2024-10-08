import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Article from './components/article/Article';
import Nav from './components/nav/Nav.jsx';

import Cal from './components/cal/Cal.jsx';
import './App.css';

const App = () => {
  return (
    <div>
      <Router>
      <div id='stars'></div><div id='stars2'></div><div id='stars3'></div>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/article" element={<Article />} />
          <Route path="/cal" element={<Cal />} />
        </Routes>  
      </Router>
    </div>
  );
}

export default App;

