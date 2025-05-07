import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { Link } from "react-router";
import { IoCloudDownloadOutline } from "react-icons/io5";

const HealthCard = ({ app }) => {
  const { thumbnail, name, rating, downloads, id } = app;
  return (
    <>
      <Link to={`/description/${id}`} className="block w-full">
        <div className="mt-6 mx-auto w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg bg-base-200 rounded-2xl p-4 shadow-md hover:shadow-xl hover:scale-[1.03] transition-all duration-300 ease-in-out cursor-pointer">
          <img
            src={thumbnail}
            alt={name}
            className="w-full h-48 sm:h-56 md:h-60 object-cover rounded-xl"
          />
          <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-sm sm:text-base">
            <p className="font-semibold text-center sm:text-left flex-1">
              {name}
            </p>

            <div className="flex items-center text-orange-400 gap-1">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalfAlt />
              <span className="ml-1 text-gray-700 text-xs sm:text-sm">
                {rating}
              </span>
            </div>

            <div className="flex items-center gap-1 text-gray-600 text-xs sm:text-sm">
              <IoCloudDownloadOutline className="text-lg sm:text-xl" />
              <span>{downloads}</span>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default HealthCard;
