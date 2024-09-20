import React from 'react'
// import Herosection2 from '../components/Herosection2'
import HerosectionA from '../components/HerosectionA'
import menuimage from '../Images/menucoffe.png'
import '../Css/menu.css'
import Menu1 from '../components/Menu1';
import Menu2 from '../components/Menu2';

function Menu() {
  const heroData={
    heading:"Indulge in Every",
    Highlight:"Sip and Bite",
    description:"Explore our carefully curated menu, crafted to bring you delicious moments every day"
  }
  return (  
    <>
      <div>
        <HerosectionA heading={heroData.heading} span={heroData.Highlight} description={heroData.description} image={menuimage} showimage={true} showaboutbtn={false} showmenubtn={true}/>
      </div>
      <div className='menu'>
        <h1>Our <span>Menu</span></h1>
      </div>
      <div>
        <Menu1/>
      </div>
      <div>
        <Menu2/>
      </div>

    </>

  )
}

export default Menu