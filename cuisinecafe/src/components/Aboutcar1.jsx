import React from 'react';
import { Card as AntdCard } from 'antd';
import '../Css/product.css'

function Aboutcar1(props) {
  return (
    <AntdCard
      style={{
        width: '100%',       // Full width for responsive layout
        maxWidth: '670px',   // Maximum width for larger screens
        margin: '0 auto',    // Center the card
        height: 'auto',      // Set auto height for flexibility
        padding: '10px',     // Add padding for content spacing
      }}
      cover={
        <img
          alt="Coffee Specialist"
          src={props.images}
          className="p-2 aboutimgradius"  // Use a class for border-radius
          style={{
            width: '100%',             // Full width
            height: '30vh',           // Set a fixed height for the image
            objectFit: 'cover',        // Maintain aspect ratio
          }}
        />
      }
    >
      <div className="Aboutcartext">
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </div>
    </AntdCard>
  );
}

export default Aboutcar1;
