import React, { useContext, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import { AuthContext } from "../../Provider/AuthContext";
import { IoCloudDownloadOutline } from "react-icons/io5";
import StarRatings from "react-star-ratings";

const ProductiveDetails = () => {
  const { user } = useContext(AuthContext);
  const { displayName } = user || {};
  const { id } = useParams();
  const data = useLoaderData();

  const [installed, setInstalled] = useState(false);
  const [wasInstalled, setWasInstalled] = useState(false);
  const [review, setReview] = useState("");
  const [ratings, setRatings] = useState(0);
  const [showReview, setShowReview] = useState([]);

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
      photo: user?.photoURL,
      ratings,
      date: new Date().toISOString(),
      user: true,
    };
    setShowReview([newReview, ...showReview]);
    setReview("");
    setRatings(0);
  };

  const getDaysAgo = (dateString) => {
    if (!dateString) return "";
    const now = new Date();
    const past = new Date(dateString);
    const diffTime = Math.abs(now - past);
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    return diffDays === 0
      ? "Today"
      : `${diffDays} day${diffDays > 1 ? "s" : ""} ago`;
  };

  const renderStars = (count) => (
    <StarRatings
      rating={count}
      starRatedColor="orange"
      numberOfStars={5}
      name="rating"
      starDimension="20px"
      starSpacing="2px"
      svgIconViewBox="0 0 24 24"
      svgIconPath="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
    />
  );

  const allReviews = [...showReview, ...reviews];
  return (
    <>
      <div className="mt-20 p-4 md:p-8 bg-white max-w-screen-xl mx-auto">
        {/* App Info Header */}
        <div className="flex flex-col md:flex-row items-center gap-6 bg-gray-50 rounded-xl p-6 shadow-md">
          <img
            src={thumbnail}
            alt="App Thumbnail"
            className="w-24 h-24 md:w-32 md:h-32 rounded-xl shadow"
          />
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h1 className="text-2xl md:text-3xl font-bold text-blue-700">
              {name}
            </h1>
            <p className="text-sm text-gray-600">by {developer}</p>
            <div className="flex gap-4 mt-2 text-sm text-gray-700">
              <span>⭐ {rating}</span>
              <span>📥 {downloads}</span>
              <span>🏷️ {category}</span>
            </div>
          </div>
          <button
            onClick={handleInstall}
            className={`mt-4 flex items-center gap-2 ${
              installed
                ? "bg-gradient-to-r from-green-600 to-blue-600 hover:from-blue-500 hover:to-green-600"

                : "bg-gradient-to-r from-purple-500 to-blue-500 hover:from-blue-500 hover:to-purple-500"
            } text-white font-semibold px-9 py-2 rounded-2xl shadow transition`}
          >
            {installed ? (
              <>
                <IoCloudDownloadOutline className="w-5 h-5" />
                Installed
              </>
            ) : (
              "Install"
            )}
          </button>

          <button
            onClick={handleInstall}
            className={`mt-4 flex items-center gap-2 ${
              installed
                ? "bg-gradient-to-r from-purple-500 to-blue-500 hover:from-blue-500 hover:to-purple-500 :"
                : ""
            } text-white font-semibold px-9 py-2 rounded-2xl transition`}
          >
            {installed ? <>Uninstall</> : ""}
          </button>

          <h2 className="text-2xl font-bold text-blue-700 flex items-center gap-2"></h2>
        </div>

        {/* Banner */}
        <div className="mt-6">
          <img
            src={banner}
            alt="App Banner"
            className="w-[500px] rounded-xl object-cover shadow"
          />
        </div>

        {/* Description */}
        <div className="mt-6 space-y-3">
          <h2 className="text-xl font-semibold text-gray-800">
            About This App
          </h2>
          <p className="text-gray-700 text-sm leading-relaxed">{description}</p>
        </div>

        {/* Features */}
        <div className="mt-4">
          <h3 className="text-lg font-semibold text-gray-800">Key Features</h3>
          <ul className="list-disc pl-5 text-sm text-gray-700">
            {features.map((feature, idx) => (
              <li key={idx}>{feature}</li>
            ))}
          </ul>
        </div>

        {/* Reviews Section */}
        <div className="mt-10">
          <h3 className="text-xl font-semibold mb-2 text-gray-800">
            Ratings & Reviews
          </h3>
          <p className="text-gray-600 text-sm mb-4">
            Your feedback helps us improve the app experience.
          </p>
          <p className="mb-2 text-sm text-green-600 font-medium">
            {installed
              ? ""
              : wasInstalled
              ? "You have previously installed this app! You can leave a review"
              : "You need to install the app to leave a review."}
          </p>
          <form
            onSubmit={handleSubmit}
            className="bg-gray-50 p-4 rounded-xl space-y-4 shadow"
          >
            <StarRatings
              rating={ratings}
              starRatedColor="#FFA500"
              changeRating={(newRating) => setRatings(newRating)}
              numberOfStars={5}
              name="review-rating"
              starDimension="30px"
              starSpacing="5px"
              svgIconViewBox="0 0 24 24"
              svgIconPath="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
            />
            <textarea
              disabled={!wasInstalled}
              className="w-full border p-2 rounded-md"
              placeholder="Write your review..."
              rows={3}
              value={review}
              onChange={(e) => setReview(e.target.value)}
            ></textarea>
            <button
              type="submit"
              className={`w-full text-center py-2 rounded-md font-semibold ${
                wasInstalled
                  ? "bg-blue-600 hover:bg-purple-700 text-white"
                  : "bg-gray-300 text-gray-600 cursor-not-allowed"
              }`}
            >
              Submit Review
            </button>
          </form>

          <div className="mt-6 space-y-4">
            {allReviews.length === 0 ? (
              <p className="text-gray-500">No reviews yet.</p>
            ) : (
              allReviews.map((r, idx) => (
                <div
                  key={idx}
                  className="bg-white border p-4 rounded-xl shadow-md"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      {r.user && r.photo && (
                        <img
                          src={r.photo}
                          alt="avatar"
                          className="w-8 h-8 rounded-full"
                        />
                      )}
                      <div>
                        <p className="font-semibold">@{r.name || r.user}</p>
                        {r.user && r.date && (
                          <p className="text-xs text-gray-400">
                            {getDaysAgo(r.date)}
                          </p>
                        )}
                      </div>
                    </div>
                    {renderStars(r.ratings || r.rating)}
                  </div>
                  <p className="text-sm text-gray-700">{r.text || r.comment}</p>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductiveDetails;
