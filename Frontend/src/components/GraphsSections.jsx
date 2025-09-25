import React from 'react'
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell
} from 'recharts'

 const growthDataa = [
    { month: 'Jan', itineraries: 20},
    { month: 'FEb', itineraries: 34},
    { month: 'Mar', itineraries: 44},
    { month: 'Apr', itineraries: 65},
    { month: 'Jun', itineraries: 88},
    { month: 'Jul', itineraries: 103},
    { month: 'Aug', itineraries: 114},
    { month: 'Sep', itineraries: 140},
 ]

 const pieData = [
    { name: "Flights", value: 40 },
    { name: "Hotels", value: 30 },
    { name: "Food", value: 20 },
    { name: "Activities", value: 42 },
 ]

const GraphsSection = () => {
  return (
   <section className='mt-42'>
   <div className='flex justify-center text-center'>
 <h1 className='text-4xl font-semibold italic'>Trip Mind Statistics</h1>
   </div>
  
   </section>
  )
}

export default GraphsSection
