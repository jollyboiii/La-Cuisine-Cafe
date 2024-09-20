import React from 'react'
import Herosection3 from '../components/Herosection3'
import image1 from '../Images/cateringimg1.png'; // Add your images
import image2 from '../Images/cateringimg2.png';
import image3 from '../Images/cateringimg3.png';
import image4 from '../Images/cateringimg4.png';
import image5 from '../Images/cateringimg5.png';

function Catering() {
  return (
    <>
      <div>
        <Herosection3 heading={"Celebrate with"} span={" Flavor"} description={"From intimate gatherings to grand celebrations, La Cuisine Cafe brings gourmet delights to your events."} image1={image1} image2={image2} image3={image3} image4={image4} image5={image5} />
      </div>
    </>
  )
}

export default Catering