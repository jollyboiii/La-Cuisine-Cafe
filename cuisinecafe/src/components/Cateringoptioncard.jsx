import React from 'react'
// import cardimage from '../Images/cateringimg1.png'
import '../Css/cateringoption.css'

function Cateringoptioncard(props) {
  return (
    <div className="card-container">
    <img 
      src={props.image} 
      alt="Morning Tea" 
      className="card-image"
    />
    <div className="card-caption">
      {props.caption}
    </div>
  </div>
  )
}

export default Cateringoptioncard