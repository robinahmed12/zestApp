import React, { useEffect } from "react";
import { useLoaderData } from "react-router";
import Profile from "../Profile/Profile";
import ProfileCard from "./ProfileCard";

const Developers = () => {
  const data = useLoaderData();
 

  return (
    useEffect(()=>{
      document.title = "ZestApps | Developers"
    }),

    <>
      <div className="mt-16">
        <h1 className="text-2xl text-center sm:text-3xl font-bold text-gray-800 mb-6">
          Meet Our Excellent Developers
        </h1>

        <div className="grid lg:grid-cols-3 gap-8 md:grid-cols-2 grid-cols-1">
          {data.map((developer) => (
            <ProfileCard key={developer.id} developer={developer} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Developers;
