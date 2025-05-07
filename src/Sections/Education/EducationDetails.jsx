import React, { useContext, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import { AuthContext } from "../../Provider/AuthContext";
import { IoCloudDownloadOutline } from "react-icons/io5";

const EducationDetails = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const { user } = useContext(AuthContext);
  const { displayName } = user || {};
  const [installed, setInstalled] = useState(false);
  const [wasInstalled, setWasInstalled] = useState(false);
  const [review, setReview] = useState("");
  const [ratings, setRatings] = useState(0);
  const [showReview, setShowReview] = useState([]);

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

  const handleInstall = () => {
    const newState = !installed;
    setInstalled(newState);
    if (newState) setWasInstalled(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!review || ratings === 0) return;

    const newReview = {
      name: displayName,
      text: review,
      ratings,
    };

    setShowReview([newReview, ...showReview]);
    setReview("");
    setRatings(0);
  };

  const renderStars = (count) => {
    return [...Array(5)].map((_, i) => (
      <span key={i} className={i < count ? "text-yellow-400" : "text-gray-300"}>
        ★
      </span>
    ));
  };

  const allReviews = [...showReview, ...reviews];
  return (
    <>
      <div className="mt-20 p-4 md:p-10 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="flex flex-col-reverse md:flex-row gap-8 bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Left Section */}
          <div className="w-full md:w-1/2 p-6 space-y-6">
            {/* App Info */}
            <div className="flex relative items-center gap-4">
              <img
                src={banner}
                alt="App Thumbnail"
                className="w-16 h-16 rounded-xl shadow-md transition-transform hover:scale-110 duration-300"
              />
              {installed && (
                <IoCloudDownloadOutline className="absolute -bottom-2 left-11 w-[23px] text-black font-bold" />
              )}
              <div>
                <h2 className="text-2xl font-bold text-blue-700">{name}</h2>
                <p className="text-sm text-gray-600">{developer}</p>
              </div>
            </div>

            <p className="text-gray-700 text-sm">{description}</p>

            <div className="flex flex-wrap gap-4 text-sm text-purple-700 font-medium">
              <span>⭐ {rating}</span>
              <span>📥 {downloads}</span>
              <span>🏷️ {category}</span>
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

            {/* Install/Uninstall Button */}
            <button
              onClick={handleInstall}
              className="mt-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold px-9 py-2 rounded-2xl shadow hover:from-blue-700 hover:to-purple-700 transition"
            >
              {installed ? "Uninstall" : "Install"}
            </button>

            {/* Install Status */}
            <p className="mt-2 text-sm text-green-600 font-medium">
              {installed
                ? "App is currently installed."
                : wasInstalled
                ? "You have previously installed this app."
                : "You need to install the app to leave a review."}
            </p>

            {/* Review Form */}
            <form onSubmit={handleSubmit} className="space-y-4 mt-6">
              <textarea
                onChange={(e) => setReview(e.target.value)}
                value={review}
                disabled={!wasInstalled}
                placeholder="Write your review..."
                className="w-full p-2 border rounded-md"
                rows={4}
              />

              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    type="button"
                    key={star}
                    onClick={() => setRatings(star)}
                    className={`text-2xl ${
                      star <= ratings ? "text-yellow-400" : "text-gray-300"
                    }`}
                  >
                    ★
                  </button>
                ))}
              </div>

              <button
                type="submit"
                className={`px-4 py-2 rounded-md text-white font-semibold ${
                  wasInstalled
                    ? "bg-green-600 hover:bg-green-700"
                    : "bg-gray-400 cursor-not-allowed"
                }`}
              >
                Submit Review
              </button>

              {!wasInstalled && (
                <p className="text-sm text-red-500">
                  You must install the app before submitting a review.
                </p>
              )}
            </form>

            {/* Review List */}
            <div className="space-y-4">
              {allReviews.length === 0 ? (
                <p className="text-gray-500">No reviews yet.</p>
              ) : (
                allReviews.map((r, idx) => (
                  <div key={idx} className="border rounded-lg p-4 shadow-sm">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold">@{r.name || r.user}</h4>
                      <div className="text-yellow-400">
                        {renderStars(r.ratings || r.rating)}
                      </div>
                    </div>
                    <p className="text-gray-700">{r.text || r.comment}</p>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Right Section - Banner */}
          <div className="w-full md:w-1/2">
            <img
              src={thumbnail}
              alt="App Banner"
              className="w-[650px] mt-10 object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default EducationDetails;
