import React from 'react'
import { Card as AntdCard } from 'antd';
import '../Css/product.css'

function Aboutcar2(props) {
  return (
    <AntdCard
      style={{
        width: '100%',       // Full width for responsive layout
        maxWidth: '670px',   // Maximum width for larger screens
        margin: '0 auto',    // Center the card
        height: 'auto',      // Set auto height for flexibility
        padding: '10px',     // Add padding for content spacing
      }}
    >
      <div className="Aboutcartext">
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </div>
      <img
        alt="Coffee Specialist"
        src={props.images}
        className=' aboutimgradius mt-2'  // Use a class for border-radius
        style={{
          width: '100%',            // Set full width
          height: '30vh',           // Set a fixed height for the image
          objectFit: 'cover',        // Keep the aspect ratio of the image
        }}
      />
    </AntdCard>
  );
}

export default Aboutcar2;
