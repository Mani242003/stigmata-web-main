import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import img from "../../assets/homeBg/HomeBgSlide1.jpg";

const HeroSlider = () => {
  const settings = {
    fade: true,
    speed: 2000,
    autoplaySpeed: 3000,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
  };

  return (
    <Slider {...settings} className="overflow-hidden">
      <div
        className="relative w-full h-[650px] bg-center bg-no-repeat bg-cover"
        style={{
          backgroundImage: `url(${img})`, // Ensure the img is imported correctly
          backgroundSize: "cover",         // Cover to ensure it scales correctly
          backgroundPosition: "center",    // Center the image
        }}
      >
        <div className="container mx-auto px-4 h-full flex flex-col justify-center items-start">
          <h4 className="text-black mb-3 text-lg">For Rent $0 Per Day</h4>
          <h1 className="text-black mb-4 text-4xl font-semibold">
            Reserve Now and Get 50% Off
          </h1>
          <Link to="/cars">
            <button className="mt-4 bg-white text-[#000d6b] font-semibold px-6 py-2 hover:bg-[#000d6b] hover:text-white">
              Reserve Now
            </button>
          </Link>
        </div>
      </div>
    </Slider>
  );
};

export default HeroSlider;
