import React from "react";
import Marquee from "react-fast-marquee";
import pic1 from "../../assets/veg.webp";
import pic2 from "../../assets/veg2.jpg";
import pic3 from "../../assets/veg3.webp";
import pic4 from "../../assets/veg 4.webp";

const Launch = () => {
  return (
    <div className="px-4  mt-12 sm:px-6 lg:px-12 py-8">
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
        Launching Soon
      </h1>

      <Marquee pauseOnHover={true} speed={50} gradient={false}>
        <div className="flex gap-4 mt-10 items-center">
          {[pic1, pic2, pic3, pic4].map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Vegetable ${index + 1}`}
              className="rounded-2xl hover:scale-105 transition-transform duration-300 ease-in-out shadow-md
                w-64 sm:w-72 ml-6 md:w-[600px] lg:w-[500px] xl:w-[600px]"
            />
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default Launch;
