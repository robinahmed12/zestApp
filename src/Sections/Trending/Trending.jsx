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
      <h1 className="font-bold text-lg  mt-7 mb-4">Trending Apps</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {apps.map((app) => (
          <TrendingCard key={app.id} app={app} />
        ))}
      </div>
    </>
  );
};

export default Trending;

