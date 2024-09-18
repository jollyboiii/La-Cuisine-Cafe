import React from 'react'
// import Herosection2 from '../components/Herosection2'
import HerosectionA from '../components/HerosectionA'
import menuimage from '../Images/menucoffe.png'

function Menu() {
  const heroData={
    heading:"Indulge in Every",
    Highlight:"Sip and Bite",
    description:"Explore our carefully curated menu, crafted to bring you delicious moments every day"
  }
  return (  
    <div>
      <HerosectionA heading={heroData.heading} span={heroData.Highlight} description={heroData.description} image={menuimage} showimage={true} showaboutbtn={false} showmenubtn={true}/>
    
    </div>
  )
}

export default Menu