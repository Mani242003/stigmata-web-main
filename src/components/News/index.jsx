import Slider from "react-slick";

import Paragraph from "../Atoms/paragraph";



import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import NewsCard from "../NewsCard";
import newsData from "../../data/newsData"



export default function News() {
  
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show 4 slides on extra-large screens
    slidesToScroll: 1,
    autoplay: true, // Enable auto-slide
    autoplaySpeed: 3000, // Slide every 3 seconds (3000ms)
    arrows: false, // Disable default arrows
    responsive: [
      
      {
        breakpoint: 1024, // Laptops (e.g., 1024px and up)
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // Tablets (e.g., 768px to 1024px)
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // Mobile (e.g., below 768px)
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  

  return (
    <div className=" mx-auto w-full bg-bodyBg">
      <div className="px-5 py-20 flex flex-col gap-[50px] sm:px-10 pb-[150px]">
        {/* Head Content */}
        <div className="flex flex-col gap-8 md:flex-row md:justify-between md:items-end">
          <div className="flex flex-col gap-[18px] md:w-8/12 lg:w-auto">
            <h2 data-aos="zoom-in" className="text-4xl  mt-6  tracking-wide">
              Read our
              <span className="ml-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                News
              </span>
            </h2>

            <Paragraph >
              We give actionable tips, strategies, and techniques to grow your
              business.
            </Paragraph>
          </div>
          <Link to="/news" className="bg-green text-white w-[130px] ">
            <div className="flex gap-2.5 items-center px-5 py-4">
              View All
              <FaAngleRight />
            </div>
          </Link>
        </div>

        <Slider {...sliderSettings} className="font-body">
          {newsData.map((blog) => (
            <div key={blog.id} className="px-3">
              {" "}
              {/* Add padding here for spacing */}
              <NewsCard
                image={blog.image}
                title={blog.title}
                link={blog.link}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
