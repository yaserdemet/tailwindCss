import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='flex  border-b border-b-g-500 justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
      <h1 className='w-full text-3xl font-bold text-main'>TailwindCss</h1>
      <ul className='hidden md:flex'>
        <Link to="/">
        <li className='p-4'>Home</li>
        
        </Link>
        <Link to="/other">
        <li className='p-4'>Company</li>
        </Link>
       
        <li className='p-4'>Resources</li>
        <li className='p-4'>About</li>
        <Link to="/contact">
        <li className='p-4'>Contact</li>
        </Link>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>
      <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-main m-4'>REACT.</h1>
          <li className='listBord'>Home</li>
          <li className='listBord'>Company</li>
          <li className='listBord'>Resources</li>
          <li className='listBord'>About</li>
          <li className='listBord'>Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;