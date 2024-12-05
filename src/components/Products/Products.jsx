import { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight, FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import PropTypes from "prop-types";

const Products = () => {
  let sliderRef = useRef(null);

  const next = () => {
    sliderRef.slickNext();
  };

  const previous = () => {
    sliderRef.slickPrev();
  };

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  // Array containing all the product data
  const products = [
    {
      link: "-vLYTijz370",
      name: "ClouSec",
      num: "01",
      title: "Modernize Cloud Security. Outsmart Attackers.",
      des: "ClouSec is the first AI-driven CSPM tool with CCOE principles, providing insights into cloud infrastructure by identifying security misconfigurations, vulnerabilities, and configuration issues. It also supports cost management, asset management, and periodic user audits with detailed logs.",
      url: "https://clousec.io/",
    },
    {
      link: "jEwftk8SNuA",
      name: "Happiedineer",
      num: "02",
      title:
        "Modernize your Restaurants with Automation & Data-driven recommendation.",
      des: "Happiedinner is a Light weight Serverless architecture framework Providing digitalized Wow experience to end customers through, Digital menu's with ordering, Data Driven Recommendation, Digitalized Kitchen's, Last minute deals, Digital Payments.",
      url: "https://clousec.io/",
    },
    {
      link: "-vLYTijz370",
      name: "PII Protector",
      num: "03",
      title:
        "SAFEguard Personally Identifiable Information (PII) & be Compliant.",
      des: "In this data driven age, ensuring security and safeguarding individual's data have become Paramount concerns.  We handle PII information through, Define, Detect, User Access , Mask, Send email Alert's, Required logs for Auditing, Reports.",
      url: "https://clousec.io/",
    },
  ];

  return (
    <section className="w-full">
      <div className="w-full mb-12 bg-gradient-to-r from-purple-700 to-blue-800">
        <div className="">
          <div className="flex flex-wrap justify-between items-center w-full p-8 space-x-4 overflow-hidden">
            <h1
              data-aos="zoom-out"
              data-aos-duration="500"
              data-aos-once="true"
              className="text-2xl sm:text-3xl lg:text-5xl font-bold text-center text-white max-w-3xl mx-auto"
            >
              Happy customers. Energized employees. That’s impact.
            </h1>
          </div>

          <Slider
            {...settings}
            ref={(slider) => {
              sliderRef = slider;
            }}
          >
            {products.map((product, index) => (
              <div key={index}>
                <Video
                  key={index}
                  num={product.num}
                  name={product.name}
                  des={product.des}
                  title={product.title}
                  link={product.link}
                  url={product.url}
                />
              </div>
            ))}
          </Slider>
          <div className="flex justify-between items-center w-full p-8 space-x-4 overflow-hidden">
            <button
              className="p-3 bg-gray-200 hover:bg-gray-300 rounded-full transition-all duration-300 transform hover:scale-110 focus:outline-none"
              onClick={previous}
            >
              <FaArrowLeft className="text-blue-500 text-2xl" />
            </button>

            <button
              className="p-3 bg-gray-200 hover:bg-gray-300 rounded-full transition-all duration-300 transform hover:scale-110 focus:outline-none"
              onClick={next}
            >
              <FaArrowRight className="text-blue-500 text-2xl" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

Products.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      link: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      num: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      des: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Products;

const Video = ({ link, name, num, title, des, url }) => {
  const [playerSize, setPlayerSize] = useState({
    height: "100%",
    width: "100%",
  });

  // Set player size dynamically based on screen width
  useEffect(() => {
    function getPlayerSize() {
      const screenWidth = window.innerWidth;

      let height, width;
      if (screenWidth < 480) {
        height = "200px";
        width = "100%";
      } else if (screenWidth < 768) {
        // Mobile to small tablet
        height = "280px";
        width = "100%";
      } else if (screenWidth < 1024) {
        // Tablets to small desktops
        height = "300px";
        width = "100%";
      } else if (screenWidth > 1280) {
        // Large desktops
        height = "450px";
        width = "80%";
      } else {
        height = "350px";
        width = "100%";
      }

      setPlayerSize({ height, width });
    }

    getPlayerSize();
    window.addEventListener("resize", getPlayerSize);

    return () => window.removeEventListener("resize", getPlayerSize);
  }, []);

  return (
    <section className="flex items-center justify-center w-full px-4 ">
      <div className=" p-[1rem] flex w-full mt-4 border rounded-lg bg-white  flex-col md:flex-row gap-[1rem]">
        <div  className="flex-0 sm:flex-1 flex  justify-start items-start   ">
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${link}`}
            width={playerSize.width}
            height={playerSize.height}
            controls={true}
          />
        </div>

        <div data-aos="zoom-in" className="flex-0 sm:flex-1 flex flex-col  ">
          <div  className="relative  ">
            <div  className="w-full bg-black flex  text-center mt-[0rem] am:mt-[1rem]">
              <span className="absolute text-7xl font-extrabold text-gray-300 opacity-30">
                {num}
              </span>
            </div>
            <span
             
            className="text-xl  font-semibold bg-gradient-to-r from-[#0565fe] to-[#d241a4] text-transparent bg-clip-text  ">
              {name}
            </span>
          </div>

          <h3 className="text-lg font-bold text-black mb-2 mt-[2rem]">
            {title}
          </h3>
          <p className="text-md text-gray-600 mb-4">{des}</p>

          <div className="flex items-center gap-2 border border-[#d241a4] w-[132px] rounded-full py-2 px-4 cursor-pointer hover:translate-x-1 transition-transform">
            <Link
              to={`https://www.youtube.com/watch?v=${link}`}
              className="text-sm text-transparent bg-gradient-to-r from-[#0565fe] to-[#d241a4] bg-clip-text font-semibold"
            >
              Know more
            </Link>
            <FaAngleRight className="text-[#d241a4]" />
          </div>
        </div>
      </div>
    </section>
  );
};

Video.propTypes = {
  link: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  num: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  des: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
