import React, { useEffect, useState } from 'react';
import '../Css/Herosectiona.css';
import { useNavigate } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

function HerosectionA(props) {
  const navigate=useNavigate();
  const menu=()=>{
    navigate('/Menu');
  }
 

  const [isMobile, setIsMobile] = useState(window.innerWidth < 700); // Set threshold as needed

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 900);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='herosectionAmain'>
      <div className="coffebeans1"></div>
      <div className="container mx-auto p-3">
        <div className={`textgap grid gap-12 ${!isMobile && props.showimage ? 'grid-cols-2' : 'grid-cols-1'}`}>
          <div className='herotext'>
            <h1>{props.heading} <span>{props.span}</span></h1>
            <p className={`${!props.showimage || isMobile ? 'small-width-description' : ''}`}>
              {props.description}
            </p>
            <div className="herobtn">
              {props.showaboutbtn && (
                <>
                  <button onClick={menu} className='menubtn'>Menu</button>
                  <button className='locationbtn'><Link smooth to="/#location" className='location-link'>Our Location</Link></button>
                </>
              )}
              {props.showmenubtn && <button className='visitbtn'><Link smooth to="/about#VisitUS" className='location-link'>Visit Us</Link></button>}
            </div>
          </div>
          {props.showimage && !isMobile && (
            <div className="heroimage">
              <img src={props.image} alt="heroimage"/>
            </div>
          )}
        </div>
      </div>
      <div className="coffebeans2"></div>
    </div>
  );
}

export default HerosectionA;
