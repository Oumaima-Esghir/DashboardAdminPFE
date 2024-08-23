import React from "react";
import { Bar, Doughnut, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  ArcElement,
  LineElement, // Required for Line chart
  PointElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  ArcElement,
  LineElement, // Register for Line chart
  PointElement,
  CategoryScale,
  LinearScale
);

// Data for the Bar chart
const barData = {
  labels: ["Deals", "Promotions"],
  datasets: [
    {
      label: "Current Deals",
      data: [150, 100],
      backgroundColor: "rgba(54, 162, 235, 0.5)", // Blue tone
      borderColor: "rgba(54, 162, 235, 1)", // Blue tone
      borderWidth: 1,
    },
  ],
};

const barOptions = {
  plugins: {
    legend: {
      position: "top",
    },
    tooltip: {
      callbacks: {
        label: (tooltipItem) => `Deals: ${tooltipItem.raw}`,
      },
    },
  },
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

// Data for the Doughnut chart
const doughnutData = {
  labels: ["Restaurants", "Hotels", "Cafes", "Beaches"],
  datasets: [
    {
      label: "Deal Distribution",
      data: [150, 100, 80, 60],
      backgroundColor: [
        "rgba(54, 162, 235, 0.5)", // Blue
        "rgba(255, 206, 86, 0.5)", // Yellow
        "rgba(75, 192, 192, 0.5)", // Green
        "rgba(255, 99, 132, 0.5)", // Pink
      ],
      borderColor: [
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(255, 99, 132, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

const doughnutOptions = {
  plugins: {
    legend: {
      position: "top",
    },
    tooltip: {
      callbacks: {
        label: (tooltipItem) => `Deals: ${tooltipItem.raw}`,
      },
    },
  },
};

// Data for the Line chart
const lineData = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "Deals Growth Over Time",
      data: [65, 59, 80, 81, 56, 55, 50],
      fill: false,
      backgroundColor: "rgba(46, 134, 198, 0.5)", // Green tone
      borderColor: "rgb(25, 118, 210)", // Green tone
    },
  ],
};

const lineOptions = {
  plugins: {
    legend: {
      position: "top",
    },
    tooltip: {
      callbacks: {
        label: (tooltipItem) => `Growth: ${tooltipItem.raw}`,
      },
    },
  },
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

function HomePage() {
  return (
    <div className="p-6 max-h-screen flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        Discover Exciting Deals
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        <div className="bg-blue-50 p-4 rounded-lg shadow-md flex flex-col items-center">
          <h2 className="text-xl font-semibold mb-2 text-blue-700">
            Top Restaurant Offers
          </h2>
          <p className="text-2xl font-bold text-blue-900">
            50+ Exclusive Deals
          </p>
        </div>
        <div className="bg-blue-50 p-4 rounded-lg shadow-md flex flex-col items-center">
          <h2 className="text-xl font-semibold mb-2 text-blue-700">
            Travel Experiences
          </h2>
          <p className="text-2xl font-bold text-blue-900">Amazing Discounts</p>
        </div>
        <div className="bg-blue-50 p-4 rounded-lg shadow-md flex flex-col items-center">
          <h2 className="text-xl font-semibold mb-2 text-blue-700">
            Exclusive Promotions
          </h2>
          <p className="text-2xl font-bold text-blue-900">
            Limited Time Offers
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 w-full max-w-4xl">
        {/* Bar Chart */}
        <div className="bg-blue-50 p-6 rounded-lg shadow-md h-full">
          <h2 className="text-xl font-semibold mb-4 text-blue-800">
            Current Deal Trends
          </h2>
          <div className="h-72">
            <Bar data={barData} options={barOptions} />
          </div>
        </div>

        {/* Doughnut Chart */}
        <div className="bg-blue-50 p-6 rounded-lg shadow-md h-full">
          <h2 className="text-xl font-semibold mb-4 text-blue-800">
            Deal Distribution
          </h2>
          <div className="h-72">
            <Doughnut data={doughnutData} options={doughnutOptions} />
          </div>
        </div>
      </div>

      {/* Line Chart */}
      <div className="bg-blue-50 p-6 rounded-lg shadow-md w-full max-w-4xl mt-6">
        <h2 className="text-xl font-semibold mb-4 text-blue-800">
          Deal Growth Over Time
        </h2>
        <div className="h-72">
          <Line data={lineData} options={lineOptions} />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
