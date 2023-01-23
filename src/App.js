import "./App.css";
import { characterIs } from "./chart.js";
import { useState } from "react";
import { Headbar } from "./components/Heading";
import { Navbar } from "./components/navigation";
import { ShiftCipher } from "./components/ShiftCipher";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import { SubstitutionCipher } from './components/substitutionCipher';
import { HillCipher } from "./components/HillCipher";
import { VigenereCipher } from "./components/VigenereCipher";

function App() {
  return (
    <div className="App">
      <Headbar />
      <div>
        <Router>
          <div className="options">
            <label className="option">
              <div className="option-content">
                <Link className="link" to="/shiftCipher">
                  Shift Cipher
                </Link>
              </div>
            </label>
            <label className="option">
              <div className="option-content">
                <Link className="link" to="/substitutionCipher">
                  Substitution Cipher
                </Link>
              </div>
            </label>
            <label className="option">
              <div className="option-content">
                <Link className="link" to="/vigenereCipher">
                  Vigenere Cipher
                </Link>
              </div>
            </label>
            <label className="option">
              <div className="option-content">
                <Link className="link" to="/hillCipher">
                  Hill Cipher
                </Link>
              </div>
            </label>
          </div>
          <Routes>
            <Route path="/shiftCipher" element={<ShiftCipher />} />
            {/* <Route path='/substitutionCipher' element={<SubstitutionCipher />} /> */}
            <Route path="/hillCipher" element={<HillCipher />} />
            <Route path="/vigenereCipher" element={<VigenereCipher />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;