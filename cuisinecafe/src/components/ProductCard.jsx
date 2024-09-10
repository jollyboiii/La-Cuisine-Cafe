import React from 'react';
import '../Css/Feature.css';
import { Card as AntdCard } from 'antd';

const ProductCard = (props) => (
  <AntdCard className='ant-card'
    style={{
      width: '100%',       // Full width for responsive layout
      maxWidth: '300px',   // Maximum width for larger screens
      margin: '0 auto',    // Center the card
      height: 'auto',      // Set auto height for flexibility
      padding: '10px',     // Add padding for content spacing
      background: 'transparent', // Remove background color
      border: 'none',      // Optional: Remove border if needed
    }}
    cover={
      <img
        alt="Coffee Specialist"
        src={props.images}
        className='p-2 img-radius'  // Use a class for border-radius
        style={{
          height: '180px',           // Set a fixed height for the image
          objectFit: 'cover',        // Keep the aspect ratio of the image
        }}
      />
    }
  >
    <div className="text">
      <div className="cardtitle">
        <h3>{props.title}</h3>
        <p className='price'>{props.price}</p>
      </div>
      <p>{props.description}</p>
    </div>
    
  </AntdCard>
);

export default ProductCard;
