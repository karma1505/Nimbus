import React, { useRef } from 'react';
import "../App.css";

const Navbar = () => {
  const servicesRef = useRef(null);

  const scrollToRef = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
      <div className="logo">Nimbus Inc.</div>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a onClick={() => scrollToRef(servicesRef)} href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
