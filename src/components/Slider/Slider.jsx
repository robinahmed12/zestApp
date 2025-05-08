// import React, { useState } from "react";
// import { useKeenSlider } from "keen-slider/react";
// import "keen-slider/keen-slider.min.css";
// import slider1 from "../../assets/3909330.jpg";
// import slider2 from "../../assets/4230372.jpg";
// import slider3 from "../../assets/3967156.jpg";
// import slider4 from "../../assets/3969052.jpg";
// import slider5 from "../../assets/4326821.jpg";
// import slider6 from "../../assets/9059760.jpg";

// const Slider = () => {
//   const promotionalTexts = [
//     [
//       "Our Newly Launched App",
//       "Feel Better Faster with ",
//       "Instant Doctor Access",
//     ],
//     [
//       "Our Newly Launched App",
//       "Master Your Tasks – Anytime, Anywhere",
//       "Organize. Prioritize. Succeed.",
//     ],
//     [
//       "Our Newly Launched App",
//       "Doctor Visits Made Easy",
//       "Book appointments, get consultations, stay healthy",
//     ],
//     [
//       "Our Newly Launched App",
//       "Welcome to the Future of Healthcare",
//       "Connect with trusted doctors in seconds",
//     ],
//     [
//       "Our Newly Launched App",
//       "Elegance in Every Pixel",
//       "Visuals that captivate and inspire",
//     ],
//     ["Redefine Your World", "Where ideas come to life"],
//   ];
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [loaded, setLoaded] = useState(false);
//   const [sliderRef, instanceRef] = useKeenSlider({
//     initial: 0,
//     slideChanged(slider) {
//       setCurrentSlide(slider.track.details.rel);
//     },
//     created() {
//       setLoaded(true);
//     },
//   });

//   return (
//     <>
//       <div className="navigation-wrapper mt-12 relative max-w-full px-4 sm:px-6 lg:px-8">
//         <div ref={sliderRef} className="keen-slider rounded-2xl">
//           {[slider1, slider2, slider3, slider4, slider5, slider6].map(
//             (img, i) => (
//               <div key={i} className="keen-slider__slide relative">
//                 <img
//                   src={img}
//                   alt={`slide-${i + 1}`}
//                   className="w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[650px] object-cover rounded-2xl"
//                 />
//                 <div className="absolute inset-0 bg-black/30 rounded-2xl flex flex-col justify-center items-center text-center  shadow-sm text-black px-4">
//                   <div className=" text-base-300  mt-8 rounded-2xl px-2 ">
//                     <h1 className="text-xl sm:text-2xl  md:text-6xl font-bold mb-2">
//                       {promotionalTexts[i][0]}
//                     </h1>
//                     <h3 className="text-xl sm:text-2xl  md:text-6xl font-bold mb-2">
//                       {promotionalTexts[i][1]}
//                     </h3>
//                     <p className="text-sm  sm:text-base md:text-3xl">
//                       {promotionalTexts[i][2]}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             )
//           )}
//         </div>

//         {loaded && instanceRef.current && (
//           <>
//             <Arrow
//               left
//               onClick={(e) =>
//                 e.stopPropagation() || instanceRef.current?.prev()
//               }
//               disabled={currentSlide === 0}
//             />
//             <Arrow
//               onClick={(e) =>
//                 e.stopPropagation() || instanceRef.current?.next()
//               }
//               disabled={
//                 currentSlide ===
//                 instanceRef.current.track.details.slides.length - 1
//               }
//             />
//           </>
//         )}
//       </div>

//       {loaded && instanceRef.current && (
//         <div className="flex justify-center mt-4 gap-2">
//           {[
//             ...Array(instanceRef.current.track.details.slides.length).keys(),
//           ].map((idx) => (
//             <button
//               key={idx}
//               onClick={() => instanceRef.current?.moveToIdx(idx)}
//               className={`w-3 h-3 rounded-full ${
//                 currentSlide === idx ? "bg-blue-600" : "bg-gray-300"
//               }`}
//             ></button>
//           ))}
//         </div>
//       )}
//     </>
//   );
// };

// function Arrow({ left, onClick, disabled }) {
//   const baseClass =
//     "w-6 h-6 md:w-8 md:h-8 cursor-pointer absolute top-1/2 transform -translate-y-1/2 z-10";
//   const positionClass = left ? "left-2" : "right-2";
//   const disabledClass = disabled ? "opacity-30 pointer-events-none" : "";

//   return (
//     <svg
//       onClick={onClick}
//       className={`${baseClass} ${positionClass} ${disabledClass}`}
//       xmlns="http://www.w3.org/2000/svg"
//       viewBox="0 0 24 24"
//       fill="currentColor"
//     >
//       {left ? (
//         <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
//       ) : (
//         <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
//       )}
//     </svg>
//   );
// }

// export default Slider;

import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import slider1 from "../../assets/3909330.jpg";
import slider2 from "../../assets/4230372.jpg";
import slider3 from "../../assets/3967156.jpg";
import slider4 from "../../assets/3969052.jpg";
import slider5 from "../../assets/4326821.jpg";
import slider6 from "../../assets/9059760.jpg";

const slides = [slider1, slider2, slider3, slider4, slider5, slider6];

const texts = [
  [
    "Our Newly Launched App",
    "Feel Better Faster with",
    "Instant Doctor Access",
  ],
  [
    "Our Newly Launched App",
    "Master Your Tasks",
    "Organize. Prioritize. Succeed.",
  ],
  [
    "Our Newly Launched App",
    "Doctor Visits Made Easy",
    "Book appointments, stay healthy",
  ],
  [
    "Our Newly Launched App",
    "Future of Healthcare",
    "Connect with trusted doctors",
  ],
  ["Our Newly Launched App", "Elegance in Every Pixel", "Visuals that inspire"],
  ["Our Newly Launched App","Redefine Your World", "Where ideas come to life", ""],
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  return (
    <>
      <div className="navigation-wrapper mt-12 relative max-w-7xl mx-auto px-4">
        <div
          ref={sliderRef}
          className="keen-slider rounded-3xl overflow-hidden"
        >
          {slides.map((img, i) => (
            <div key={i} className="keen-slider__slide relative">
              <img
                src={img}
                alt={`slide-${i + 1}`}
                className="w-full h-[300px] sm:h-[400px] lg:h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                <div className="   p-6 sm:p-10 rounded-xl text-white text-center max-w-2xl">
                  <h2 className="text-lg text-red-100 sm:text-xl md:text-2xl font-semibold">
                    {texts[i][0]}
                  </h2>
                  <h1 className="text-2xl text-orange-400 sm:text-4xl md:text-5xl font-bold my-2">
                    {texts[i][1]}
                  </h1>
                  {texts[i][2] && (
                    <p className="text-lg text-base-300 sm:text-lg md:text-xl">
                      {texts[i][2]}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Arrows */}
        {loaded && instanceRef.current && (
          <>
            <Arrow
              left
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              disabled={currentSlide === 0}
            />
            <Arrow
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length - 1
              }
            />
          </>
        )}
      </div>

      {/* Dots */}
      {loaded && instanceRef.current && (
        <div className="flex justify-center mt-6 gap-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => instanceRef.current?.moveToIdx(idx)}
              className={`w-3 h-3 rounded-full transition-colors ${
                currentSlide === idx ? "bg-neutral-950" : "bg-gray-500"
              }`}
            ></button>
          ))}
        </div>
      )}
    </>
  );
};

function Arrow({ left, onClick, disabled }) {
  const base =
    "w-8 h-8 sm:w-10 sm:h-10 cursor-pointer absolute top-1/2 transform -translate-y-1/2 z-10 text-white";
  const position = left ? "left-4" : "right-4";
  const disabledStyle = disabled ? "opacity-30 pointer-events-none" : "";

  return (
    <svg
      onClick={onClick}
      className={`${base} ${position} ${disabledStyle}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      {left ? <path d="M15 6l-6 6 6 6" /> : <path d="M9 6l6 6-6 6" />}
    </svg>
  );
}

export default Slider;
