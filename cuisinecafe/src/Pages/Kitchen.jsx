import React from 'react'
import Herosection3 from '../components/Herosection3'
import image1 from '../Images/Kitchenimg3.png'; // Add your images
import image2 from '../Images/Kitchenimg4.png';
import image3 from '../Images/Kitchenimg1.png';
import image4 from '../Images/Kitchenimg2.png';
import image5 from '../Images/Kitchenimg5.png';
import Cateringabout from '../components/Cateringabout';

function Kitchen() {
  const aboutdata={
    heading:"Welcome to ",
    highlight:"La Cuisine Cafe",
    heading3:"Your Premier Destination for Commercial Kitchen Rental in Parramatta, NSW",
    discription:"We offer state-of-the-art facilities equipped with brand new kitchen equipment, conveniently located with easy access to public transportation. Whether you're a culinary professional, a budding entrepreneur, or a food enthusiast looking to explore your passion, our commercial kitchen is the perfect space for you. With our versatile facilities, you can host training sessions, cater events, and much more. Join us and take your culinary endeavors to new heights at La Cuisine Café."
  }
  return (  
   <>
    <div>
        <Herosection3 heading={"Start Your"} span={" Kitchen Journey"} heading2={" Today"} description={"From intimate gatherings to grand celebrations, La Cuisine Cafe brings gourmet delights to your events."} image1={image1} image2={image2} image3={image3} image4={image4} image5={image5} />
    </div>
    <div>
      <Cateringabout heading={aboutdata.heading} highlight={aboutdata.highlight} heading3={aboutdata.heading3} description={aboutdata.discription} />
    </div>
    
   </>
  )
}

export default Kitchen