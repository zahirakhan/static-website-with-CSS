"use client";
import React, { useState, useEffect } from "react";
import "../../styles/Slider.css";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { id: 1, src: "/images/slider4.jpg", caption: "Moments That Last Forever" },
    {
      id: 2,
      src: "/images/slider2.jpg",
      caption: "Capture the Beauty Around You",
    },
    {
      id: 3,
      src: "/images/slider3.avif",
      caption: "Every Picture Tells a Story",
    },
  ];

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(handleNext, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-slider">
      <div className="slider">
        <div className="slide" key={slides[currentSlide].id}>
          <img
            src={slides[currentSlide].src}
            alt={`Slide ${slides[currentSlide].id}`}
            className="slide-image"
          />
          <div className="caption">{slides[currentSlide].caption}</div>
        </div>
      </div>
      <div className="controls">
        <button className="prev-btn" onClick={handlePrev}>
          &larr;
        </button>
        <button className="next-btn" onClick={handleNext}>
          &rarr;
        </button>
      </div>
    </section>
  );
};

export default Slider;
