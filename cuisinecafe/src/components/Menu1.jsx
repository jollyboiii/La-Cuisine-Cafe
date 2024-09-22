import React from 'react';
import menu1 from '../list/menu1'; // Import the menu1 array
import '../Css/menu.css';

function Menu1() {
  return (
    <div className="menu-container1">
      <div className="menu-inner-container mx-auto mt-2 sm:container">
        <h2>Coffee Products</h2>
        <div className="menu-underline"></div>
        <div className="menu-background">
          <div className="menu-inner-background">
            <div className="menu-grid">
              {menu1.map((item, index) => (
                <div key={index} className='menu-card'>
                  <div className='menu-card-inner'>
                    <h3>{item.name}</h3>
                    <p>{item.price}</p>
                  </div>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu1;
