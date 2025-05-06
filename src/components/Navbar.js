import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="navbar">
      <div className="logo">
        <span className="main-name">Kalandhara</span>
        <span className="sub-name">Wallpaper App</span>
      </div>
      <div className="burger" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <li><Link to="/" className="link" onClick={() => setMenuOpen(false)}>Home</Link></li>
        <li><Link to="/favorites" className="link" onClick={() => setMenuOpen(false)}>Favorites</Link></li>
        <li><Link to="/about" className="link" onClick={() => setMenuOpen(false)}>About</Link></li>
        <li><Link to="/register" className="signup-button" onClick={() => setMenuOpen(false)}>Sign Up</Link></li>
</ul>
    </nav>
  );
};

export default Navbar;

