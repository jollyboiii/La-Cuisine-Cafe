import React from 'react';
import { Link } from 'react-router-dom';
import '../Css/Footer.css';
import tiktok from '../Images/tiktok.png';
import Facebook from '../Images/facebook.png';
import Insta from  '../Images/instagram.png';

function Footer() {
  

  return (
    <div className='mainfooter'>
      <div className="footerbgimage" />
      <div className="footermaininfo container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="footerinfo mt-2">
          <h2>Business Information</h2>
          <div className='footerinfop mt-'> 
            <p>Address: Shop 2, 118 Church Street Parramatta, New South Wales 2150, Australia</p>
            <p>Phone: +61 411678158</p>
            <p>Email: info@lacuisinecafe.com.au</p>
            <p>Opening time : Mon-Fri 7am-3Pm</p>
          </div>
        </div>
        <div className="footerinfo mt-2">
          <h2>Business Services</h2>
          <div className='footerinfop mt-2'> 
            <Link to="/menu">Menu</Link><br />
            <Link to="/catering">Catering Services</Link><br />
            <Link to="/rental-kitchen">Rental Kitchen</Link><br />
            <Link to="/contact">Contact Us</Link><br />
          </div>
        </div>
        <div className="footerinfo mt-2 mb-3">
          <h2>Quick Links</h2>
          <div className='footerimg mt-2'> 
            <div className="grid grid-cols-3 gap-0">
              <a className='facebook' href='https://www.facebook.com/people/La-Cuisine-Espresso-Dessert-and-Bar/61567603241017/?mibextid=ZbWKwL'><img src={Facebook} alt="facebook"/></a>
              <a className='tiktok marker mt-4' href='https://www.tiktok.com/@lacuisinecafe'><img src={tiktok} alt="tiktok"/></a>
              <a className='tiktok marker mt-4' href='https://www.instagram.com/lacuisine.cafe?igsh=cWlqYnVtNG1kOGM0'><img src={Insta} alt="tiktok"/></a>
            </div>
          </div>
        </div>
      </div>

      <div className="footerbottom">
        <p>© 2024 La Cuisine Cafe. All rights reserved.</p>
        <span>|</span>
        <p>Website designed by Roobits.</p>
      </div>
    </div>
  );
}

export default Footer;
