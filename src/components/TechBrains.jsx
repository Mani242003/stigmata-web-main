import React, { useRef } from "react";
import Slider from "react-slick";

// import TB_CustomCard from "./TB_CustomCard/TB_CustomCard";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import ourBrains from "../data/ourBrains";
import ProgressBar from "@ramonak/react-progress-bar";
const TechBrains = () => {
  let sliderRef1 = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    cssEase: "ease-in-out",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const next1 = () => {
    sliderRef1.slickNext();
  };
  const previous1 = () => {
    sliderRef1.slickPrev();
  };

  return (
    <section className="bg-[#F5F9FC] pb-12">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="text-center py-[2rem] ">
          <span className="bg-neutral-900 text-white rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
            GREAT TEAM MEMBERS
          </span>
          <h2 className="text-4xl  mt-6  tracking-wide">
            WE HAVE EXPERT
            <span className="ml-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              TEAM
            </span>
          </h2>
        </div>
        <div className="flex items-center justify-center">
          <div className="flex items-center justify-center flex-wrap gap-4">
            {ourBrains.map((data) => (
              <TB_CustomCard key={data.id} data={data} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechBrains;

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none" }}
      onClick={onClick}
    />
  );
}

const TB_CustomCard = ({ data }) => {
  return (
    <div className="w-72 h-[25rem] p-6 m-5 bg-white rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
      {/* Profile Section */}
      <div className="flex flex-col items-center">
        <img
          src={data.img}
          alt={data.name}
          className="w-24 h-24 text-center rounded-full border-2 border-gray-300 shadow-sm"
        />
        <h2 className="text-lg font-semibold text-center text-gray-800 mt-4">
          {data.name}
        </h2>
        <p className="text-sm text-gray-500 text-center">{data.position}</p>
      </div>

      {/* Skills Section */}
      <div className="mt-6 space-y-4">
        {data.skills.map((skill) => (
          <div key={skill.skill} className="w-full">
            {/* Progress Bar Component without extra text above */}
            <ProgressBar
              completed={skill.precentage}
              customLabel={skill.skill} // The skill name will now appear on the progress bar itself
              margin="10px"
              baseBgColor="white"
              labelSize="10px"
              bgColor="#4A90E2" // You can change this color
              baseBgColor="silver"
              labelColor="black"
              labelAlignment="center"
              height="15px"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
