import CountUp from "react-countup";
import { FaMapMarkedAlt, FaHotel } from "react-icons/fa";

export default function StatsCounter() {
  return (
    <section className="py-12">
      <div className="max-w-5xl mx-auto text-center flex gap-4 justify-evenly">
        <div className="flex items-center justify-center gap-4">
          <FaMapMarkedAlt className="text-5xl text-blue-600" />
          <div>
            <h2 className="text-4xl font-bold text-blue-600">
              <CountUp end={1000} duration={2} />+
            </h2>
            <p className="text-lg font-medium text-blue-600">
              Itineraries Generated
            </p>
          </div>
        </div>
           <div className="flex items-center justify-center gap-4">
          <FaHotel className="text-5xl text-blue-600" />
          <div>
            <h2 className="text-4xl font-bold text-blue-600">
              <CountUp end={50} duration={2} />+
            </h2>
            <p className="text-lg font-medium text-blue-600">
              Destinations
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
