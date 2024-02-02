import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Article from './components/article/Article';
import Nav from './components/nav/Nav';
import Solar from './components/solar-system/Solar';

const App = () => {
  return (
    <div>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/article" element={<Article />} />
          <Route path="/solar" element={<Solar />} />
        </Routes>  
      </Router>
    </div>
  );
}

export default App;

