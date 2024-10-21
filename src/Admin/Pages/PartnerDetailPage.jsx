import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import backgroundImage from '../pics/bg.png';
import axios from "axios";

function PartnerDetailPage() {
  const { partnerId } = useParams(); // Get the partnerId from the URL
  const [partner, setPartner] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch the partner details from the backend using the partnerId
    axios
      .get(`http://localhost:3000/admin/partners/${partnerId}`)
      .then((response) => {
        setPartner(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError("Error fetching partner details");
        setLoading(false);
      });
  }, [partnerId]);

  if (loading) return <p className="text-center text-gray-500">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  // Construct the image URL
  const partnerImageUrl = partner?.image
    ? `${process.env.REACT_APP_API_URL}/images/${partner.image}`
    : "https://via.placeholder.com/150";

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="max-w-2xl w-full bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-blue-600 p-4"
          style={{
            backgroundColor: '#93C2E5',
            borderColor: '#93C2E5',
          }}>
          <h1 className="w-full px-4 py-2 text-white text-center font-bold">
            Partner Details
          </h1>
        </div>
        <div className="p-6">
          <div className="mb-4">
            <img
              className="h-20 w-20 rounded-full mx-auto mb-4"
              src={partnerImageUrl}
              alt="Partner"
            />
          </div>
          <div className="mb-4">
            <p className="text-gray-700 font-semibold">Name:</p>
            <p className="text-gray-900">{partner.name}</p>
          </div>
          <div className="mb-4">
            <p className="text-gray-700 font-semibold">Email:</p>
            <p className="text-gray-900">{partner.email}</p>
          </div>
          <div className="mb-4">
            <p className="text-gray-700 font-semibold">Address:</p>
            <p className="text-gray-900">{partner.adress}</p>
          </div>
          {/* Add more partner details as needed */}
        </div>
      </div>
    </div>
  );
}

export default PartnerDetailPage;
