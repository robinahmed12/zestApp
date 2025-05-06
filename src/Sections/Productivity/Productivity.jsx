import React, { useEffect, useState } from "react";
import ProductivityCard from "./ProductivityCArd";

const Productivity = () => {
  const [apps, setApps] = useState([]);

  useEffect(() => {
    fetch("/productivity.json")
      .then((res) => res.json())
      .then((data) => setApps(data));
  }, []); // ✅ Correct dependency array to avoid infinite loop

  return (
    <div className="px-4 sm:px-6 lg:px-8 mt-12">
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
        Productivity Apps
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {apps.map((app) => (
          <div
            key={app.id}
            className="transition duration-300 transform hover:-translate-y-1 hover:scale-105"
          >
            <ProductivityCard app={app} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Productivity;
