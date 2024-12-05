import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player/youtube";
import { FaAngleRight } from "react-icons/fa6";
import SubHead from "../Atoms/subhead";
const DroneTech = () => {
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
    <section
      className="accordion_wrapper w-full pb-12 bg-gray-100 flex flex-col relative"
      id="Q&A"
    >
      <div className="accordion_container flex flex-col lg:flex-row h-auto lg:h-[610px] relative px-4">
        {/* Left Image (ReactPlayer) */}
        <div className="accordion_left_img1 w-full lg:w-[50%] flex justify-center items-center pt-4">
          <ReactPlayer
            width={playerSize.width}
            height={playerSize.height}
            url="https://youtu.be/zeOgk6KQAiY?si=aJAjxLV7UFo45hfy"
            playing={false}
            controls
            muted={true}
            // Apply grayscale filter to make video black & white
          />
        </div>

        {/* Left Section (Text) */}
        <div data-aos="zoom-in" className="accordion_left w-full lg:w-[50%] flex flex-col justify-center items-start p-0 sm:p-4 lg:p-8 space-y-4">
          <h2 className="text-4xl  mt-6  tracking-wide">
            Drone Video Analysis for
            <span className="ml-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Construction Progress
            </span>
          </h2>

          <span className="accordion_left_text1 text-md text-gray-600">
            Our web portal enables comprehensive drone video analysis to assess
            construction progress grid by grid based on
            <span className="text-blue-600">
              {" "}
              Video analytics, Image processing, and AI techniques{" "}
            </span>
            <br />
            <br />
            Experience seamless and accurate construction monitoring with our
            cutting-edge drone video analysis tool.
          </span>
          <div className="P_S-linkContainer flex items-center text-blue-600 hover:text-blue-800 mt-4">
            <Link
              to="https://youtu.be/zeOgk6KQAiY?si=nFicPDO--f_GTOty"
              target="_blank"
              rel="noopener noreferrer"
            >
              Know more
            </Link>
            <FaAngleRight className="ml-2 transition-transform hover:translate-x-1" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DroneTech;
