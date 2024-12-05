import { useState } from "react";
import Logo from "/logo.svg";
import { IoMdMenu } from "react-icons/io";
import { FaCaretDown, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoCallSharp } from "react-icons/io5";
import GalleryDrawer from "../GalleryDrawer/GalleryDrawer";
import Drawer from "../Drawer/Drawer";
import Marquee from "react-fast-marquee";

const Products = [
  {
    id: 1,
    name: "ClouSec",
    link: "https://clousec.io/",
  },
  {
    id: 2,
    name: "PII Protector",
    link: "#",
  },
  {
    id: 3,
    name: "Happiediner",
    link: "#",
  },
];

const Services = [
  {
    id: 1,
    name: "Serverless Computing",
    link: "/serverless-computing",
  },
  {
    id: 2,
    name: "DevOps",
    link: "/devops",
  },
  {
    id: 3,
    name: "Mobile App Development",
    link: "/mobile-app-development",
  },
  {
    id: 4,
    name: "Plugin Development",
    link: "/plugin-development",
  },
  {
    id: 5,
    name: "Software Application Development",
    link: "/software-development",
  },
  {
    id: 6,
    name: "Cloud Migration",
    link: "/cloud-migration",
  },
  {
    id: 7,
    name: "Artificial intelligence",
    link: "/Artificial-intelligence",
  },
];

const Insights = [
  {
    id: 1,
    name: "Blog",
    link: "/blog",
  },
  {
    id: 2,
    name: "Youtube",
    link: "https://youtube.com/@stigmatatechnosolutionsclousec?si=-jlrQuNQ6ACViNae",
  },
  {
    id: 3,
    name: "News",
    link: "/news",
  },
];

const Company = [
  {
    id: 1,
    name: "About Us",
    link: "/about-us",
  },
  {
    id: 2,
    name: "Contact Us",
    link: "/contact-us",
  },
  {
    id: 3,
    name: "Careers",
    link: "/careers",
  },
];
const Expertise = [
  {
    id: 1,
    name: "Heavy Construction Companies",
  },
  {
    id: 2,
    name: "Power Transmission & Distribution",
  },
  {
    id: 3,
    name: "Financial institutions",
  },
  {
    id: 4,
    name: "AWS enterprises (CSPM tool – ClouSec)",
  },
  {
    id: 5,
    name: "Digital Solutions for all enterprises",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenGallery, setIsOpenGallery] = useState(false);
  const [marqueIsOpen, setmarqueIsOpen] = useState(true);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };
  const toggleGalleryDrawer = () => {
    setIsOpenGallery(!isOpenGallery);
  };
  return (
    <>
      <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
        {/* upper Navbar */}

        <>
          {marqueIsOpen && (
            <div className="w-full h-9 sm:h-[55px] bg-green flex items-center text-white px-2 justify-between">
              <Marquee speed={60} gradient={false}>
                <span className="font-medium text-base tracking-wide">
                  {" "}
                  We provide expert IT consultancy, software development, and
                  support for businesses of all sizes. Contact us today!
                </span>
              </Marquee>
              <div className="pl-2 flex items-center cursor-pointer">
                <FaTimes
                  onClick={() => {
                    setmarqueIsOpen(false);
                  }}
                />
              </div>
            </div>
          )}
        </>

        {/* lower Navbar */}
        <div
          data-aos="zoom-in"
          className="px-[20px] sm:px-[50px] py-3 flex justify-between"
        >
          <div>
            <Link
              to="/"
              className="font-bold text-2xl sm:text-3xl flex gap-2"
            >
             

                        <img
                          loading="lazy"
                          role="presentation"
                          src={Logo}
                          srcSet={`${Logo}?w=500&h=500&fit=crop 500w, ${Logo}?w=1000&h=1000&fit=crop 1000w`}
                          sizes="(max-width: 600px) 500px, 1000px"
                          className="w-[175px]" 
                          alt="Description of the image"
                           
                          // priority={data.isImportant ? true : false}
                        />
                   
              {/* <img src={} alt="Logo" className="w-[175px]" /> */}
            </Link>
          </div>
          <div>
            <ul className="lg:flex hidden items-center gap-9">
              {/* Simple Dropdown and Links */}
              <li className="group relative cursor-pointer">
                <a href="#" className="flex items-center gap-[4px] py-2">
                  What we do
                  <span>
                    <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                  </span>
                </a>
                <div className="absolute z-[9999] hidden group-hover:block w-[605px] rounded-md bg-white p-2 pl-4 text-black shadow-md w-[400px]">
                  <div className="flex gap-8">
                    <div>
                      <span className="text-xl  text-black-700 tracking-wide mt-4 ml-2 font-semibold">
                        Services
                      </span>
                      <ul>
                        {Services.map((data) => (
                          <li key={data.id}>
                            <Link
                              to={data.link}
                              className="inline-block w-full rounded-md p-2 hover:bg-primary/20 "
                            >
                              {data.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <span className="text-xl  text-black-700 tracking-wide mt-4 ml-2 font-semibold">
                        Our Expertise
                      </span>

                      <ul>
                        {Expertise.map((data) => (
                          <li key={data.id}>
                            <span
                              href={data.link}
                              className="inline-block w-full rounded-md p-2 cursor-default "
                            >
                              {data.name}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li className="group relative cursor-pointer">
                <Link to="#" className="flex items-center gap-[4px] py-2">
                  Our Products
                  <span>
                    <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                  </span>
                </Link>
                <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white p-2 text-black shadow-md">
                  <ul>
                    {Products.map((data) => (
                      <li key={data.id}>
                        <Link
                          to={data.link}
                          className="inline-block w-full rounded-md p-2 hover:bg-primary/20 "
                        >
                          {data.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
              <li className="group relative cursor-pointer">
                <Link to="#" className="flex items-center gap-[4px] py-2">
                  Company
                  <span>
                    <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                  </span>
                </Link>
                <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white p-2 text-black shadow-md">
                  <ul>
                    {Company.map((data) => (
                      <li key={data.id}>
                        <Link
                          to={data.link}
                          className="inline-block w-full rounded-md p-2 hover:bg-primary/20 "
                        >
                          {data.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
              <li className="group relative cursor-pointer">
                <a href="#" className="flex items-center gap-[4px] py-2">
                  Insights
                  <span>
                    <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                  </span>
                </a>
                <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white p-2 text-black shadow-md">
                  <ul>
                    {Insights.map((data) => (
                      <li key={data.id}>
                        <Link
                          to={data.link}
                          className="inline-block w-full rounded-md p-2 hover:bg-primary/20 "
                        >
                          {data.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
              <li>
                <Link
                  to="/contact-us"
                  className="inline-block px-4  duration-200"
                >
                  Contact us
                </Link>
              </li>
            </ul>
          </div>
          <Link
  to="/contact-us"
  className="bg-primary  transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group hover:bg-opacity-90 hover:scale-105 hover:shadow-lg"
>
  <span className="hidden sm:block transition-all duration-200">
    Schedule a Call
  </span>
  <IoCallSharp className="text-xl text-white drop-shadow-sm cursor-pointer" />
</Link>

          {window.innerWidth <= 1000 ? (

<div
  className="flex items-center justify-center w-12 h-10 bg-blue-100 rounded text-lg text-green-500 cursor-pointer hover:bg-blue-200 hover:scale-105 transition-all duration-200"
  onClick={toggleDrawer}
>
  <div className="sm:flex items-center justify-center text-black rounded-md gap-6 opacity-70 sm:text-3xl hover:opacity-100">
    <IoMdMenu className="text-2xl sm:text-3xl" /> {/* Icon size increased */}
  </div>
</div>
 
) : (
 

<div
  className="flex items-center justify-center w-12 h-10 bg-blue-100 rounded text-lg text-green-500 cursor-pointer hover:bg-blue-200 hover:scale-105 transition-all duration-200"
  onClick={toggleGalleryDrawer}
>
  <div className="sm:flex items-center justify-center text-black rounded-md gap-6 opacity-70 sm:text-3xl hover:opacity-100">
    <IoMdMenu className="text-1xl sm:text-3xl" /> {/* Icon size increased */}
  </div>
</div>
)}

        </div>
      </div>

      <GalleryDrawer
        isOpenGallery={isOpenGallery}
        toggleGalleryDrawer={toggleGalleryDrawer}
      />
      <Drawer
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        toggleDrawer={toggleDrawer}
      />
    </>
  );
};

export default Navbar;
