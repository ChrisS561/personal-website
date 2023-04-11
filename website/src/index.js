import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Coverpage from './Pages/Coverpage';
import About from './Pages/About';
import Portfolio from './Pages/Portfolio';
import Resume from './Pages/Resume'; 
import Contact from './Pages/Contact'; 
import Experience from './Pages/Experience';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/" Component={Coverpage} />
        <Route path="/about" Component={About} />
        <Route path="/portfolio" Component={Portfolio} />
        <Route path="/resume" Component={Resume} />
        <Route path="/contact" Component={Contact} />
        <Route path="/experience" Component={Experience} />
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
