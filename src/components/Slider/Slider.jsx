import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import slider1 from "../../assets/3909330.jpg";
import slider2 from "../../assets/4230372.jpg";
import slider3 from "../../assets/3967156.jpg";
import slider4 from "../../assets/3969052.jpg";
import slider5 from "../../assets/4326821.jpg";
import slider6 from "../../assets/9059760.jpg";

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
      <div className="navigation-wrapper mt-12 relative max-w-full px-4 sm:px-6 lg:px-8">
        <div ref={sliderRef} className="keen-slider rounded-2xl">
          {[slider1, slider2, slider3, slider4 , slider5 , slider6].map((img, i) => (
            <div key={i} className="keen-slider__slide">
              <img
                src={img}
                alt={`slide-${i + 1}`}
                className="w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[650px] object-cover rounded-2xl"
              />
            </div>
          ))}
       
        </div>

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

      {loaded && instanceRef.current && (
        <div className="flex justify-center mt-4 gap-2">
          {[
            ...Array(instanceRef.current.track.details.slides.length).keys(),
          ].map((idx) => (
            <button
              key={idx}
              onClick={() => instanceRef.current?.moveToIdx(idx)}
              className={`w-3 h-3 rounded-full ${
                currentSlide === idx ? "bg-blue-600" : "bg-gray-300"
              }`}
            ></button>
          ))}
        </div>
      )}
    </>
  );
};

function Arrow({ left, onClick, disabled }) {
  const baseClass =
    "w-6 h-6 md:w-8 md:h-8 cursor-pointer absolute top-1/2 transform -translate-y-1/2 z-10";
  const positionClass = left ? "left-2" : "right-2";
  const disabledClass = disabled ? "opacity-30 pointer-events-none" : "";

  return (
    <svg
      onClick={onClick}
      className={`${baseClass} ${positionClass} ${disabledClass}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      {left ? (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      ) : (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  );
}

export default Slider;
