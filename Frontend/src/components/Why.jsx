import React from 'react'
import { Compass, DollarSign, MapPin, Users } from 'lucide-react'

const WhySection = () => {
  const features = [
    {
      title: 'Smart Itineraries',
      desc: 'AI creates tailored travel plans for your styles, budget, and schedule.',
      icon: <MapPin className='text-[#8B5CF6]' />
    },
    {
      title: 'Budget Optimizer',
      desc: 'Maximize experiences while keeping costs in check with AI powered savings',
      icon: <DollarSign className='text-[#8B5CF6]' />
    },
    {
      title: 'Local Insights',
      desc: 'Discover hidden gems curated by AI plus-traveler feedback',
      icon: <Compass className='text-[#8B5CF6]' />
    },
    {
      title: 'Epic Group Trips',
      desc: 'Coordinates with friends, split expenses, and discover exciting group activities',
      icon: <Users className='text-[#8B5CF6]' />
    }
  ]

  return (
    <>
      <div className='flex justify-center mt-4'>
        <h1 className='text-center text-2xl font-semibold'>Why we should Use</h1>
      </div>
      <div className='flex justify-center m-4 mt-2'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full'>
          {features.map((feature, index) => (
            <div
              key={index}
              className='bg-slate-50 p-6 flex flex-col items-start justify-center space-y-3 shadow-lg hover:shadow-xl transition rounded-xl'
            >
              <div className='text-purple-600'>{feature.icon}</div>
              <h3 className='text-lg font-semibold'>{feature.title}</h3>
              <p className='text-sm text-gray-700'>{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default WhySection
