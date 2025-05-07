import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthContext";
import { toast } from "react-toastify";
import Loading from "../../components/Loading/Loading";

const Profile = () => {
  const { user, updaterUser } = use(AuthContext);

  const [name, setName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
  const [loadings, setLoadings] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (user) {
      setName(user.displayName || "");
      setPhotoURL(user.photoURL || "");
    }
  }, [user]);

  const handleSave = async () => {
    if (!user) return;

    setLoadings(true);
    setError("");

    try {
      await updaterUser({
        displayName: name,
        photoURL: photoURL,
      });
      toast("Profile updated successfully!");
    } catch (err) {
      toast("Failed to update profile. Please try again.");
      console.error(err);
    } finally {
      setLoadings(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-14 px-4 sm:px-6 lg:px-8">
      <div className="p-6 sm:p-8 bg-white rounded-xl shadow-md border border-blue-200 space-y-6">
        {/* Profile Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 space-y-4 sm:space-y-0">
          <img
            src={photoURL || ""}
            alt="Profile"
            className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover border-2 border-blue-500"
          />
          <div>
            <p className="text-xl sm:text-2xl font-semibold text-gray-900">
              {name || "No Name"}
            </p>
            <p className="text-sm sm:text-base text-gray-500">{user?.email}</p>
          </div>
        </div>

        {/* Edit Form */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Photo URL
            </label>
            <input
              type="url"
              value={photoURL}
              onChange={(e) => setPhotoURL(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="https://example.com/photo.jpg"
            />
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            onClick={handleSave}
            disabled={loadings}
            className={`w-full py-2 px-4 rounded-lg font-semibold text-white text-base ${
              loadings
                ? "bg-purple-300 cursor-not-allowed"
                : "bg-purple-600 hover:bg-purple-700"
            } transition duration-200`}
          >
            {loadings ? "Saving..." : "Save Changes"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
