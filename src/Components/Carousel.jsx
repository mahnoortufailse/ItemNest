import { useState } from "react";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import { IoArrowForwardCircleSharp } from "react-icons/io5";
import {images} from "../utils/HomePageData";
const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(2);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div
      id="animation-carousel"
      className="relative w-[1250px] h-[503px]"
      data-carousel="static"
    >
      <div className="relative h-[503px] w-[1250px] overflow-hidden">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute w-full h-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 duration-200 ease-linear ${
              currentIndex === index ? "block" : "hidden"
            }`}
          >
            <img
              src={image}
              alt={`carousel-item-${index + 1}`}
              className="absolute block w-full"
            />
          </div>
        ))}
      </div>

      {/* Updated Slider Controls */}

      <button
        type="button"
        className="absolute top-1/2 left-1 z-30 flex items-center justify-center -translate-y-1/2 h-[93px] w-[93px] rounded-full bg-[#C6DDD9]  "
        onClick={goToPrevious}
      >
        <IoArrowBackCircleSharp className="w-[90px] h-[90px] bg-[#C6DDD9] text-gray-500 rounded-full" />
        <span className="sr-only">Previous</span>
      </button>
      <button
        type="button"
        className="absolute top-1/2 right-1 z-30 flex items-center justify-center -translate-y-1/2 h-[93px] w-[93px] rounded-full bg-[#C6DDD9]  "
        onClick={goToNext}
      >
        <IoArrowForwardCircleSharp
          className="w-[90px] h-[90px] bg-[#C6DDD9] text-gray-500 rounded-full" 
        />
        <span className="sr-only">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
