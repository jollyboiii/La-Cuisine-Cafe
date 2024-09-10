import React from 'react'
import Herosecton from '../components/herosection'
import Spealities from '../components/spealities'
import About from '../components/About';
import Feature from '../components/Feature';
function Home() {
  return (
    <div className='hompage'> 
      <div>
        <Herosecton/>
      </div>
      <div className='mt-10 specialities-section'>
        <Spealities/>
      </div>
      <div>
        <About/>
      </div>
      <div>
        <Feature/>
      </div>
    </div>
  )
}

export default Home