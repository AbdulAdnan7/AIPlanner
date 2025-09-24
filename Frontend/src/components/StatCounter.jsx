import CountUp from "react-countup";
import { FaMapMarkedAlt } from "react-icons/fa";

export default function StatsCounter() {
  return (
    <section className="py-12">
      <div className="max-w-5xl mx-auto text-center">
        <div className="flex items-center justify-center gap-4">
          <FaMapMarkedAlt className="text-5xl text-blue-600" />
          <div>
            <h2 className="text-4xl font-bold text-blue-600">
              <CountUp end={100} duration={2} />+
            </h2>
            <p className="text-lg font-medium text-blue-600">
              Itineraries Generated
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
