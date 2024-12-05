import { useState } from "react";
import Slider from "react-slick";

import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

import blueDots from "/images/blue-dots.png";
import sli1 from "/images/HomeBgSlide1.jpg";
import sli2 from "/images/HomeBgSlide2.jpg";
import sli3 from "/images/HomeBgSlide3.jpg";
import sli4 from "/images/HomeBgSlide4.jpg";

const ExampleCarouselImage = ({ img, text, text2, text3 }) => {
  return (
    <div className="w-full h-[680px] sm:h-[680px] bg-white mt-0 relative">
      <div
        className="w-full h-full bg-cover bg-center bg-no-repeat transition-all duration-1000"
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className="absolute top-16 left-0 sm:left-8 w-[99vw] h-[24rem] sm:w-[90vw] sm:h-[24rem] p-4 pt-[3rem] sm:pt-[0rem] sm:p-8 flex flex-col justify-center bg-transparent sm:bg-gradient-to-r from-primary to-transparent bg-opacity-10 sm:h-[20rem]">
          <span
            data-aos="zoom-out"
            data-aos-duration="500"
            data-aos-once="true"
            className="text-[35px]  sm:text-4xl font-bold text-white tracking-wide transform transition-all duration-700 ease-in-out animate__animated animate__fadeInUp sm:text-3xl md:text-4xl Class
Properties
leading-[2.5rem]"
          >
            {text}
          </span>
          <span
            data-aos="zoom-out"
            data-aos-duration="500"
            data-aos-once="true"
            className="text-[35px]  sm:text-4xl font-bold text-white tracking-wide transform transition-all duration-700 ease-in-out animate__animated animate__fadeInUp sm:text-3xl md:text-4xl Class
Properties
leading-[2.5rem]"
          >
            {text2}
          </span>

          <div className="mt-6 w-[100%] flex flex-col items-start sm:w-[80%]">
            <div className="flex items-center pl-4 h-16 border-l-8 border-white mt-4">
              <span
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-delay="100"
                className="text-xl font-medium text-white sm:text-lg"
              >
                {text3}
              </span>
            </div>
            <Link
              to="/contact-us"
              className="mt-6 px-6 py-3 bg-white text-blue-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-600 hover:text-white transition duration-300 shadow-md"
            >
              <span className="text-lg font-semibold sm:text-base">
                Talk to Experts
              </span>
              <FaArrowRightLong className="ml-2 text-blue-600 hover:text-white transition duration-300" />
            </Link>
            <img
              src={blueDots}
              alt="Blue Dots"
              className="mt-4 sm:w-[80px] md:w-[100px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const BgSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    fade: true,
    speed: 1500,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (current, next) => setCurrentSlide(next),
  };

  return (
    <div className="h-[680px] w-full overflow-hidden relative">
      <Slider {...settings}>
        <div>
          <ExampleCarouselImage
            text="Supercharge Your Business with"
            text2="Artificial Intelligence"
            text3="Unlock next-level growth with AI solutions. Let's go!"
            img={sli1}
          />
        </div>
        <div>
          <ExampleCarouselImage
            text="Thinking of Cloud Migration?"
            text2="DevOps & Serverless Framework"
            text3="Our Experts Are Waiting!"
            img={sli2}
          />
        </div>
        <div>
          <ExampleCarouselImage
            text="Expert in Software Development"
            text2="ERP, Workflow, API Development"
            text3="We Build Custom Solutions"
            img={sli3}
          />
        </div>
        <div>
          <ExampleCarouselImage
            text="You Imagine the Digital Future,"
            text2="We Make It a Reality!"
            text3="Data Analytics, Video Analytics, Agile Methodology"
            img={sli4}
          />
        </div>
      </Slider>
    </div>
  );
};

const HomeSlide = () => {
  return (
    <div>
      <BgSlider />
    </div>
  );
};

export default HomeSlide;
