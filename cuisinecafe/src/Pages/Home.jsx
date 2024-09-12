import React from 'react'
import Herosecton from '../components/herosection'
import Spealities from '../components/spealities'
import About from '../components/About';
import Feature from '../components/Feature';
import Testimonial from '../components/Testimonial';
import  Fotter from '../components/Footer';
function Home() {
  return (
    <div className='hompage'> 
      <div>
        <Herosecton/>
      </div>
      <div className=' specialities-section'>
        <Spealities/>
      </div>
      <div>
        <About/>
      </div>
      <div>
        <Feature/>
      </div>
      <div>
        <Testimonial/>
      </div>
      <div>
        <Fotter/>
      </div>
    </div>
  )
}

export default Home