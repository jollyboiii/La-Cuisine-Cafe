import React from 'react';
import '../Css/location.css';

function Location(props) {
  return (
    <div className='locationmargin px-4 location'>
      <div className="mt-5 grid gap-4 sm:grid-cols-1 md:grid-cols-2">
        <div className='shopinfo flex justify-center content-center'>
          <div>
            <h3>{props.title}</h3>
            <p className='description'>Our friendly team is available during business hours to assist you. Connect with us today and let La Cuisine Café be the launchpad for your culinary endeavors.</p>
            <p>La Cuisine Cafe</p>
            <p>Address: Shop 2, 118 Church Street Parramatta, New South Wales 2150, Australia</p>
            <p>Phone: 0407 133 379</p>
            <p>Email: info@lacuisinecafe.com.au</p>
            <p>Open Time: 7AM-9PM</p>
          </div>
        </div>
        <div className='shopmap'>
            <iframe
            title="La Cuisine Cafe Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3314.737184502619!2d151.0038384537695!3d-33.81909475568532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12a321af6a48b3%3A0xcf3ee527fe814b90!2sLa%20Cuisine%20Cafe!5e0!3m2!1sen!2snp!4v1730177711017!5m2!1sen!2snp"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Location;
