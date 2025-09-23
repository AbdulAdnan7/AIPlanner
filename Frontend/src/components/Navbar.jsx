import React from 'react';
import Logo from '../../public/Logo.png'
import { NavLink } from 'react-router-dom';


const Navbar = () => {
  return (
  <nav className='flex items-center justify-between  m-2'>

   <div className='flex'>
    <NavLink to={'/'}>
    <img src={Logo}
    width={50}
    height={50}
    className='m-8'
    alt="Logo" />
    </NavLink>
   </div>
 <div className='items-center gap-6 hidden md:flex'>
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
