import { useState } from "react";
import "./slider.css";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

import img1 from "../assets/png/13.png";
import img2 from "../assets/png/14.png";
import img3 from "../assets/png/15.png";
import img4 from "../assets/png/16.png";
import img5 from "../assets/png/17.png";
import img6 from "../assets/png/18.png";
import img7 from "../assets/png/19.png";
import img8 from "../assets/png/20.png";
import img9 from "../assets/png/21.png";
import img10 from "../assets/png/22.png";
import img11 from "../assets/png/23.png";
import img12 from "../assets/png/24.png";

const Slider = () => {
  const slides = [
    { src: img1, thumb: img1, alt: "Image 1" },
    { src: img2, thumb: img2, alt: "Image 2" },
    { src: img3, thumb: img3, alt: "Image 3" },
    { src: img4, thumb: img4, alt: "Image 3" },
    { src: img5, thumb: img5, alt: "Image 3" },
    { src: img6, thumb: img6, alt: "Image 3" },
    { src: img7, thumb: img7, alt: "Image 3" },
    { src: img8, thumb: img8, alt: "Image 3" },
    { src: img9, thumb: img9, alt: "Image 3" },
    { src: img10, thumb: img10, alt: "Image 3" },
    { src: img11, thumb: img11, alt: "Image 3" },
    { src: img12, thumb: img12, alt: "Image 3" },
    // Add more slides as needed
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handleThumbnailClick = (index: number) => {
    setActiveIndex(index);
  };

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  return (
    <div className="carousel-container">
      <div className="flex items-center w-full">
        <IoIosArrowBack
          size={30}
          className="cursor-pointer"
          onClick={prevSlide}
        />
        <div className="carousel relative">
          {slides.map((slide, index) => (
            <div
              className={`slide ${index === activeIndex ? "active" : ""}`}
              key={index}
            >
              <img src={slide.src} alt={slide.alt} />
            </div>
          ))}
        </div>
        <IoIosArrowForward
          size={30}
          className="cursor-pointer"
          onClick={nextSlide}
        />
      </div>

      <div className="thumbnails w-[90%] mx-auto">
        {slides.map((slide, index) => (
          <div
            className={`thumbnail ${index === activeIndex ? "active" : ""}`}
            key={index}
            onClick={() => handleThumbnailClick(index)}
          >
            <img src={slide.thumb} alt={slide.alt} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
