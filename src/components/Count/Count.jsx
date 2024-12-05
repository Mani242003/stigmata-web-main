import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import lottie from "../../assets/Animation - 1716198686129.json";

const Count = () => {
  const [counterOn, setCounterOn] = useState(false);

  const CustomCountContainer = ({ num, text1, text2, id }) => {
    return (
      <div className="flex gap-5 items-center justify-start transition-transform transform hover:scale-105  duration-300 ">
        <div className="flex items-center">
          <span className="text-5xl font-semibold">
            {counterOn && (
              <CountUp start={0} end={num} duration={6} delay={0} />
            )}
            {id === "true" ? "K" : ""}+
          </span>
        </div>
        <div className="flex flex-col justify-center border-b-4 border-white pb-2">
          <span className="text-xl font-semibold">{text1}</span>
          <span className="text-sm text-[#d1d1d1]">{text2}</span>
        </div>
      </div>
    );
  };

  return (
    <ScrollTrigger
      onEnter={() => setCounterOn(true)} // Start counter animation when it enters the viewport
      onExit={() => setCounterOn(false)} // Stop counter animation when it exits the viewport
    >
      <section className="w-full  bg-gradient-to-r from-purple-700 to-blue-800 text-white  lg-py-16">
        <div className="flex flex-col items-center">
          <div className="w-full max-w-7xl flex flex-col md:flex-row justify-between items-center">
            <div className="p-12 w-full md:w-1/2 flex flex-col items-center md:items-start">
              <div className="pb-12">
                <span
                  data-aos="zoom-in"
                  className="text-4xl font-semibold text-center md:text-left whitespace-wrap sm:whitespace-nowrap"
                >
                  Loved by Customers. <br /> Made for the World.
                </span>
              </div>
              <div className="flex gap-12 flex-col md:flex-row w-full justify-between">
                <div className="flex flex-col gap-10">
                  <CustomCountContainer
                    num={1}
                    id="true"
                    text1="Users"
                    text2="Globally"
                  />
                  <CustomCountContainer
                    num={10}
                    text1="Countries"
                    text2="Served"
                  />
                  <CustomCountContainer
                    num={10}
                    text1="Years in"
                    text2="Business"
                  />
                </div>
                <div className="flex flex-col gap-10">
                  <CustomCountContainer
                    num={20}
                    text1="Employees"
                    text2="Worldwide"
                  />
                  <CustomCountContainer num={4} text1="Products" text2="" />
                  <div className="cursor-pointer border-2 border-white  py-2 px-6 flex items-center justify-center  transition-all transform hover:scale-105 w-[200px]">
                    <Link
                      to="/about-us"
                      className="text-white font-medium text-lg"
                    >
                      MORE ABOUT STIGMATA
                    </Link>
                    <FaChevronRight className="text-white transition-transform duration-300 ml-2" />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full hidden lg:block md:w-1/2 flex justify-center items-center">
              <Lottie
                animationData={lottie}
                loop={true}
                style={{ width: "500px" }}
              />
            </div>
          </div>
        </div>
      </section>
    </ScrollTrigger>
  );
};

export default Count;
