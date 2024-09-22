import React from 'react';
import "../Css/Menuhighlights.css";

function MenuHighlights({ menuItems }) {
  return (
    <div className="menu-container">
      <h3 className="menu-heading">Menu Highlights</h3>
      <ul className="menu-list">
        {menuItems.map((menuItem, index) => (
          <li key={index}>{menuItem.item}</li>
        ))}
      </ul>
    </div>
  );
}

export default MenuHighlights;
