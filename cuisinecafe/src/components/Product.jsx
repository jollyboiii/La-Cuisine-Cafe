import React from 'react'
import Aboutcar1 from './Aboutcar1'
import Aboutcard2 from './Aboutcard2'
import visionimage from '../Images/aboutimage1.png'
import missionimage from '../Images/aboutimage2.png';

import '../Css/product.css'

function Product() {
  return (
    <div className='Product mt-5'>
      <div className="container mx-auto p-3">
        <h2>Our <span>Mission</span> and <span>Vission</span></h2>
        <div className="productbg">
          <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-2">
                <Aboutcard2 title="Our Mission" description="Our mission is simple: to bring joy to our customers through every cup of coffee, every bite of a doughnut, and every catered event. We are committed to using the finest ingredients, sourcing locally whenever possible, and creating an environment where everyone feels welcome." images={missionimage}/>
                <Aboutcar1 title="Our Vision" description="Our vision is to be more than just a café. We aim to be a community hub where people come together to relax, connect, and celebrate. Whether you’re stopping by for your morning coffee or hosting a special event with our catering services, we want every experience at La Cuisine Cafe to be memorable." images={visionimage}/>
            </div>
        </div>
      </div>

    </div>
  )
}

export default Product