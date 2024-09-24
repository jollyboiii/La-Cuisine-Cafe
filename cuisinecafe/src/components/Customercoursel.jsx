import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Customercard from '../components/Customercard';
import customer from '../components/Customer';

function Customercoursel() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1252 },
      items: 3
    },
    mediumScreen: {
      breakpoint: { max: 1252, min: 768 }, 
      items: 2
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <div>
      <Carousel responsive={responsive}>
        {customer.map((item, index) => (
          <Customercard 
            key={index} 
            images={item.image} 
            title={item.name} 
            description={item.description} 
          />
        ))}
      </Carousel>
    </div>
  );
}

export default Customercoursel;
