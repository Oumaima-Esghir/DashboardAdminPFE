import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';

function UsersPage() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  // Fetch all users from the backend when the component mounts
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/admin/users`)
      .then(response => {
        setUsers(response.data);  // Set the fetched users in the state
      })
      .catch(error => {
        setError("There was an error fetching the users!");
        console.error(error);
      });
  }, []);

  // Handle user deletion
  const handleDelete = async (userId) => {
    try {
      await axios.delete(`${process.env.REACT_APP_API_URL}/admin/users/delete/${userId}`);
      setUsers(users.filter(user => user._id !== userId));  // Remove the deleted user from the state
      alert("User deleted successfully!");
    } catch (error) {
      console.error("There was an error deleting the user!", error);
      alert(`Failed to delete the user: ${error.response?.data?.message || error.message}`);
    }
  };

  return (
    <div>
      <div className="overflow-x-auto">
        <h1 className="mb-4 py-4 text-sm text-center font-bold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-3xl">
          Our
          <span className="ml-2 underline underline-offset-3 decoration-4 decoration-blue-400">
            Explorateurs
          </span>
        </h1>
        {error && <p className="text-red-500">{error}</p>}  {/* Display error message if any */}
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
                Delete User
              </th>
              <th className="px-6 py-3 bg-gray-100 text-left text-sm font-medium text-gray-700 uppercase tracking-wider">
                See Details
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id} className="border-b">
                <td className="px-6 py-4 whitespace-nowrap">
                  <img
                    className="h-10 w-10 rounded-full"
                    src={`${process.env.REACT_APP_API_URL}/images${user.image}` ||  "https://via.placeholder.com/150"}
                    alt="User"
                  />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {user.username}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {user.email}
                </td>
                <td className="px-10 py-4 whitespace-nowrap text-sm font-medium">
                  <button onClick={() => handleDelete(user._id)} className="text-red-600 hover:text-red-900">
                    Delete
                  </button>
                </td>
                <td className="px-10 py-4 whitespace-nowrap text-sm font-medium">
                  <Link to={`/users/${user._id}`} className="text-indigo-600 hover:text-indigo-900">
                    See Details
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UsersPage;
