import React from 'react'
import HerosectionA from '../components/HerosectionA'
import Product from '../components/Product';
import Aboutpagecomponent2 from '../components/Aboutpagecomponent2';
import Footer from '../components/Footer';
// import Herosection2 from '../components/Herosection2'
import Location from '../components/Location';
function About() {
  const heroData={
    heading:"Welcome to",
    highlight:"La Cuisine Cafe",
    description:"At La Cuisine Cafe, we believe in creating more than just great food and drinks—we create experiences. Nestled in the heart of [Location], our café is a haven for coffee lovers, doughnut enthusiasts, and anyone who appreciates the art of good taste. From our humble beginnings, we’ve grown into a beloved local spot, known for our dedication to quality, warmth, and community."
  }
  return (
    <>
    <div>
        <HerosectionA heading={heroData.heading} span={heroData.highlight} description={heroData.description}  showimage={false} showaboutbtn={true} showmenubtn={false}/>
      </div>
      <div>
        <Product/>
      </div>
      <div>
        <Aboutpagecomponent2/>
      </div>
      <section id='VisitUS'>
        <div>
          <Location title={"Visit US"}/>
        </div>
      </section>
      <div>
        <Footer/>
      </div>
    </>
  )
}

export default About