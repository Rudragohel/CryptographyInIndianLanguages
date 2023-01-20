import './App.css';
import {characterIs } from './chart.js';
import { useState } from 'react';
import { Headbar } from './components/Heading';
import { Navbar } from './components/navigation';
import { ShiftCipher } from './components/ShiftCipher';
import { BrowserRouter as Router, Routes , Route, Link } from 'react-router-dom';
import { SubstitutionCipher } from './components/substitutionCipher';
import { HillCipher } from './components/HillCipher';
import { VigenereCipher } from './components/VigenereCipher';
function App() {
  
  return (
    <div className="App">
      <Headbar />

      <div>
        <Router>
          
            
            <div class="options">
        <label class="option">
          <input type="radio" name="company" value="apple" checked />
          <div class="option-content">
            <h1 class="animated bounceIn">
              <i class="ion-social-apple-outline"></i>
            </h1>
            <h4><Link to='/shiftCipher'>Shift Cipher</Link></h4>
            <h4>
              <i class="ion-android-radio-button-on"></i>
            </h4>
          </div>
          <div class="on-checked"></div>
        </label>
        <label class="option">
          <input type="radio" name="company" value="facebook" />
          <div class="option-content">
            <h1 class="animated bounceIn">
              <i class="ion-social-facebook-outline"></i>
            </h1>
            <h4><Link to='/substitutionCipher'>Substitution Cipher</Link></h4>
            <h4>
              <i class="ion-android-radio-button-on"></i>
            </h4>
          </div>
          <div class="on-checked"></div>
        </label>
        <label class="option">
          <input type="checkbox" name="social" value="tumblr" checked />
          <div class="option-content">
            <h1 class="animated bounceIn">
              <i class="ion-social-tumblr-outline"></i>
            </h1>
            <h4> <Link to='/vigenereCipher'>Vigenere Cipher</Link></h4>
            <h4>
              <i class="ion-android-checkbox-outline"></i>
            </h4>
          </div>
          <div class="on-checked"></div>
        </label>
        <label class="option">
          <input type="checkbox" name="social" value="twitter" />
          <div class="option-content">
            <h1 class="animated bounceIn">
              <i class="ion-social-twitter-outline"></i>
            </h1>
            <h4>            <Link to='/hillCipher'>Hill Cipher</Link></h4>
            <h4>
              <i class="ion-android-checkbox-outline"></i>
            </h4>
          </div>
          <div class="on-checked"></div>
        </label>
      </div>
          <Routes>
            <Route path='/shiftCipher' element={<ShiftCipher />} />
            <Route path='/substitutionCipher' element={<SubstitutionCipher />} />
            <Route path='/hillCipher' element={<HillCipher />} />
            <Route path='/vigenereCipher' element={<VigenereCipher />} />
          </Routes>
        </Router>
      </div>
      
    </div>
  );
}

export default App;
