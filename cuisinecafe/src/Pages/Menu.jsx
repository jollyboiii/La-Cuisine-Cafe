import React from 'react'
import HerosectionA from '../components/HerosectionA'
import menuimage from '../Images/menucoffe.png'
import '../Css/menu.css'
import Menu1 from '../components/Menu1';
import Menu2 from '../components/Menu2';
import menu1 from '../list/menu1';
import menu3 from '../list/menu3';
import menu4 from '../list/menu4';
import menu5 from '../list/menu5';
import menu6 from '../list/menu6';
import menu7 from '../list/menu7';

function Menu() {
  const heroData = {
    heading: "Indulge in Every",
    Highlight: "Sip and Bite",
    description: "Explore our carefully curated menu, crafted to bring you delicious moments every day"
  };

  return (  
    <>
      <HerosectionA 
        heading={heroData.heading} 
        span={heroData.Highlight} 
        description={heroData.description} 
        image={menuimage} 
        showimage={true} 
        showaboutbtn={false} 
        showmenubtn={true}
      />
      <div className='menu'>
        <h1>Our <span>Menu</span></h1>
      </div>
      <Menu1 menuItems={menu1} title="Coffee Products" /> 
      <Menu2 menuItems={menu3} title="Non-Caffeines" />
      <Menu1 menuItems={menu4} title="Drinks - Iced" /> 
      <Menu2 menuItems={menu5} title="Fresh Juice" />
      <Menu1 menuItems={menu6} title="Food - Pastry" />
      <Menu2 menuItems={menu7} title="Sandwiches" />  
  
    </>
  );
}

export default Menu;
