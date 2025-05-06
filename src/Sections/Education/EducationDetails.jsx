import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const EducationDetails = () => {
    const { id } = useParams();
  const data = useLoaderData();
  const singleApp = data.find((a) => a.id === id);
  console.log(singleApp);
  

  const {
    name,
    developer,
    banner,
    downloads,
    category,
    rating,
    description,
    features,
    reviews,
    thumbnail,
  } = singleApp;
    return (
        <>
        <div className="mt-20 p-4 md:p-10 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="flex flex-col-reverse md:flex-row gap-8 bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* Left Section - Details */}
        <div className="w-full md:w-1/2 p-6 space-y-6">
          {/* App Info */}
          <div className="flex items-center gap-4">
            <img
              src={banner}
              alt=""
              className="w-16 h-16 rounded-xl shadow-md transition-transform hover:scale-110 duration-300"
            />
            <div>
              <h2 className="text-2xl font-bold text-blue-700">{name}</h2>
              <p className="text-sm text-gray-600">{developer}</p>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-700 text-sm">{description}</p>

          {/* Stats */}
          <div className="flex flex-wrap gap-4 text-sm text-purple-700 font-medium">
            <span className="hover:underline transition">⭐ {rating}</span>
            <span className="hover:underline transition">📥 {downloads}</span>
            <span className="hover:underline transition">🏷️ {category}</span>
          </div>

          {/* Features */}
          <div>
            <h3 className="font-semibold text-blue-800">Features</h3>
            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
              {features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
          </div>

          {/* Reviews */}
          <div>
            <h3 className="font-semibold text-blue-800 mb-2">User Reviews</h3>
            <div className="flex flex-col gap-4 max-h-60 overflow-y-auto pr-2">
              {reviews.map((review, idx) => (
                <div
                  key={idx}
                  className="bg-purple-100 p-4 rounded-xl shadow-sm hover:shadow-md transition duration-300"
                >
                  <p className="font-semibold text-blue-900">@{review.user}</p>
                  <p className="text-sm text-purple-700 mt-1">⭐ {review.rating}</p>
                  <p className="text-sm text-gray-800 mt-1">{review.comment}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Install Button */}
          <button className="mt-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold px-6 py-2 rounded-full shadow hover:from-blue-700 hover:to-purple-700 transition">
            Install
          </button>
        </div>

        {/* Right Section - Banner */}
        <div className="w-full md:w-1/2">
          <img
            src={thumbnail}
            alt="App Banner"
            className="w-full mt-10 h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>
    </div>
        </>
    );
};

export default EducationDetails;