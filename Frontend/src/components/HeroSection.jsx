import React from 'react'
import { NavLink } from 'react-router';
import { FaMapMarkedAlt, FaPlane, 
FaUtensils, FaLandmark } from 'react-icons/fa';
import Logo from '../../public/Logo.png'
import ScrollReveal from './ScrollReveal';
import StatsCounter from './StatCounter';
import GraphsSection from './GraphsSections';
import Statisics from './Statisics';


const Home = () => {
  


  return (
    <>
   <section className='h-[80vh] flex mt-16 justify-center p-6 ml-4 md:p-4 ' >
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

 <div className='col-span-2 w-full sm:w-[50vh] md:w-[44vh] lg:w-[80vh] h-[44vh] rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 shadow-lg hover:scale-105 hover:shadow-2xl transform transition-all duration-300 p-6 flex flex-col justify-start items-start space-y-4 border border-white/20'>
  <FaMapMarkedAlt className='text-4xl text-white mb-2 drop-shadow-lg'/>
  <h3 className='font-extrabold text-xl text-white'>Personalized Itineraries</h3>
  <h4 className='text-sm font-semibold text-white/90'>Your Trip, Your Way</h4>
  <p className='text-sm text-white/80'>
    AI creates custom travel plans tailored to your preferences, interests, and schedule, making every trip seamless and memorable.
  </p>
  <ul className='space-y-1'>
    <li className='flex items-center text-white/90 text-sm'>
      <span className='mr-2 text-yellow-300'>🗓️</span> Day-by-Day Plans
    </li>
    <li className='flex items-center text-white/90 text-sm'>
      <span className='mr-2 text-yellow-300'>📍</span> Must-See Spots
    </li>
    <li className='flex items-center text-white/90 text-sm'>
      <span className='mr-2 text-yellow-300'>🍴</span> Food & Activity Suggestions
    </li>
    <li className='flex items-center text-white/90 text-sm'>
      <span className='mr-2 text-yellow-300'>⭐</span> Personalized Recommendations
    </li>
  </ul>
</div>



  <div className='col-span-2 w-full sm:w-[50vh] md:w-[44vh] lg:w-[80vh] h-[44vh] rounded-xl bg-gradient-to-br from-teal-400 to-blue-500 shadow-lg hover:scale-105 hover:shadow-2xl transform transition-all duration-300 p-6 flex flex-col justify-start items-start space-y-4 border border-white/20'>
  <FaPlane className='text-4xl text-white mb-2 drop-shadow-lg'/>
  <h3 className='font-extrabold text-xl text-white'>Flight & Hotel Suggestions</h3>
  <h4 className='text-sm font-semibold text-white/90'>Travel Smarter with AI</h4>
  <p className='text-sm text-white/80'>
    Get AI-recommended flights and hotels tailored to your destination, budget, and travel preferences for a hassle-free trip.
  </p>
  <ul className='space-y-1'>
    <li className='flex items-center text-white/90 text-sm'>
      <span className='mr-2 text-yellow-300'>✈️</span> Best Flight Deals
    </li>
    <li className='flex items-center text-white/90 text-sm'>
      <span className='mr-2 text-yellow-300'>🏨</span> Top-Rated Hotels
    </li>
    <li className='flex items-center text-white/90 text-sm'>
      <span className='mr-2 text-yellow-300'>💰</span> Budget-Friendly Options
    </li>
    <li className='flex items-center text-white/90 text-sm'>
      <span className='mr-2 text-yellow-300'>⭐</span> Personalized Suggestions
    </li>
  </ul>
</div>


  <div className='col-span-2 w-full sm:w-[50vh] md:w-[44vh] lg:w-[80vh] h-[44vh] rounded-xl bg-gradient-to-br from-yellow-400 to-orange-500 shadow-lg hover:scale-105 hover:shadow-2xl transform transition-all duration-300 p-6 flex flex-col justify-start items-start space-y-4 border border-white/20'>
  <FaUtensils className='text-4xl text-white mb-2 drop-shadow-lg'/>
  <h3 className='font-extrabold text-xl text-white'>Top Restaurants</h3>
  <h4 className='text-sm font-semibold text-white/90'>Savor the Best Local Flavors</h4>
  <p className='text-sm text-white/80'>
    Discover popular local eateries and hidden gems curated by AI for an unforgettable culinary experience.
  </p>
  <ul className='space-y-1'>
    <li className='flex items-center text-white/90 text-sm'>
      <span className='mr-2 text-red-300'>🍴</span> Fine Dining
    </li>
    <li className='flex items-center text-white/90 text-sm'>
      <span className='mr-2 text-red-300'>🍔</span> Street Food Favorites
    </li>
    <li className='flex items-center text-white/90 text-sm'>
      <span className='mr-2 text-red-300'>🥗</span> Healthy & Vegan Options
    </li>
    <li className='flex items-center text-white/90 text-sm'>
      <span className='mr-2 text-red-300'>🍣</span> Hidden Gems
    </li>
  </ul>
</div>


<div className='col-span-2 w-full sm:w-[50vh] md:w-[44vh] lg:w-[80vh] h-[44vh] rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 shadow-lg hover:scale-105 hover:shadow-2xl transform transition-all duration-300 p-6 flex flex-col justify-start items-start space-y-4 border border-white/20'>
  <FaLandmark className='text-4xl text-white mb-2 drop-shadow-lg'/>
  <h3 className='font-extrabold text-xl text-white'>Points of Interest</h3>
  <h4 className='text-sm font-semibold text-white/80'>Discover Must-See Attractions</h4>
  <p className='text-sm text-white/90'>
    AI curates the best attractions, landmarks, and activities personalized for your trip. Explore hidden gems, iconic spots, and experiences tailored to your interests.
  </p>
  <ul className='space-y-1'>
    <li className='flex items-center text-white/90 text-sm'>
      <span className='mr-2 text-yellow-300'>★</span> Iconic Landmarks
    </li>
    <li className='flex items-center text-white/90 text-sm'>
      <span className='mr-2 text-yellow-300'>★</span> Local Experiences
    </li>
    <li className='flex items-center text-white/90 text-sm'>
      <span className='mr-2 text-yellow-300'>★</span> Family-Friendly Spots
    </li>
    <li className='flex items-center text-white/90 text-sm'>
      <span className='mr-2 text-yellow-300'>★</span> Adventure Activities
    </li>
  </ul>
</div>



</div>






    </div>

    
   </section>

  

    </>
  );
};

export default Home;