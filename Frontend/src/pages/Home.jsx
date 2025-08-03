import React from 'react'

const Home = () => {
  return (
    <main className="h-screen flex bg-gradient-to-b from-white to-purple-200">
      <div className="px-8 mt-20 md:mt-30 space-y-4">
      <h1 className='text-4xl font-semibold'>
      Your Personal AI Trip Planner
      </h1>
      <p className='text-1xl'>Plan your adventure effortesly with the power of AI</p>
      <div className='gap-4 flex mt-2'>
        <button className='bg-purple-600 px-4 py-2 text-white rounded'>Get Started</button>
        <button className='border px-4 border-purple-900 text-purple-600'>Details</button>
      </div>
      </div>
    </main>
  )
}

export default Home
