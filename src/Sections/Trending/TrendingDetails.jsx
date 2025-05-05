import React from "react";
import { useLoaderData, useParams } from "react-router";

const TrendingDetails = () => {
  const { id } = useParams();
  const data = useLoaderData();

  const singleApp = data.find((a) => a.id === id);

  const {
    name,
    developer,
    banner,
    downloads,
    category,
    rating,
    description,
    features,
    reviews
  } = singleApp;

  return (
    <>
      <div className=" mt-20 rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="flex gap-5 flex-col md:flex-row">
          {/* Banner */}
          <div className="md:w-1/2">
            <img
              src={banner}
              alt="Headspace Banner"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Details */}
          <div className="md:w-1/2 p-6 space-y-4">
            <div className="flex items-center space-x-4">
              {/* <img
                src="https://i.ibb.co/SrztQQm/headspace-thumb.jpg"
                alt="Headspace Icon"
                className="w-16 h-16 rounded-xl shadow-md"
              /> */}
              <div>
                <h2 className="text-2xl font-bold">{name}</h2>
                <p className="text-sm text-white/80">{developer}</p>
              </div>
            </div>

            <p className="text-sm text-white/90">{description}</p>

            <div className="flex items-center gap-4 text-sm text-white/90">
              <span>⭐ {rating}</span>
              <span>📥 {downloads}</span>
              <span>🏷️ {category}</span>
            </div>

            <div>
              <h3 className="font-semibold">Features</h3>
              <ul className="list-disc list-inside space-y-1">
                {features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold">User Review</h3>
              <div className="space-y-4 flex">
          {reviews.map((review, idx) => (
            <div key={idx} className="bg-white/10 p-4 rounded-xl">
              <p className="font-semibold text-white">@{review.user}</p>
              <p className="text-sm text-blue-100 mt-1">⭐ {review.rating}</p>
              <p className="text-white mt-1">{review.comment}</p>
            </div>
          ))}
        </div>
            </div>

            <button className="mt-4 bg-white text-blue-700 font-semibold px-6 py-2 rounded-full shadow hover:bg-gray-100 transition">
              Install
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TrendingDetails;
