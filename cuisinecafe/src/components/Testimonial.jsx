import React from 'react';
import '../Css/Testimonal.css';
import Customercoursel from './Customercoursel';

function Testimonial() {
  return (
    <div className="maintestimonaldiv">
      <div className="maintestimonal">
        <div className="bgtestimonal"></div>
        <div className="customerreview grid grid-cols-1 md:grid-cols-2 gap-2 relative z-10 p-4">
          <div className="customersays">
            <h2>What Our Customers Say</h2>
            <p className="descriptiontext">
              We always provide the best service and always maintain the quality of coffee
            </p>
          </div>
          <div className="customercardcoursel ">
            <Customercoursel />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
