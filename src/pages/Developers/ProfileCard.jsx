import React from "react";

const ProfileCard = ({ developer }) => {
  const { name, image, role, about } = developer;
  console.log(name);

  return (
    <>
      <div className="mt-10 flex items-center justify-center p-4">
        <div className="max-w-lg w-full bg-white rounded-xl shadow-lg overflow-hidden transition-transform transform hover:scale-105 duration-300">
          {/* Profile Image */}
          <div className="relative h-48 w-full bg-blue-50 flex items-center justify-center">
            <img
              src={image}
              alt={name}
              className="absolute bottom-0 transform translate-y-1/2 left-1/2 -translate-x-1/2 h-24 w-24 rounded-full object-cover border-4 border-white shadow-md"
            />
          </div>

          {/* Card Body */}
          <div className="pt-12 pb-6 px-6 text-center">
            <h2 className="text-2xl font-bold text-gray-800">{name}</h2>
            <p className="text-purple-600 font-medium mt-1">{role}</p>

            <div className="mt-4 text-gray-600 text-sm leading-relaxed line-clamp-3">
              {about}
            </div>

            {/* Role Badge */}
            <div className="mt-5 inline-block px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-600">
              {developer.role}
            </div>
          </div>

          {/* Footer Buttons or Links */}
          <div className="px-6 pb-6 pt-3 flex justify-center space-x-4">
            <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
              View Apps
            </button>
            <button className="px-4 py-2 bg-purple-500 text-white rounded-md hover:bg-purple-600 transition">
              Contact
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileCard;
