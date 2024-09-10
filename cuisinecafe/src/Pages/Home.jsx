import React from 'react'
import Herosecton from '../components/herosection'
import Spealities from '../components/spealities'
function Home() {
  return (
    <div className='hompage'> 
      <div>
        <Herosecton/>
      </div>
      <div className='mt-10 specialities-section'>
        <Spealities/>
      </div>
      <h1>iambatman</h1>
    </div>
  )
}

export default Home