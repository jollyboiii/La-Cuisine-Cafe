import React from 'react'
import '../Css/Aboutpagecomponet2.css'
import unique from '../Images/unique.png'

function Aboutpagecomponent2() {
  return (
    <div className='Aboutpagemain'>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3">
          <div className='flex justify-center md:justify-start Aboutcmpimg'>
            <img src={unique} alt='unique img' className='aboutimgradius'/>
          </div>
          <div className=' Aboutpagemaincontent'>
            <h2>What Makes <span className='span1'>Us Unique</span></h2>
            <h3>Our Commitment to <span>Quality</span></h3>
            <p>Quality is at the heart of everything we do. From our expertly roasted coffee beans to our hand-crafted artisan doughnuts, we take pride in offering only the best to our customers. Every product is made with care, passion, and a commitment to excellence.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Aboutpagecomponent2;
