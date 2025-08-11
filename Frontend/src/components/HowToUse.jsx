import { Edit, MousePointerClick, Notebook, Sparkles } from 'lucide-react'
import React from 'react'

const HowToUse = () => {
  const Guidance = [
    {
      title: 'Click the "Plan Trip" button',
      icon: <MousePointerClick />
    },
    {
      title: 'Enter your trip details',
      icon: <Edit />
    },
    {
      title: 'AI (Gemini) generates itinerary',
      icon: <Sparkles />
    },
    {
      title: 'View your trip results',
      icon: <Notebook />
    }
  ]

  return (
    <>
      <div className='flex justify-center mt-6'>
        <h1 className='text-center text-2xl font-semibold'>How To Use</h1>
      </div>
      <div className='flex justify-center m-4 mt-2'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full'>
          {Guidance.map((guide, index) => (
            <div
              key={index}
              className='bg-slate-50 p-6 flex flex-col items-start justify-center space-y-3 shadow-lg hover:shadow-xl transition rounded-xl'
            >
              <div className='text-purple-600'>{guide.icon}</div>
              <h3 className='text-lg font-semibold'>{guide.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default HowToUse
