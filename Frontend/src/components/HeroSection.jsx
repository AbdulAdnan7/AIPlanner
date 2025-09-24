import React from 'react'
import { NavLink } from 'react-router';
import { FaMapMarkedAlt, FaPlane, 
FaUtensils, FaLandmark } from 'react-icons/fa';
import Logo from '../../public/Logo.png'
import ScrollReveal from './ScrollReveal';
import StatsCounter from './StatCounter';


const Home = () => {
  


  return (
    <>
   <section className='h-[80vh] flex mt-16 justify-center p-6 ml-4 md:p-4' >
  <div>
<h1 className="text-3xl md:text-4xl text-center font-bold flex flex-wrap justify-center items-center gap-2">
  Plan Ahead With Ease. Using Our 
  <span className="text-[#4169E1] flex items-center gap-2">
    AI Trip Planner
    <img src={Logo} alt="Logo" className="h-12 w-14" />
  </span>
</h1>


    <p className='text-center mt-4 font-semibold ml-4'>Let our AI create a personalized itinerary for your next adventure.</p>
    <div className='flex justify-center items-center mt-4'>

  <NavLink to={'/planTrip'}>
 <button className="bg-[#4169E1] p-4 rounded text-white hover:bg-[#3556c7] transition-colors duration-300">
  Generate Now
</button>
</NavLink>

  </div>
  <div>
    <StatsCounter />

  </div>
  <div className='flex text-center justify-center'>
  <h1 className='text-4xl italic font-semibold'>What AI Can Do</h1>
  </div>
<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 mt-10 gap-4'>

  <div className='col-span-2 bg-[#4169E1] h-40 rounded-lg shadow-md hover:scale-105 transform transition-all duration-300 p-4 text-white flex flex-col justify-center items-start'>
    <FaMapMarkedAlt className='text-3xl mb-2'/>
    <h3 className='font-bold text-lg'>Personalized Itineraries</h3>
    <p className='text-sm'>AI creates custom travel plans based on your preferences.</p>
  </div>


  <div className='col-span-2 bg-[#4169E1]/90 h-40 rounded-lg shadow-md hover:scale-105 transform transition-all duration-300 p-4 text-white flex flex-col justify-center items-start'>
    <FaPlane className='text-3xl mb-2'/>
    <h3 className='font-bold text-lg'>Flight & Hotel Suggestions</h3>
    <p className='text-sm'>Get AI-recommended flights and hotels for your destination.</p>
  </div>

  <div className='col-span-2 bg-[#4169E1]/90 h-40 rounded-lg shadow-md hover:scale-105 transform transition-all duration-300 p-4 text-white flex flex-col justify-center items-start'>
    <FaUtensils className='text-3xl mb-2'/>
    <h3 className='font-bold text-lg'>Top Restaurants</h3>
    <p className='text-sm'>Discover popular local eateries and hidden gems easily.</p>
  </div>

  <div className='col-span-2 bg-[#4169E1]/90 h-40 rounded-lg shadow-md hover:scale-105 transform transition-all duration-300 p-4 text-white flex flex-col justify-center items-start'>
    <FaLandmark className='text-3xl mb-2'/>
    <h3 className='font-bold text-lg'>Points of Interest</h3>
    <p className='text-sm'>Explore attractions and activities curated by AI for your trip.</p>
  </div>
</div>






    </div>
   </section>

   <section className='min-h-screen'>

   </section>
    </>
  );
};

export default Home;