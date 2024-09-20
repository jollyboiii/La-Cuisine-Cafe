import React, { useState } from 'react';  // Import useState hook
import { Link } from 'react-router-dom';
import Lacoffelogo from '../Images/LacusineLogo.png';
import '../Css/Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);  


const toggleMenu = () => {
setIsOpen(!isOpen);  
};
const log=()=>{
console.log("clicked");
}

return (
<div>   
    <nav>
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <img src={Lacoffelogo} className="Cusinelogo" alt="La Cuisine Logo"/>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse vistusbtndiv">
        <div className="vistbtnchildiv">
            <button type="button" onClick={log} className=" focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center Visitusbtn">Visit us</button>
        </div>
        <button
            onClick={toggleMenu}  // Attach toggle function to button
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded={isOpen}
        >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
        </button>
        </div>
        <div className={`items-center justify-between ${isOpen ? 'block' : 'hidden'} w-full md:flex md:w-auto md:order-1`} id="navbar-sticky">
        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
            <li>
            <Link to="/" >Home</Link>
            </li>
            <li>
            <Link to="/about" >About Us</Link>
            </li>
            <li>
            <Link to="/Menu" >Menu</Link>
            </li>
            <li>
            <Link to="/catering" >Catering</Link>
            </li>
            <li>
            <Link to="/kitchen" >Rental Kitchen</Link>
            </li>
        </ul>
        </div>
    </div>
    </nav>
</div>
);
}

export default Navbar;
