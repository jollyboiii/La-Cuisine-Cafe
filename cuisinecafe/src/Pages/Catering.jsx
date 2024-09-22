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
// import Menuhighlights from '../components/Menuhighlights';
import Medetarian from '../components/Medetarian';
import Medetarianimage from '../Images/medetarian.png';
import Medetarianimage2 from '../Images/medetarian2.png';
import Medetarian2 from '../components/Medetarian2';
import Footer from '../components/Footer';



function Catering() {
  const aboutdata={
    heading:"Why Choose ",
    highlight:"La Cuisine Cafe ",
    heading2:" for Your Event?",
    description:"At La Cuisine Cafe, we believe that every event deserves exceptional food and service. Our catering team is dedicated to making your event memorable with a menu that delights the senses. Whether you're hosting a morning tea, a themed birthday party, or a culturally rich feast, we have the expertise to bring your vision to life."
  }
  
  const meditarianData={
    highlight:"Morning Tea",
    heading:"Catering",
    discription:"Start your day with elegance and flavor. Our Morning Tea catering service is perfect for corporate meetings, bridal showers, or any occasion that calls for a touch of sophistication. Indulge in freshly brewed coffee, delicate pastries, and refreshing fruit platters that will leave your guests impressed."
  }
  const medetarianData2={
    highlight:"Mediterranean Cuisine",
    heading:"Catering",
    discription:"Bring the flavors of the Mediterranean to your event with our authentic and delicious dishes. Perfect for weddings, dinner parties, or themed events, our Mediterranean catering service offers a delightful blend of fresh ingredients, bold spices, and traditional recipes."
  }
  const medetarianData3={
    highlight:"Nepalese Cuisine",
    heading:"Catering",
    discription:"Celebrate with the rich, diverse flavors of Nepal. Our Nepalese catering service is ideal for cultural celebrations, festivals, and family gatherings, offering a unique and flavorful dining experience that will transport your guests to the heart of Nepal."
  }
  const menuData = [
    { item: 'Freshly Brewed Coffee and Tea' },
    { item: 'Assorted Pastries (Muffins, Croissants, Scones)' },
    { item: 'Finger Sandwiches (Cucumber, Smoked Salmon, Egg Salad)' },
    { item: 'Seasonal Fruit Platter' },
  ];
  const menData2=[
    {item:'Hummus with Pita Bread'},
    {item:'Grilled Chicken and Beef Kebabs'},
    {item:'Greek Salad with Feta Cheese'},
    {item:'Baklava for Dessert'},
  ]
  const menData3=[
    {item:'Momo (Nepalese Dumplings)'},
    {item:'Dal Bhat (Lentils and Rice)'},
    {item:'Chicken Curry with Nepalese Spices'},
    {item:'Sel Roti (Traditional Nepalese Fried Bread)'},
  ]

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
      <div>
        <Medetarian highlight={meditarianData.highlight} heading={meditarianData.heading} description={meditarianData.discription} image={Medetarianimage} menuData={menuData}/>
      </div>
     <div>
        <Medetarian2 highlight={medetarianData2.highlight} heading={medetarianData2.heading} description={medetarianData2.discription} image={Medetarianimage2} menuData={menData2}/>
     </div>
     <div>
      <Medetarian highlight={medetarianData3.highlight} heading={medetarianData3.heading} description={medetarianData3.discription} image={Medetarianimage} menuData={menData3}/>
     </div>
     <div>
      <Footer/>
     </div>
      
    </>
  )
}

export default Catering