import { FaClock, FaMapMarkedAlt, FaMoneyBill, FaSmile } from "react-icons/fa";

const TripComparison = () => {
  return (
    <section className="py-12 px-6">
      <h1 className="text-3xl font-bold text-center mb-10">
        Manual Trip vs <span className="text-blue-600">AI Planned Trip</span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
        {/* Manual Trip Card */}
        <div className="p-6 rounded-xl shadow-lg bg-gradient-to-br from-red-400 to-red-600 text-white space-y-4">
          <h2 className="text-2xl font-extrabold text-center">Manual Planning</h2>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center">
              <FaClock className="mr-2 text-yellow-300" /> Hours of research
            </li>
            <li className="flex items-center">
              <FaMapMarkedAlt className="mr-2 text-yellow-300" /> Missed hidden gems
            </li>
            <li className="flex items-center">
              <FaMoneyBill className="mr-2 text-yellow-300" /> Higher costs
            </li>
            <li className="flex items-center">
              <FaSmile className="mr-2 text-yellow-300" /> Stressful planning
            </li>
          </ul>
        </div>

        {/* VS Divider */}
        <div className="flex justify-center items-center">
          <span className="bg-gray-800 text-white font-bold text-xl px-4 py-2 rounded-full shadow-md">
            VS
          </span>
        </div>

        {/* AI Trip Card */}
        <div className="p-6 rounded-xl shadow-lg bg-gradient-to-br from-blue-500 to-indigo-600 text-white space-y-4">
          <h2 className="text-2xl font-extrabold text-center">AI Trip Planner</h2>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center">
              <FaClock className="mr-2 text-green-300" /> Instant planning
            </li>
            <li className="flex items-center">
              <FaMapMarkedAlt className="mr-2 text-green-300" /> Personalized itineraries
            </li>
            <li className="flex items-center">
              <FaMoneyBill className="mr-2 text-green-300" /> Budget optimized
            </li>
            <li className="flex items-center">
              <FaSmile className="mr-2 text-green-300" /> Stress-free travel
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default TripComparison;
