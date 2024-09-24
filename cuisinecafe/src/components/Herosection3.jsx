import React from 'react';
import '../Css/Herosection3.css';

function Herosection3(props) {
  return (
    <div className="catering-main">
      <div className="catering-container">
        <div className="catering-content">
          <h1>{props.heading}<span className="highlight">{props.span}</span>{props.heading2}</h1>
          <p>{props.description}</p>
        </div>
        <div className="catering-image-grid">
          <img src={props.image1} alt="Dish 1" className="grid-image" />
          <img src={props.image2} alt="Dish 2" className="grid-image" />
          <img src={props.image3} alt="Dish 3" className="grid-image" />
          <img src={props.image4} alt="Dish 4" className="grid-image" />
          <img src={props.image5} alt="Dish 5" className="grid-image" />
        </div>
        <div className='coffeebg'>
      </div>
      </div>
    </div>
  );
}

export default Herosection3;
