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

  const [aiResponse, setAiResponse] = useState("");
  const [loading, setIsLoading] = useState(false);
  const navigate = useNavigate()

  const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

  const handleGenerate = async () => {
    const {name, form, to, budget,friends,category} = formData;

    const prompt = `Generate a travel itinerary for ${name} and ${friends} friends going from ${from} to ${to}. The trip should fall under the ${category} category with a budget of ₹${budget}. Include activities, accommodations, travel mode, and food recommendations.`;

    setIsLoading(true);
    setAiResponse("");

    try {
      const res = await fetch(`https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generativeContent?key=${API_KEY}`,
        {
          method: 'POST',
          headers: {"Content-Type": "applications/json"},
          body: JSON.stringify({
            contents: [
              {
              role: "user",
              parts: [{ Text: prompt}]
              }
            ]
          })
        }
      );
      const data = await res.json();
      const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;
      setAiResponse(text || 'No Response Found')
    } catch (err) {
      console.error(err)
      setAiResponse('Something went wrong.')
    } finally {
      setIsLoading(false)
    }
  } 

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
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-400"
          >
            <option value="">Select Category</option>
            <option value="Nature">Nature</option>
            <option value="Food">Food</option>
            <option value="Hotel">Hotel</option>
            <option value="Monuments">Monuments</option>
            <option value="Cultural">Cultural</option>
          </select>

          <select 
           className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-400"
          >
            <option value="">Select Partner</option>
             <option value="Wife">Wife</option>
             <option value="Family">Family</option>
             <option value="Friend">Friend</option>
             <option value="Solo">Solo</option>
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
