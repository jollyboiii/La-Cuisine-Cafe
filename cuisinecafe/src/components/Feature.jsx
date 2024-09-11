import React from 'react'
import '../Css/Feature.css';
import ProductCoursel from '../components/ProductCoursel';


function Feature() {
  return (
    <div className='maindivfeature '>
      <div className="container mx-auto ">
        <h2 className='Featuredheading'>Featured <span className='products'>Products</span></h2>
        <div className="courselproduct">
          <ProductCoursel/>
        </div>
        {/* <ProductCard image={sandwich} title={"batman"} price={"2"} description={"i ma batman"}/> */}
      </div>
        
        
    </div>
  )
}

export default Feature