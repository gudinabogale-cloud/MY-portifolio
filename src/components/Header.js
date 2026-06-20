import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa';
import './Header.css';

function Header({ darkMode, setDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">Portfolio</div>
          
          <button className="menu-toggle" onClick={handleMenuToggle}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

          <nav className={`nav ${menuOpen ? 'active' : ''}`}>
            <Link to="home" smooth={true} duration={500} onClick={handleLinkClick}>Home</Link>
            <Link to="about" smooth={true} duration={500} onClick={handleLinkClick}>About</Link>
            <Link to="skills" smooth={true} duration={500} onClick={handleLinkClick}>Skills</Link>
            <Link to="projects" smooth={true} duration={500} onClick={handleLinkClick}>Projects</Link>
            <Link to="blog" smooth={true} duration={500} onClick={handleLinkClick}>Blog</Link>
            <Link to="testimonials" smooth={true} duration={500} onClick={handleLinkClick}>Testimonials</Link>
            <Link to="contact" smooth={true} duration={500} onClick={handleLinkClick}>Contact</Link>
          </nav>

          <button className="theme-toggle" onClick={() => setDarkMode(!darkMode)} title={darkMode ? 'Light Mode' : 'Dark Mode'}>
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
