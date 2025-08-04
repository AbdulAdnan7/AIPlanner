import React, { useState } from 'react'
import { useNavigate } from 'react-router';

const Trip = () => {
  const [formData, setFormData] = useState({
    name: '',
    from: '',
    to: '',
    category: '',
    friends: '',
    budget: '',
  })

  const [loading, setIsLoading] = useState(false);
  const navigate = useNavigate()

 const handleSubmit = (e) => {
  e.preventDefault()
  setIsLoading(true)
 }

 const handleChange = (e) => {
  setFormData({...formData, [e.target.name] : e.target.value})
 }

  return (
    <section className='flex justify-center items-center mt-20'>
    <div className="min-h-screen flex items-center justify-center px-4 py-10">
      <form
      onClick={handleSubmit}
      className="bg-white rounded-2xl shadow-xl w-full max-w-lg p-6 sm:p-10 space-y-6">
        <h2 className="text-3xl font-bold text-center text-purple-600">
          Plan Your Trip
        </h2>

        <div className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
          />

          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              placeholder="From"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-400"
            />
            <input
              type="text"
              placeholder="To"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-400"
            />
            
          </div>

          <select
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-400"
          >
            <option value="">Select Category</option>
            <option value="Nature">Nature</option>
            <option value="Food">Food</option>
            <option value="Hotel">Hotel</option>
            <option value="Monuments">Monuments</option>
            <option value="Cultural">Cultural</option>
          </select>

            <input
              type="text"
              placeholder="Friends"
               className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-400"
            />

          <input
            type="number"
            placeholder="Budget (e.g., ₹50000)"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-400"
          />
         
        </div>

        <button
          type="submit"
          className="w-full bg-purple-500 text-white font-medium py-2 rounded-md hover:bg-purple-600 transition duration-200"
        >
          Plan Trip
        </button>
      </form>
    </div>

    </section>
  )
}

export default Trip
