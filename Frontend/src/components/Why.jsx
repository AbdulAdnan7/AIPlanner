import React from 'react'
import { Compass, DollarSign, MapPin, Users } from 'lucide-react'

const WhySection = () => {

   const features = [
    {
      title: 'Smart Itineraries',
      desc: 'AI creates tailored travel plans for your styles, budget, and schedule.',
      icon: <MapPin  className='text-[#8B5CF6]' />
    },
    {
      title: 'Budget Optimizer',
      desc: 'Maximize experiences while keeping costs in check with AI powered savings',
      icon: <DollarSign className='text-[#8B5CF6]'  />
    },
    {
      title: 'Local Insights',
      desc: 'Discover hidden gems curated by AI plus-traveler feedback',
      icon: <Compass className='text-[#8B5CF6]' />
    },
    {
      title: 'Epic Group Trips',
      desc: 'Coordinates with friends, split expenses, and discover exciting groupt activities',
      icon: <Users className='text-[#8B5CF6]' />
    }
   ]

  return (
    <>
    <div className='flex justify-center'>
      <h1 className='text-center text-2xl font-semibold'>Why Choose AI</h1>
    </div>
    <div className='h-screen flex justify-center m-4 items-center'>
    <div className='grid h-full w-full grid-cols-4 grid-rows-4 gap-4'>
     {features.map((feature, index) => (
  <div
    key={index}
    className="col-span-2 lg:col-span-1 row-span-1 bg-slate-50 rounded-3xl p-6 flex flex-col items-start justify-center space-y-3 shadow-lg hover:shadow-xl transition"
  >
    <div className="text-indigo-600">{feature.icon}</div>
    <h3 className="text-lg font-semibold">{feature.title}</h3>
    <p className="text-sm text-gray-700">{feature.desc}</p>
  </div>
))}
    </div>
    </div>
    </>
  )
}

export default WhySection
