import React from 'react';
import '../Css/herosection.css'; 
import coffecup from '../Images/coffe.png'; 

function HeroSection() {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <h1>Sip, Savor, Smile <span className="highlight">Delicious Moments</span> Every Day</h1>
        <p>Welcome to La Cuisine Cafe, where every sip and bite is crafted with love.</p>
        <div className="hero-buttons">
          <button className="menu-btn">Menu</button>
          <button className="location-btn">Our Location</button>
        </div>
      </div>
      <div className="hero-image">
        <img src={coffecup} alt="Cup of Coffee" className="coffe-image mt-5"/>
        <div className="coffee-beans"></div> 
      </div>
    </div>
  );
}

export default HeroSection;
