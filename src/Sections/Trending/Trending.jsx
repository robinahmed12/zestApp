import React, { useEffect, useState } from "react";
import TrendingCard from "./TrendingCard";

const Trending = () => {
  const [apps, setApps] = useState([]);

  useEffect(() => {
    fetch("/trending.json")
      .then((res) => res.json())
      .then((data) => setApps(data));
  }, []);

  return (
    <>
      <div className="px-4 sm:px-6 lg:px-8 mt-12">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
          Trending Apps
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {apps.map((app) => (
            <div
              key={app.id}
              className="transition duration-300 transform hover:-translate-y-1 hover:scale-105"
            >
              <TrendingCard app={app} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Trending;
