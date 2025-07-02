import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // ✅ Keep only this one
import "./Navbar.css";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClickOutside = (event) => {
    if (event.target.closest(".navbar") === null) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="navbar">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>

      <div className={`nav-links ${isMenuOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={() => setIsMenuOpen(false)}>
          &#10005;
        </button>

        <ul>
          <li>
            <Link to="/" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={() => setIsMenuOpen(false)}>
              About
            </Link>
          </li>
          <li>
            <Link to="/services" onClick={() => setIsMenuOpen(false)}>
              Services
            </Link>
          </li>
          <li>
            <Link to="/blog" onClick={() => setIsMenuOpen(false)}>
              Blog
            </Link>
          </li>
        </ul>

        <Link to="/contact">
          <button className="contact-btn" onClick={() => setIsMenuOpen(false)}>
            Contact
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
