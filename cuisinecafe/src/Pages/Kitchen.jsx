import React from 'react'
import Herosection3 from '../components/Herosection3'
import image1 from '../Images/Kitchenimg3.png'; // Add your images
import image2 from '../Images/Kitchenimg4.png';
import image3 from '../Images/Kitchenimg1.png';
import image4 from '../Images/Kitchenimg2.png';
import image5 from '../Images/Kitchenimg5.png';

function Kitchen() {
  return (  
   <>
    <div>
        <Herosection3 heading={"Start Your"} span={" Kitchen Journey"} heading2={" Today"} description={"From intimate gatherings to grand celebrations, La Cuisine Cafe brings gourmet delights to your events."} image1={image1} image2={image2} image3={image3} image4={image4} image5={image5} />
    </div>
   </>
  )
}

export default Kitchen