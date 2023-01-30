import "./App.css";
import { characterIs } from "./chart.js";
import { useState } from "react";
import { Headbar } from "./components/Heading";
import { Navbar } from "./components/navigation";
import { ShiftCipher } from "./components/ShiftCipher";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { SubstitutionCipher } from './components/substitutionCipher';
import { HillCipher } from "./components/HillCipher";
import { VigenereCipher } from "./components/VigenereCipher";
import { useEffect, createContext } from "react";

const HomeStyle = {
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  height: "100vh",
  width: "100vw",
  color: "white",
  fontSize: "2rem",
  fontWeight: "bold",
};

const PageStyle = {
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  height: "50vh",
  width: "100vw",
  color: "white",
  fontSize: "2rem",
  fontWeight: "bold",
};

export const NavContext = createContext();

function App() {

  const [navPos, setNavPos] = useState(HomeStyle);

  return (
    <div className="App">
      <Headbar />
      <NavContext.Provider value={{ navPos, setNavPos,HomeStyle, PageStyle }}>
      <div>
        <Router>
          <div style={navPos}>
            <Link className="link" to="/shiftCipher" >
              Shift Cipher
            </Link>
            <Link className="link" to="/substitutionCipher">
              Substitution Cipher
            </Link>
            <Link className="link" to="/vigenereCipher">
              Vigenere Cipher
            </Link>
            <Link className="link" to="/hillCipher">
              Hill Cipher
            </Link>
            
          </div>
          <Routes>
            <Route path="/shiftCipher" element={<ShiftCipher />} />
            <Route path='/substitutionCipher' element={<SubstitutionCipher />} />
            <Route path="/hillCipher" element={<HillCipher />} />
            <Route path="/vigenereCipher" element={<VigenereCipher />} />
          </Routes>
        </Router>
      </div>
      </NavContext.Provider>
    </div>
  );
}

export default App;