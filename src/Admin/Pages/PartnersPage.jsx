import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function PartnersPage() {
  const [partners, setPartners] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Updated hook

  useEffect(() => {
    // Fetch partners from the backend
    axios
      .get("http://localhost:3000/admin/partners")
      .then((response) => {
        setPartners(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("There was an error fetching the partners!", error);
        setError("Error fetching partners");
        setLoading(false);
      });
  }, []);

  const handleDelete = (id) => {
    // Handle delete operation
    axios
      .delete(`http://localhost:3000/admin/partners/${id}`)
      .then((response) => {
        setPartners(partners.filter((partner) => partner._id !== id));
      })
      .catch((error) => {
        console.error("There was an error deleting the partner!", error);
      });
  };

  const handleSeeDetails = (id) => {
    // Navigate to the partner detail page
    navigate(`/partners/${id}`); // Updated navigation
  };

  if (loading) return <p className="text-center text-gray-500">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="p-4">
      <div className="overflow-x-auto">
        <h1 className="mb-4 py-4 text-sm text-center font-bold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-3xl">
          Our
          <span className="ml-2 underline underline-offset-3 decoration-4 decoration-blue-400">
            Partners
          </span>
        </h1>
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead>
            <tr>
              <th className="px-6 py-3 bg-gray-100 text-left text-sm font-medium text-gray-700 uppercase tracking-wider">
                Photo
              </th>
              <th className="px-6 py-3 bg-gray-100 text-left text-sm font-medium text-gray-700 uppercase tracking-wider">
                Username
              </th>
              <th className="px-6 py-3 bg-gray-100 text-left text-sm font-medium text-gray-700 uppercase tracking-wider">
                Email
              </th>
              <th className="px-6 py-3 bg-gray-100 text-left text-sm font-medium text-gray-700 uppercase tracking-wider">
                Delete
              </th>
              <th className="px-6 py-3 bg-gray-100 text-left text-sm font-medium text-gray-700 uppercase tracking-wider">
                See Details
              </th>
            </tr>
          </thead>
          <tbody>
            {partners.map((partner) => (
              <tr key={partner._id} className="border-b">
                <td className="px-6 py-4 whitespace-nowrap">
                  <img
                    className="h-10 w-10 rounded-full"
                    src={partner.image || "https://via.placeholder.com/150"} // Use a placeholder if image is missing
                    alt="User"
                  />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {partner.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {partner.email}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button
                    onClick={() => handleDelete(partner._id)}
                    className="text-red-600 hover:text-red-900"
                  >
                    Delete
                  </button>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button
                    onClick={() => handleSeeDetails(partner._id)}
                    className="text-indigo-600 hover:text-indigo-900"
                  >
                    See Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default PartnersPage;
