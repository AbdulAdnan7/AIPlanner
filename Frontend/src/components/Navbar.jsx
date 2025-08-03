import React from 'react';
import { NavLink } from 'react-router-dom';
import { AiFillHome, AiOutlineUser } from 'react-icons/ai';
import { FaPlaneDeparture } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="bg-white fixed bottom-0 md:top-0 md:bottom-auto left-0 w-full z-50 shadow-md py-3 px-4 flex justify-between md:items-center md:justify-between">
      
      <div className="hidden md:flex items-center font-bold text-xl text-purple-600">
        AI-Plan
      </div>

      <div className="flex justify-around md:justify-end gap-12 w-full md:w-auto">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? 'text-purple-600 font-semibold'
              : 'text-gray-500 font-semibold'
          }
        >
          <div className="flex flex-col items-center md:flex-row md:gap-2">
            <AiFillHome size={24} className="md:hidden" />
            <span className="hidden md:inline">Home</span>
          </div>
        </NavLink>

        <NavLink
          to="/planTrip"
          className={({ isActive }) =>
            isActive
              ? 'text-purple-600 font-semibold'
              : 'text-gray-500 font-semibold'
          }
        >
          <div className="flex flex-col items-center md:flex-row md:gap-2">
            <FaPlaneDeparture size={24} className="md:hidden" />
            <span className="hidden md:inline">Plan Trip</span>
          </div>
        </NavLink>

         <NavLink
          to="/planTrip"
          className={({ isActive }) =>
            isActive
              ? 'text-purple-600 font-semibold'
              : 'text-gray-500 font-semibold'
          }
        >
          <div className="flex flex-col items-center md:flex-row md:gap-2">
            <AiOutlineUser size={24} className="md:hidden" />
            <span className="hidden md:inline">Account</span>
          </div>
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
