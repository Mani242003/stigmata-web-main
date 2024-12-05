import React from "react";
import { FiPhoneCall } from "react-icons/fi";
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa6";
import ReactPlayer from "react-player";

const AboutComponent = () => {
  function getPlayerSize() {
    const screenWidth = window.innerWidth;
    let height, width;

    if (screenWidth < 480) {
      height = "200px";
      width = "100%";
    } else if (screenWidth < 885) {
      height = "380px";
      width = "600px";
    } else if (screenWidth < 1290) {
      height = "380px";
      width = "600px";
    } else if (screenWidth > 1813) {
      height = "380px";
      width = "600px";
    }

    return { height, width };
  }

  const playerSize = getPlayerSize();

  return (
    <section className="w-full bg-[#F5F9FC]">
      <div className="w-full flex flex-col lg:flex-row py-8 px-4 lg:px-16">
        <div className="flex-1 flex justify-center lg:px-8">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=yJSWMYG8j-A"
            width={playerSize.width}
            height={playerSize.height}
            controls={true}
          />
        </div>
        <div data-aos="zoom-in" className="flex-1 flex flex-col py-12 lg:py-0">
          <span className="text-lg font-bold text-gray-700">Reach Out Us</span>

          <h2 className="text-4xl  mt-6  tracking-wide mb-8">
            We are excited to
            <span className="ml-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              connect
            </span>
            with you!
          </h2>
          <span className="text-base font-medium text-gray-700 leading-6">
            Have questions or need assistance? Our team is here to help! Contact
            us to learn more about our services and how we can support your
            needs.
          </span>
          <div className="mt-4 p-3 bg-white flex items-center gap-4 rounded-md cursor-pointer w-80">
            <div className="p-4 bg-blue-100 rounded-md">
              <FiPhoneCall className="text-4xl text-green-600" />
            </div>
            <div className="flex flex-col gap-1 pt-2">
              <span className="text-xs font-medium text-gray-700">
                24 HOURS SERVICE AVAILABLE
              </span>
              <span className="text-lg font-bold text-gray-800">
                Call Us: +91 9790845787
              </span>
            </div>
          </div>
          <div className="mt-4 w-32 bg-green-600 flex items-center justify-center gap-2 px-3 py-2 rounded-md hover:transform hover:translate-x-1 transition">
            <Link to="/about-us" className="text-white font-medium">
              ABOUT US
            </Link>
            <FaAngleRight className="text-white" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutComponent;
