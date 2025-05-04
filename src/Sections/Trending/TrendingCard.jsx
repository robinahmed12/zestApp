import React from "react";
import Marquee from "react-fast-marquee";
import { IoCloudDownloadOutline } from "react-icons/io5";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const TrendingCard = ({ app }) => {
  const { banner, name, rating, downloads } = app;

  return (
    <Marquee pauseOnHover={true} speed={60}>
      <div className="mt-14 ml-3 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg bg-base-200 rounded-2xl p-4 shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out hover:scale-105 cursor-pointer">
        <img
          className="w-full h-48 object-cover rounded-xl"
          src={banner}
          alt={name}
        />
        <div className="flex flex-col sm:flex-row items-center justify-between mt-4 text-sm sm:text-base gap-2">
          <p className="font-semibold text-center sm:text-left">{name}</p>
          <div className="flex items-center gap-1 text-orange-400">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStarHalfAlt />
            <span className="ml-1 text-gray-700">{rating}</span>
          </div>
          <div className="flex items-center gap-1 text-gray-600">
            <IoCloudDownloadOutline className="text-xl" />
            <span>{downloads}</span>
          </div>
        </div>
      </div>
    </Marquee>
  );
};

export default TrendingCard;
