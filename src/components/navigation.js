import './style.css'
import { ShiftCipher } from './ShiftCipher';
import { BrowserRouter as Router, Routes , Route, Link } from 'react-router-dom';

export const Navbar = () => {
return (
    <div id="navb">
        <Router>
          <Link to="/shiftCipher">Shift Cipher</Link>
          <Routes>
            <Route path='/shiftCipher' element={<ShiftCipher />} />
          </Routes>
        </Router>
    </div>
    )
}