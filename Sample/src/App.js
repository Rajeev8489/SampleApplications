import React from 'react';
import './App.css';
import Nav from './components/Nav';
import About from './Pages/About';
import Shop from './Pages/Shop';
import Home from './Pages';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import reactimage from './Images/reactimage.jpg';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
        <img src={reactimage} alt="this is car image" />
      </Router>
    </div>
    
  )
}

export default App;
