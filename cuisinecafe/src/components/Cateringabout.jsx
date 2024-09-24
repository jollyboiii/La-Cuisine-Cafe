import React from 'react'
import '../Css/cateringabout.css'
import unique from '../Images/cateringabout.png';

function Cateringabout(props) {
  return (
    <div className='CateringPageMain'>
    <div className="container mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-1">
        <div className='CateringPageContent'>
          <h2>{props.heading} <span className='span1'>{props.highlight}</span>{props.heading2}</h2>
          <h3>{props.heading3}</h3>
          <p>{props.description}</p>
        </div>
        <div className='flex justify-center md:justify-end CateringPageImage'>
          <img src={unique} alt='unique img' className='CateringImageRadius'/>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Cateringabout