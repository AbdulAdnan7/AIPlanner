import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

const Result = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const itinerary = location.state?.itinerary;

  React.useEffect(() => {
    if (!itinerary) {
      navigate('/planTrip');
    }
  }, [itinerary, navigate]);

  if (!itinerary) return null;

  return (
    <div className="max-w-3xl mx-auto p-6  mt-20 mb-10">
      <h2 className="text-2xl font-bold mb-4 text-purple-700">Your Trip Itinerary</h2>
      <div className="prose prose-lg max-w-none">
        <ReactMarkdown>{itinerary}</ReactMarkdown>
      </div>
    </div>
  );
};

export default Result;
