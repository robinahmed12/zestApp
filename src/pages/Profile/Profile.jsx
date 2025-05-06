import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthContext";
import { toast } from "react-toastify";

const Profile = () => {
  const { user, updaterUser } = use(AuthContext);

  const [name, setName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (user) {
      setName(user.displayName || "");
      setPhotoURL(user.photoURL || "");
    }
  }, [user]);

 

  const handleSave = async () => {
    if (!user) return;

    setLoading(true);
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
      setLoading(false);
    }
  };

  return (
    <>
      <div className="max-w-lg mx-auto mt-10 p-6 bg-white rounded-xl shadow-md space-y-4 border border-blue-200">
        <div className="flex items-center space-x-4">
          <img
            src={photoURL || "https://via.placeholder.com/80"}
            alt="Profile"
            className="w-20 h-20 rounded-full object-cover border-2 border-blue-500"
          />
          <div>
            <p className="text-lg font-medium text-gray-900">
              {name || "No Name"}
            </p>
            <p className="text-sm text-gray-500">{user?.email}</p>
          </div>
        </div>

        {/* Edit Form */}
        <div className="space-y-4 mt-6">
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
            disabled={loading}
            className={`w-full py-2 px-4 rounded-lg font-semibold text-white ${
              loading
                ? "bg-purple-300 cursor-not-allowed"
                : "bg-purple-600 hover:bg-purple-700"
            } transition duration-200`}
          >
            {loading ? "Saving..." : "Save Changes"}
          </button>
        </div>
      </div>
    </>
  );
};

export default Profile;
