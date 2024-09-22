import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Cateringoptioncard from './Cateringoptioncard';
import image1 from '../Images/cateringoptimg3.png';
import image2 from '../Images/cateringoptimg2.png';
import image3 from '../Images/cateringoptimg1.png';

function Cateringaboutcoursel() {
  const cardData = [
    {
      image: image1,
      caption: 'Morning Tea',
    },
    {
      image: image2,
      caption: 'Mediterranean Cuisine',
    },
    {
      image: image3,
      caption: 'Nepalese Cuisine',
    },
  ];

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 564, min: 0 },
      items: 1,
    },
  };

  return (
    <Carousel responsive={responsive} >
      {cardData.map((item, index) => (
        <Cateringoptioncard key={index} image={item.image} caption={item.caption} />
      ))}
    </Carousel>
  );
}

export default Cateringaboutcoursel;
