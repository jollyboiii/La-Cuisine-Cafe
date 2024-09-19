import React from 'react'
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import Aboutcar1 from './Aboutcar1'
import Aboutcard2 from './Aboutcard2'
import visionimage from '../Images/aboutimage1.png'
import missionimage from '../Images/aboutimage2.png';
import '../Css/product.css'

function VisionCoursel() {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
  return (
    <Carousel responsive={responsive}>
        <div className='card1'>
        <Aboutcard2  title="Our Mission" description="Our mission is simple: to bring joy to our customers through every cup of coffee, every bite of a doughnut, and every catered event. We are committed to using the finest ingredients, sourcing locally whenever possible, and creating an environment where everyone feels welcome." images={missionimage}/>
        </div>
        <div className='card2'>
        <Aboutcar1 title="Our Vision" description="Our vision is to be more than just a café. We aim to be a community hub where people come together to relax, connect, and celebrate. Whether you’re stopping by for your morning coffee or hosting a special event with our catering services, we want every experience at La Cuisine Cafe to be memorable." images={visionimage}/>
        </div>
    </Carousel>
  )
}

export default VisionCoursel