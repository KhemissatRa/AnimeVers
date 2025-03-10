import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
export default function Nav() {
    const [menuOpen, setMenuOpen] = useState(false);

  return (
<div className='min-h-[100px] flex items-start justify-center p-4'>
    <div className='flex items-center bg-[#181e2b]  shadow-xl w-[800px] border border-black rounded-md md:rounded-md  max-w-[1000px]max-h-[96px] justify-evenly p-[24px] items-center  '>
        
<div className='   flex justify-between  space-x-4  text-white'>
            <h1 className={`font-bold text-white text-xl   ${  menuOpen ? "hidden" : "block"} ` }>Anim<span className="text-red-600">Vers</span></h1>
        <ul  className={` hidden  md:flex jsustify-between items-center space-x-4 text-white`}>
            <li><Link to='/'  >Home</Link></li>
            <li> <Link to='/fav'  >Favorite </Link> <i className="fa-solid fa-heart text-red-600"></i></li>
            <li> <Link to='Resources'  > Contact Us</Link></li>

        </ul>
        <div className='flex flex-col justify-start '>
        <div className="md:hidden   w-full  items-center ">
          <button  onClick={() => setMenuOpen(!menuOpen)}>
            <i className={`fa-solid ${menuOpen ? "fa-times text-red-600" : "fa-bars"} text-2xl`}></i>
          </button>
        </div>
        <ul
        className={`md:hidden   text-xl text-center  space-y-4 py-4 ${
          menuOpen ? "block" : "hidden"
        }`}
      >
         <li><Link to='About' smooth={true} duration={500} className="cursor-pointer">About Us </Link></li>
            <li><Link to='Solution' smooth={true} duration={500} className="cursor-pointer"> Solutions </Link></li>
            <li> <Link to='Testimonials' smooth={true} duration={500} className="cursor-pointer">Testimonials </Link></li>
            <li> <Link to='Resources' smooth={true} duration={500} className="cursor-pointer"> Resources</Link></li>
      </ul>
      </div>
        </div>
        <div className='hidden md:flex space-x-4'>
            <button className='text-white'>Sign In</button>
            <button className='text-white border rounded-md border-[#9333EA] bg-[#9333EA] w-24 h-10' >Login</button>

        </div>
      
    </div>
    
 </div>
  )

}
