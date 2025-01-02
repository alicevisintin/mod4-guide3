import React, { useState } from 'react';
import './HamburgerMenu.css';

const HamburgerMenu = ({ links = [], iconColor = '#333', menuBackground = '#333' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Handle hover events
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };


  const hoverIconColor = isHovered ? '#f0f0f0' : iconColor;

  return (
    <div className="hamburger-menu-container">

      {/* Hamburger Icon */}
      <div
        className={`hamburger-icon ${isOpen ? 'open' : ''}`}
        onClick={toggleMenu}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ borderColor: hoverIconColor }}
      >
        <span className="bar" style={{ backgroundColor: hoverIconColor }}></span>
        <span className="bar" style={{ backgroundColor: hoverIconColor }}></span>
        <span className="bar" style={{ backgroundColor: hoverIconColor }}></span>
      </div>

      {/* Navigation Links */}
      <nav className={`nav-links ${isOpen ? 'open' : ''}`} style={{ backgroundColor: menuBackground }}>
        <ul>
          {links.map((link, index) => (
            <li key={index}>
              <a href={link.href}>{link.text}</a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default HamburgerMenu;
