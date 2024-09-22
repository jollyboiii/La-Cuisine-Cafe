import React from 'react'
import menu2 from '../list/menu2'
import '../Css/menu.css';

function Menu2() {
  return (
    <div className="menu-container1">
      <div className="menu-inner-container mx-auto mt-2 sm:container">
        <h2>Artisan Doughnuts</h2>
        <div className="menu-underline"></div>
        <div className="menu-background1">
          <div className="menu-inner-background">
            <div className="menu-grid">
              {menu2.map((item, index) => (
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
  )
}

export default Menu2