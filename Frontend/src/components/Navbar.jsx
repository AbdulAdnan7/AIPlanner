import React from 'react';
import Logo from '../../public/Logo.png'
import { NavLink } from 'react-router-dom';
import { AiFillHome, AiOutlineUser } from 'react-icons/ai';
import { FaPlaneDeparture } from 'react-icons/fa';

const Navbar = () => {
  return (
  <nav className='flex items-center justify-between bg-[rgb(230,230,230)] m-2'>

   <div className='flex'>
    <NavLink to={'/'}>
    <img src={Logo}
    width={50}
    height={50}
    className='m-8'
    alt="Logo" />
    </NavLink>
   </div>
 <div className='flex items-center gap-6'>
  <NavLink
    to='/'
    className={({ isActive }) =>
      isActive
        ? 'text-[#4169E1] font-semibold'
        : 'text-gray-600 font-semibold'
    }
  >
    Home
  </NavLink>

  <NavLink
    to='/planTrip'
    className={({ isActive }) =>
      isActive
        ? 'text-[#4169E1] font-semibold'
        : 'text-gray-600 font-semibold'
    }
  >
    Plan Trip
  </NavLink>

  <NavLink
    to='/results'
    className={({ isActive }) =>
      isActive
        ? 'text-[#4169E1] font-semibold'
        : 'text-gray-600 font-semibold'
    }
  >
    Results
  </NavLink>

  <NavLink
    to='/login'
    className='bg-[#4169E1] text-white font-semibold px-4 py-2 rounded'
  >
    Login
  </NavLink>
</div>


  </nav>
  );
};

export default Navbar;
