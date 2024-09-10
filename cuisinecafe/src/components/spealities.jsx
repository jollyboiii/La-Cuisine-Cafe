import React from 'react'
import '../Css/spealities.css';
import Coursel from '../components/coursel'
// import Customcard from '../components/CustomCard';
function spealities() {
  return (
    <div className='maindiv'>
        <div className='container mx-auto '>
            <div className="heading pt-10">
                <h2 className='mt-2 space'>Our <span>specialities</span></h2>
                <div className='mt-5 pb-5'>
                    <Coursel/>
                </div>
            </div>
        </div>   
    </div>
  )
}

export default spealities