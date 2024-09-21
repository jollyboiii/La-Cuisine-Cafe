import React from 'react'
import Herosection3 from '../components/Herosection3'
import Cateringabout from '../components/Cateringabout';
import image1 from '../Images/cateringimg1.png'; // Add your images
import image2 from '../Images/cateringimg2.png';
import image3 from '../Images/cateringimg3.png';
import image4 from '../Images/cateringimg4.png';
import image5 from '../Images/cateringimg5.png';
// import Cateringoptioncard from '../components/Cateringoptioncard';
import Cateringoption from '../components/Cateringoption';


function Catering() {
  const aboutdata={
    heading:"Why Choose ",
    highlight:"La Cuisine Cafe",
    heading2:" for Your Event?",
    description:"At La Cuisine Cafe, we believe that every event deserves exceptional food and service. Our catering team is dedicated to making your event memorable with a menu that delights the senses. Whether you're hosting a morning tea, a themed birthday party, or a culturally rich feast, we have the expertise to bring your vision to life."
  }
  return (
    <>
      <div>
        <Herosection3 heading={"Celebrate with"} span={" Flavor"} description={"From intimate gatherings to grand celebrations, La Cuisine Cafe brings gourmet delights to your events."} image1={image1} image2={image2} image3={image3} image4={image4} image5={image5} />
      </div>
      <div>
        <Cateringabout heading={aboutdata.heading} highlight={aboutdata.highlight} heading2={aboutdata.heading2} description={aboutdata.description}/>
      </div>
      <div >
        <Cateringoption/>
      </div>
    </>
  )
}

export default Catering