import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Article from './components/article/Article';
import Nav from './components/nav/Nav.jsx';
import Solar from './components/solar-system/Solar.jsx';
import Cal from './components/cal/Cal.jsx';

const App = () => {
  return (
    <div>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/article" element={<Article />} />
          <Route path="/solar" element={<Solar />} />
          <Route path="/cal" element={<Cal />} />
        </Routes>  
      </Router>
    </div>
  );
}

export default App;

