import React from 'react'
import Herosecton from '../components/herosection'
import Spealities from '../components/spealities'
import About from '../components/About';
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
      <h1>i am batman</h1>
    </div>
  )
}

export default Home