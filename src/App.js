import "./App.css";
import { characterIs } from "./chart.js";
import { useState } from "react";
import { Headbar } from "./components/Heading";
import { Navbar } from "./components/navigation";
import { ShiftCipher } from "./components/ShiftCipher";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Headbar />
      {/* <Navbar /> */}

      <div class="options">
        <label class="option">
          <input type="radio" name="company" value="apple" checked />
          <div class="option-content">
            <h1 class="animated bounceIn">
              <i class="ion-social-apple-outline"></i>
            </h1>
            <h4>APPLE</h4>
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
            <h4>FACEBOOK</h4>
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
            <h4>TUMBLR</h4>
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
            <h4>TWITTER</h4>
            <h4>
              <i class="ion-android-checkbox-outline"></i>
            </h4>
          </div>
          <div class="on-checked"></div>
        </label>
      </div>

      {/* <div>
        <Router>
          <Link to="/shiftCipher">Shift Cipher</Link>
          <Routes>
            <Route path="/shiftCipher" element={<ShiftCipher />} />
          </Routes>
        </Router>
      </div> */}
    </div>
  );
}

export default App;
