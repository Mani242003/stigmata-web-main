/* eslint-disable react/no-unknown-property */
// import Image1 from "../../assets/home/bg1.png";
// import Image2 from "../../assets/home/bg2.png";
// import Image3 from "../../assets/home/bg3.png";
// import Image4 from "../../assets/home/bg4.png";

import Slider from "react-slick";
import { Link } from "react-router-dom";

const ImageList = [
  {
    id: 1,
    // img: Image1,
    title: "Super charge your Business with, Artificial Intelligences.",
    description:
      "Unlock next-level business growth with AI solutions. Let's go!",
  },
  {
    id: 2,
    // img: Image2,
    title:
      "Thinking of Cloud Migration, DevOps, Serverless framework Architecture?",
    description: "OUR Experts are Waiting!",
  },
  {
    id: 3,
    // img: Image3,
    title: "Expert in Software Development ",
    description: "ERP, Workflow, Plugins, API development.",
  },
  {
    id: 4,
    // img: Image4,
    title: "You Imagine a Digital Future,We make it a Reality!",
    description: "ERP, Workflow, Plugins, API development.",
  },
];

const Hero = () => {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <>
      <div className="relative overflow-hidden min-h-[550px] sm:min-h-[350px] bg-bodyBg  flex   dark:bg-gray-950 dark:text-white duration-200 ">
        {/* background pattern */}
        <div className="h-[560px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z[8]"></div>
        {/* hero section */}
        <div className="container  sm:h-[550px] pt-[2rem] sm:pt-[4rem] sm:pb-0">
          <Slider {...settings}>
            {ImageList.map((data) => (
              // eslint-disable-next-line react/jsx-key
              <div>
                <div className="grid grid-cols-1 sm:grid-cols-2">
                  {/* text content section */}
                  <div className="flex flex-col  gap-4 pt-[0px]  text-center sm:text-left order-2 sm:order-1 relative z-10 justify-center">
                    <h1
                      data-aos="zoom-out"
                      data-aos-duration="500"
                      data-aos-once="true"
                      className="text-3xl sm:text-5xl font-bold leading-tight mt-[1rem] sm:mt-[0rem] "
                    >
                      {data.title}
                    </h1>
                    <p
                      data-aos="fade-up"
                      data-aos-duration="500"
                      data-aos-delay="100"
                      className="text-sm my-4"
                      data-aos-once="true"
                    >
                      {data.description}
                    </p>
                    <div>
                      <Link
                        to="/contact-us"
                        className="bg-green tracking-wide hover:scale-105 duration-200 text-white py-2 px-4 rounded"
                      >
                        Talk to Experts
                      </Link>
                    </div>
                  </div>
                  {/* image section */}
                  <div className="order-1 sm:order-2 ">
                    <div
                      data-aos="zoom-in"
                      data-aos-once="true"
                      className=" z-10 flex flex-col  mt-0"
                    >
                      {/* <img
                          loading="lazy"
                          role="presentation"
                          src={data.img}
                          srcSet={`${data.img}?w=500&h=500&fit=crop 500w, ${data.img}?w=1000&h=1000&fit=crop 1000w`}
                          sizes="(max-width: 600px) 500px, 1000px"
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            objectPosition: "center",
                          }}
                          alt="Description of the image"
                          priority={data.isImportant ? true : false}
                        /> */}

                      {/* <img src={data.img} alt="" className="w-full" /> */}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Hero;
