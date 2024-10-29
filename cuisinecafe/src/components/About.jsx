import React from 'react';
import '../Css/About.css';
import capachino from '../Images/aboutus-section-img.png';
import { useNavigate } from 'react-router-dom';

function About() {
    const navigate=useNavigate();
    const menu=()=>{
        navigate('/Menu');
    }
  return (
    <div className="aboutmain">
        <div className='container mx-auto mainabout'>
        <div className="bgimg"/>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative z-10 p-4">
            <div className="text-center md:text-left heromaintext">
                <h2>
                    Discover the Art of Taste at <br/>
                    <span>La Cuisine Cafe</span>
                </h2>
                <p className='provide'>We provide <span>Quality coffee, Artesian doughnuts</span>, and <span> Catering</span></p>
                <p className='descriptiontext'>Nestled in the heart of 2/118 Church St, Parramatta NSW 2150, Australia, La Cuisine Cafe is your go-to spot for the finest coffee, artisan doughnuts, and mouth-watering catering services. Whether you're here for a quick morning pick-me-up or planning a special event, our team is dedicated to making every moment memorable.</p>
                <button onClick={menu} className='cardbtn'>See our coffee Menu</button>
            </div>
            <div className="flex justify-center md:justify-end her">
                <img src={capachino} alt='coffeeimg' className="max-w-full h-auto"/>
            </div>
        </div>
    </div>
    </div>
  )
}

export default About;
