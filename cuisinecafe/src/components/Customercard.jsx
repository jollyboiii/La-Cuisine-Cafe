import React from 'react';
import '../Css/Testimonal.css';
// import coffecup from '../Images/coffespecialist.png';
import { Card as AntdCard } from 'antd';

const CustomCard = (props) => (
  <AntdCard
    style={{
      width: '100%',       // Full width for responsive layout
      maxWidth: '300px',   // Maximum width for larger screens
      margin: '0 auto',    // Center the card
      height: 'auto',      // Set auto height for flexibility
      padding: '10px',     // Add padding for content spacing
    }}
    cover={
      <img
        alt="clients"
        src={props.images}  // Use a class for border-radius
        style={{
          height: '180px',           // Set a fixed height for the image
          objectFit: 'cover',
          backgroundColor: 'transparent',        // Keep the aspect ratio of the image
        }}
      />
    }
  >
    <div className="text">
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </div>
  </AntdCard>
);

export default CustomCard;
