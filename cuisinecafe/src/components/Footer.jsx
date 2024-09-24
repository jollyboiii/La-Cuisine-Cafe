import React from 'react'
import {Link} from 'react-router-dom'
import '../Css/Footer.css';
import instagramimg from '../Images/instagram.png'
import tiktok from '../Images/tiktok.png';

function Footer() {
  return (
    <div className='mainfooter'>
      <div className="footerbgimage"/>
      <div className="footermaininfo container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="footerinfo mt-2">
          <h2>Buisness Information</h2>
          <div className='footerinfop mt-'> 
            <p>Address: Shop 2, 118 Church Street Parramatta, New South Wales 2150, Australia </p>
            <p>Phone: 0407 133 379</p>
            <p>Email: info@lacuisinecafe.com.au</p>
            <p>Business Hours: "Open Daily: 7 am - 3 pm"</p>
          </div>
        </div>
        <div className="footerinfo mt-2">
          <h2>Buisness Information</h2>
          <div className='footerinfop mt-2'> 
            <Link>Menu</Link><br/>
            <Link>Catering Services</Link><br/>
            <Link>Rental Kitchen</Link><br/>
            <Link>Contact Us</Link> <br/>
          </div>
        </div>
        <div className="footerinfo mt-2 mb-3">
          <h2>Quick Link</h2>
          <div className='footerimg mt-2'> 
            <img src={instagramimg} alt="Instagram" />
            <img src={tiktok} alt="tiktok" />
          </div>
        </div>

      </div>

      <div className="footerbottom">
        <p>© 2024 La Cuisine Cafe. All rights reserved.</p>
        <span>|</span>
        <p>Website designed by Roobits.</p>


      </div>

    </div>
  )
}

export default Footer