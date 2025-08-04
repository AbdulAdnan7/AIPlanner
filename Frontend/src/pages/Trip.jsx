import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Result from './Result';

const Trip = () => {
  const [formData, setFormData] = useState({
    name: '',
    from: '',
    to: '',
    category: '',
    people: '',
    partners: '',
    budget: '',
    days: '',
  })

  const [aiResponse, setAiResponse] = useState("");
  const [loading, setIsLoading] = useState(false);
  const navigate = useNavigate()

  const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

  const handleGenerate = async () => {
    const { name, from, to, days, budget, people, partners, category } = formData;

    const prompt = `Generate a ${days}-day travel itinerary for ${name} traveling with ${partners}${people ? ` and ${people}` : ''}, going from ${from} to ${to}. The trip should fall under the ${category} category with a budget of ₹${budget}. Include activities, accommodations, travel mode, and food recommendations.`;


    setIsLoading(true);
    setAiResponse("");

    try {
      const res = await fetch(`https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent?key=${API_KEY}`,
        {
          method: 'POST',
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [
              {
                role: "user",
                parts: [{ text: prompt }]
              }
            ]
          })
        }
      );
      const data = await res.json();
      const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;

      const finalItinerary = text || 'No Response Found';

      await fetch('http://localhost:5000/api/itinerary', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          result: finalItinerary,
          createdAt: new Date().toISOString()
        })
      })
      navigate('/trip-result', {
        state: { itinerary: finalItinerary }
      })
      console.log("Navigating to result with: ", finalItinerary)
    } catch (err) {
      console.error(err)
      setAiResponse('Something went wrong.')
    } finally {
      setIsLoading(false)
    }
  }



  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    handleGenerate()
  }

  return (
    <>
      <section className='flex justify-center items-center mt-20'>
        <div className="min-h-screen flex items-center justify-center px-4 py-10">
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl shadow-xl w-full max-w-lg p-6 sm:p-10 space-y-6">
            <h2 className="text-3xl font-bold text-center text-purple-600">
              Plan Your Trip
            </h2>

            <div className="space-y-4">
              <input
                name='name'
                type="text"
                required
                onChange={handleChange}
                value={formData.name}
                placeholder="Your Name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
              />

              <input
                type="number"
                name="days"
                required
                placeholder="Number of Days"
                onChange={handleChange}
                value={formData.days}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-400"
              />

              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  name='from'
                  type="text"
                  required
                  onChange={handleChange}
                  value={formData.from}
                  placeholder="From"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-400"
                />
                <input
                  name='to'
                  type="text"
                  placeholder="To"
                  required
                  onChange={handleChange}
                  value={formData.to}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-400"
                />

              </div>

              <select
                onChange={handleChange}
                value={formData.category}
                name='category'
                required
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
                name='partners'
                required
                onChange={handleChange}
                value={formData.partners}
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
                name='people'
                required
                placeholder="People"
                onChange={handleChange}
                value={formData.people}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-400"
              />

              <input
                type="number"
                name='budget'
                required
                onChange={handleChange}
                value={formData.budget}
                placeholder="Budget (e.g., ₹50000)"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-400"
              />

            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-purple-500 text-white font-medium py-2 rounded-md hover:bg-purple-600 transition duration-200"
            >
              {loading ? 'Generating' : 'Generate Itenerary'}
            </button>
          </form>
        </div>


      </section>

    </>
  )
}

export default Trip
