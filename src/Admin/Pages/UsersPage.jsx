import React from "react";

function UsersPage() {
  const users = [
    {
      photo: "https://images.pexels.com/photos/1468379/pexels-photo-1468379.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      username: "Eya ",
      email: "Eya@gmail.com",
      role: "Explorateur",
      status: "Active",
    },
    {
      photo: "https://images.pexels.com/photos/4781443/pexels-photo-4781443.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      username: "Sara",
      email: "sara@gmail.com",
      role: "Explorateur",
      status: "Inactive",
    },
    {
      photo: "https://images.pexels.com/photos/810775/pexels-photo-810775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      username: "Amine",
      email: "Amine@gmail.com",
      role: "Explorateur",
      status: "Active",
    },
    {
      photo: "https://images.pexels.com/photos/4919373/pexels-photo-4919373.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      username: "linda",
      email: "linda@gmail.com",
      role: "Explorateur",
      status: "Inactive",
    },
  ];

  return (
    <div>
      <div className="overflow-x-auto">
        <h1 class="mb-4 py-4 text-sm text-center font-bold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-3xl ">
          Our
          <span class="ml-2 underline underline-offset-3 decoration-4 decoration-blue-400 ">
            Explorateurs
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
                Delete User
              </th>
            
              <th className="px-6 py-3 bg-gray-100 text-left text-sm font-medium text-gray-700 uppercase tracking-wider">
                Settings
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index} className="border-b">
                <td className="px-6 py-4 whitespace-nowrap">
                  <img
                    className="h-10 w-10 rounded-full"
                    src={user.photo}
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
                  <a href="#" className="text-red-600 hover:text-red-900">
                    Delete
                  </a>
                </td>
              
                <td className="px-10 py-4 whitespace-nowrap text-sm font-medium">
                  <a href="#" className="text-indigo-600 hover:text-indigo-900">
                    Edit
                  </a>
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
