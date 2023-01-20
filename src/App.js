import './App.css';
import {characterIs } from './chart.js';
import { useState } from 'react';
import { Headbar } from './components/Heading';
import { Navbar } from './components/navigation';
import { ShiftCipher } from './components/ShiftCipher';
import { BrowserRouter as Router, Routes , Route, Link } from 'react-router-dom';
function App() {
  
  return (
    <div className="App">
      <Headbar />
      <div>
        <Router>
          <div id="navb">
            <Link to="/shiftCipher">Shift Cipher</Link>
          </div>
          <Routes>
            <Route path='/shiftCipher' element={<ShiftCipher />} />
          </Routes>
        </Router>
      </div>
      
    </div>
  );
}

export default App;
