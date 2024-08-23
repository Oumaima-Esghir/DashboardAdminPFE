import React from "react";

function PartnersPage() {
  const users = [
    {
      photo: "https://www.kharjet.tn/wp-content/uploads/2021/11/La-cantine-Sousse-1-1.jpg",
      username: "Le Bistrot",
      email: "bistrot@gmail.com",
      role: "Partner",
     status: "Active",
    },
    {
      photo: "https://cf.bstatic.com/xdata/images/hotel/square600/191576887.webp?k=7504f24435318e428cdea6efef8d26531ea4650952a6a69a4efc89bd3f849373&o=",
      username: "Sousse Palace",
      email: "Palace@gmail.com",
      role: "Partner",
      status: "Inactive",
    },
    {
      photo: "https://www.kharjet.tn/wp-content/uploads/2023/11/2-24-1536x1536.jpg?k=7504f24435318e428cdea6efef8d26531ea4650952a6a69a4efc89bd3f849373&o=",
      username: "BRUCHETTA",
      email: "BRUCHETTA@gmail.com",
      role: "Partner",
      status: "Active",
    },
    {
      photo: "https://www.marhba.com/images/avis/monastir/lepirate.jpg",
      username: "Le Pirate",
      email: "Le Pirate@gmail.com",
      role: "Partner",
      status: "Active",
    },
  ];

  return (
    <div>
      <div className="overflow-x-auto">
        <h1 class="mb-4 py-4 text-sm text-center font-bold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-3xl ">
          Our
          <span class="ml-2 underline underline-offset-3 decoration-4 decoration-blue-400 ">
            Partenaires
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
                Delete Partner
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

export default PartnersPage;
