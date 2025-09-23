import React from 'react'
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import PaperPlane from './PaperPlaine';
import { NavLink } from 'react-router';





const Home = () => {
  


  return (
    <>
   <section className='h-screen flex mt-16 justify-center p-6 ml-4 md:p-4' >
  <div>
    <h1 className='text-3xl text-center'>Plan Ahead With Ease. Using Our <span className='text-[#4169E1] font-semibold'> AI Trip Planner</span></h1>
    <p className='text-center mt-4 font-semibold ml-4'>Let our AI create a personalized itinerary for your next adventure.</p>
    <div className='flex justify-center items-center mt-4'>

  <NavLink to={'/planTrip'}>
 <button className="bg-[#4169E1] p-4 rounded text-white hover:bg-[#3556c7] transition-colors duration-300">
  Generate Now
</button>
</NavLink>

    </div>

  </div>
  <div>

  </div>
   </section>

{
  /**
   * <section class="h-screen flex items-center justify-center bg-gray-100">
  <div class="text-center">
    <h1 class="text-5xl font-bold mb-4">Welcome to My Website</h1>
    <p class="text-lg text-gray-700">This is the hero section subtitle</p>
  </div>
</section>

   */
}
    </>
  );
};

export default Home;