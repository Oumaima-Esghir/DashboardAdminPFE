import React from "react";

function PublicationsPage() {
  const publications = [
    {
      pubImage: "https://www.kharjet.tn/wp-content/uploads/2021/11/La-cantine-Sousse-1-1.jpg", // Placeholder image URL
      title: "Le Bistrot",
      description: "Le Bistrot sousse is a cool place",
      address: "Sousse",
      rating: 4.5,
      category: "restaurant",
      state: "Promo", // Could be 'Promo' or 'Regular'
      percentage: "20%",
      isValidated: true,
      postedDate: "2024-08-01",
      author: "Bistrot",
    },
    {
      pubImage: "https://cf.bstatic.com/xdata/images/hotel/square600/191576887.webp?k=7504f24435318e428cdea6efef8d26531ea4650952a6a69a4efc89bd3f849373&o=",
      title: "Sousse Palace Hotel & Spa",
      description: "Sousse Palace Hotel & Spa is located in the center of Sousse near the Medina, with direct access to a private beach.",
      address: "Sousse",
      rating: 5,
      category: "Hotel",
      state: "Offre",
      //percentage: "0%",
      isValidated: false,
      postedDate: "2024-07-25",
      author: "SoussePalace",
    },
    {
      pubImage: "https://www.marhba.com/images/avis/monastir/lepirate.jpg",
      title: "Le Pirate",
      description: "Le pirate est le restaurant le plus connu à Monastir et certainement le meilleur de toute la région du sahel pour sa spécialité fruits de mer.",
      address: "Monastir",
      rating: 5,
      category: "Restaurant",
      state: "Offre",
      //percentage: "0%",
      isValidated: true,
      postedDate: "2024-07-25",
      author: "SoussePalace",
    },
    {
      pubImage: "https://image.resabooking.com/images/image_panoramique/El_Mouradi_Mahdia_2.jpg",
      title: "El Mouradi Mahdia",
      description: "Top Promo in Spa",
      address: "Mahdia",
      rating: 4.1,
      category: "Hotel",
      state: "Promo",
      percentage: "30%",
      isValidated: false,
      postedDate: "2024-07-25",
      author: "ElMouradi",
    },
    {
      pubImage: "https://www.kharjet.tn/wp-content/uploads/2023/11/2-24-1536x1536.jpg?k=7504f24435318e428cdea6efef8d26531ea4650952a6a69a4efc89bd3f849373&o=",
      title: "BRUCHETTA",
      description: "Promotion in pasta",
      address: "Sousse",
      rating: 5,
      category: "Restaurant",
      state: "Promo",
      percentage: "25%",
      isValidated: true,
      postedDate: "2024-07-25",
      author: "SoussePalace",
    },
   
    // Additional publication objects...
  ];

  return (
    <div className="p-4">
      <h1 className="mb-4 py-4 text-sm text-center font-bold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-3xl">
        Our
        <span className="ml-2 underline underline-offset-3 decoration-4 decoration-blue-400">
          Publications
        </span>
      </h1>

      <table className="w-full bg-white shadow-md rounded-lg">
        <thead>
          <tr>
            <th className="px-4 py-2 bg-gray-100 text-left text-sm font-medium text-gray-700 uppercase tracking-wider">
              #
            </th>
            <th className="px-4 py-2 bg-gray-100 text-left text-sm font-medium text-gray-700 uppercase tracking-wider">
              Image
            </th>
            <th className="px-4 py-2 bg-gray-100 text-left text-sm font-medium text-gray-700 uppercase tracking-wider">
              Title
            </th>
            <th className="px-4 py-2 bg-gray-100 text-left text-sm font-medium text-gray-700 uppercase tracking-wider">
              Description
            </th>
            <th className="px-4 py-2 bg-gray-100 text-left text-sm font-medium text-gray-700 uppercase tracking-wider">
              Address
            </th>
            <th className="px-4 py-2 bg-gray-100 text-left text-sm font-medium text-gray-700 uppercase tracking-wider">
              Rating
            </th>
            <th className="px-4 py-2 bg-gray-100 text-left text-sm font-medium text-gray-700 uppercase tracking-wider">
              Category
            </th>
            <th className="px-4 py-2 bg-gray-100 text-left text-sm font-medium text-gray-700 uppercase tracking-wider">
              State
            </th>
            <th className="px-4 py-2 bg-gray-100 text-left text-sm font-medium text-gray-700 uppercase tracking-wider">
              Percentage
            </th>
            <th className="px-4 py-2 bg-gray-100 text-left text-sm font-medium text-gray-700 uppercase tracking-wider">
              Validated
            </th>
          </tr>
        </thead>
        <tbody>
          {publications.map((publication, index) => (
            <tr key={index} className="border-b">
              <td className="px-4 py-2 text-sm text-gray-900">{index + 1}</td>
              <td className="px-4 py-2 whitespace-nowrap">
                <img
                  className="h-16 w-16 rounded"
                  src={publication.pubImage}
                  alt={publication.title}
                />
              </td>
              <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">
                {publication.title}
              </td>
              <td className="px-4 py-2 text-sm text-gray-900">
                {publication.description}
              </td>
              <td className="px-4 py-2 text-sm text-gray-900">
                {publication.address}
              </td>
              <td className="px-4 py-2 text-sm text-gray-900">
                {publication.rating}
              </td>
              <td className="px-4 py-2 text-sm text-gray-900">
                {publication.category}
              </td>
              <td className="px-4 py-2 text-sm text-gray-900">
                {publication.state}
              </td>
              <td className="px-4 py-2 text-sm text-gray-900">
                {publication.percentage}
              </td>
              <td className="px-4 py-2 text-sm text-gray-900">
                <label className="inline-flex relative items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={publication.isValidated}
                    readOnly
                  />
                  <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PublicationsPage;
