import React, { useState } from "react";
import './AboutCarousel.css';

const AboutCarousel = () => {
  const images = [
    "maxsell1.jpeg",
    "maxsell2.jpeg"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (currentIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="main-card">
      <div className="carousel">
        <button className="prev" onClick={prevSlide}>❮</button>

        <img
          src={images[currentIndex]}
          alt="carousel"
          className="carousel-image"
        />

        <button className="next" onClick={nextSlide}>❯</button>
      </div>
    </div>
  );
};

export default AboutCarousel;