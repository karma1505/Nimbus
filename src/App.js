import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import Navbar from "./Components/Navbar"; 
import ServicesSkills from "./Components/Services";
import "./App.css"; 
import Services from "./Components/Services";

function App() {
  return (
    <div>
      <Navbar />
      <h1 className="first-heading">
        WELCOME TO NIMBUS
      </h1>
      <div className="card">
        <p>We are a premier web development agency based in Solan, India. Our team is dedicated to delivering high-quality web solutions tailored to meet the specific needs of our clients.</p>
        <p>At Nimbus Web , we combine technical expertise with creativity to build websites and web applications that not only look great but also perform exceptionally well.</p>
        <p>Whether you need a simple business website or a complex e-commerce platform, we have the skills and experience to bring your vision to life.</p>
      </div>
      <ServicesSkills />
      <footer className="footer">
        <a href="https://www.instagram.com/nimbuswebdev/"><FontAwesomeIcon icon={faInstagram} size="2x" /></a>
        <a href="https://twitter.com"><FontAwesomeIcon icon={faXTwitter} size="2x" /></a>
      </footer>
    </div>
  );
}

export default App;
