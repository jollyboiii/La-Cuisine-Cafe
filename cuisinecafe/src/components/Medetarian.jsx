import React from 'react'
import '../Css/Medetarin.css';

import Menuhighlights from '../components/Menuhighlights';

function Medetarian(props) {

  return (
    <div className='Medetarianmain'>
        <div className="Medetatirianmainbg">
          <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="flex justify-center lg:justify-end medetarianimg">
              <img 
                  src={props.image} 
                  alt="Morning Tea" 
                  className="rounded-lg w-full lg:w-[80%] shadow-lg mt-"
              />
              </div>
              <div className="space-y-4">
            <h2 className="text-[var(--secondarycolor)] text-2xl lg:text-4xl font-semibold">
            <span className='text-[var(--primarycolor)]'>{props.highlight}</span> {props.heading}
            </h2>
            <p className="text-[var(--secondary-text)] text-base lg:text-lg leading-relaxed">{props.description}</p>
            <div className='mt-2'>
              <Menuhighlights menuItems={props.menuData}/>
            </div>
            </div>

          </div>
        </div>

    </div>
  )
}

export default Medetarian