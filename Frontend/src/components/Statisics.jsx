import React from 'react'

const Statisics = () => {
  return (
   <section className='min-h-screen'>
  <div className='flex justify-center'>
    <h1 className='text-3xl italic font-bold'>TripMind Statistics</h1>
  </div>
<div className="flex flex-wrap justify-start gap-6 p-4 ml-20">
  {/* Card 1 */}
  <div className="bg-blue-600 w-[680px] h-90 rounded-lg flex items-center justify-center text-white">
    <h1>Hello From Dev</h1>
  </div>

  {/* Card 2 */}
  <div className="bg-blue-600 w-[680px] h-90 rounded-lg flex items-center justify-center text-white">
    <h1>Card 2</h1>
  </div>

  {/* Card 3 */}
  <div className="bg-white shadow-2xl border border-gray-700 w-[680px] h-90 rounded-lg flex items-center justify-center text-white">
    <h1>Card 3</h1>
  </div>

  {/* Card 4 */}
  <div className="bg-blue-600 w-[680px] h-90 rounded-lg flex items-center justify-center text-white">
    <h1>Card 4</h1>
  </div>
</div>


</section>
  )
}

export default Statisics