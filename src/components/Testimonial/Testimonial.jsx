import React, { useRef, useCallback } from "react";
import logo1 from "/images/customer/joinedForceKineWorks.jpeg";
import logo2 from "/images/customer/L&T.jpg";
import logo3 from "/images/customer/mx_techies_logo.jpg";
import logo4 from "/images/customer/joinedForceAWS.jpeg";
import Slider from "react-slick";
import { FaQuoteLeft, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import avatar from "/images/icons/avatar.png";
import testimonials from "../../data/testimonial";

const Testimonial = () => {
  const sliderRef1 = useRef(null);

  const next1 = useCallback(() => sliderRef1.current.slickNext(), []);
  const previous1 = useCallback(() => sliderRef1.current.slickPrev(), []);

  const settings1 = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false, // Disable default arrows
    nextArrow: <SampleNextArrow />, // Custom next arrow
    prevArrow: <SamplePrevArrow />, // Custom prev arrow
  };



  return (
    <section className="py-20 bg-gradient-to-r from-purple-700 to-blue-800 text-white">
      <div className="container mx-auto px-6">
        {/* Joined Partner Logos Section */}
        <div className="relative top-[-9rem] bg-white text-center mb-12 shadow-xl shadow-t-xl rounded-lg">
          <h1 data-aos="zoom-in" className="text-center py-4 mb-[1rem] text-2xl text-desGray font-medium ">
          Joined Force With
        </h1>
          <div className="flex flex-col items-center sm:flex-row justify-center ">
            {[logo1, logo2, logo3, logo4].map((logo, index) => (
              <div
                key={index}
                className="w-40 h-40 border-4 border-white overflow-hidden mx-4 "
              >
                {/* <img
                 data-aos="zoom-in"
                  src={logo}
                  alt={`Partner logo ${index + 1}`}
                  className="object-contain w-full h-full "
                  
                /> */}
           

                        <img
                          loading="lazy"
                          role="presentation"
                          src={logo}

                       
                         
                          alt="Description of the image"
                          // priority={data.isImportant ? true : false}
                              className="object-contain w-full h-full "
                        />
              </div>
            ))}
          </div>
        </div>

        {/* Testimonial Content Section */}
        <div className="lg:flex lg:justify-between lg:items-start">
          {/* Left Side - Testimonial Header */}
          <div className="lg:w-1/3 mb-12 lg:mb-0">
            <h3 data-aos="zoom-in" className="text-xl font-semibold text-gray-100 mb-2">TESTIMONIALS</h3>
            <h2 data-aos="zoom-in" className="text-4xl font-extrabold text-gray-100 mb-6">
              100% Customer <br /> References
            </h2>
            <p data-aos="zoom-in" className="text-lg text-gray-300">
              We think we are doing a great job. Our customers think so, too!
            </p>
          </div>

          {/* Right Side - Testimonials Slider */}
          <div className="lg:w-2/3">
            <div className="relative" data-aos="fade-up">
              <Slider ref={sliderRef1} {...settings1}>
                {testimonials.map((testimonial, index) => (
                  <TestimonialCard
                    key={index}
                    content={testimonial.content}
                    name={testimonial.name}
                    position={testimonial.position}
                  />
                ))}
              </Slider>

              {/* Carousel Navigation Buttons */}
              <div className="absolute bottom-[-8rem] sm:bottom-auto  sm:top-1/2 -translate-y-1/2 right-6 flex space-x-4">
                <button
                  onClick={previous1}
                  className="p-4 bg-primary rounded-full text-white hover:scale-110 transition-transform duration-300"
                >
                  <FaArrowLeft />
                </button>
                <button
                  onClick={next1}
                  className="p-4 bg-primary rounded-full text-white hover:scale-110 transition-transform duration-300"
                >
                  <FaArrowRight />
                </button>
              </div>
            </div>

            {/* Quote Icon */}
            <div className="mt-8 text-right text-gray-200 text-5xl">
              <FaQuoteLeft />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;

const TestimonialCard = ({ content, name, position }) => {
  return (
    <div className="bg-gradient-to-r from-purple-500 to-indigo-600 p-8 rounded-xl shadow-2xl hover:shadow-xl transition-all">
      <p className="text-lg font-medium text-gray-100 mb-6">{content}</p>
      <div className="flex items-center space-x-6">
        <img src={avatar} alt="avatar" className="w-16 h-16 rounded-full object-cover" />
        <div>
          <p className="text-xl font-semibold text-gray-200">{name}</p>
          <p className="text-sm text-gray-300">{position}</p>
        </div>
      </div>
    </div>
  );
};

// Custom arrow components
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        background: "transparent",
        color: "white",
        padding: "10px",
        borderRadius: "50%",
        border: "2px solid white",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        background: "transparent",
        color: "white",
        padding: "10px",
        borderRadius: "50%",
        border: "2px solid white",
      }}
      onClick={onClick}
    />
  );
}
