import React from 'react'
import '../Css/cateringoption.css'
import Cateringaboutcoursel from './Cateringaboutcoursel'

function Cateringoption() {
  return (
    <>
        <div className='cateringheading'>
            <h1>Catering <span>Options</span></h1>
        </div>
        <div className='cateringoptionmain'>
                <div className='container mx-auto cateringcard'>
                    <Cateringaboutcoursel/>
                </div>
        </div>
    </>
  )
}

export default Cateringoption