import React from "react";
import Marquee from "react-fast-marquee";
import pic1 from "../../assets/veg.webp";
import pic2 from "../../assets/veg2.jpg";
import pic3 from "../../assets/veg3.webp";
import pic4 from "../../assets/veg 4.webp";

const Launch = () => {
  return (
    <>
      <div>
        <h1 className="text-2xl mt-12 sm:text-3xl font-bold text-gray-800 mb-6">
          Launching Soon
        </h1>

        <Marquee pauseOnHover={true} speed={60}>
          <div className="mt-12 bg-base-200  p-8 flex gap-5
          hover:scale-[1.03] transition-all duration-300 ease-in-out
          hover:shadow-xl
          ">
            <img className="w-[600px] ml-5 rounded-2xl" src={pic1} alt="" srcset="" />
            <img className="w-[600px] ml-5 rounded-2xl" src={pic2} alt="" srcset="" />
            <img className="w-[600px] ml-5 rounded-2xl" src={pic3} alt="" srcset="" />
            <img className="w-[600px] ml-5 rounded-2xl" src={pic4} alt="" srcset="" />
          </div>
        </Marquee>
      </div>
    </>
  );
};

export default Launch;
