import React, { useState } from "react";
 // Assuming this is needed for some additional custom styles
import { Link } from "react-router-dom";
import { FaAngleUp, FaAngleDown } from "react-icons/fa6";

const Drawer = ({ isOpen, toggleDrawer }) => {
  const [selected, setSelected] = useState(null);

  const accordianToggel = (i) => {
    setSelected(selected === i ? null : i);
  };

  return (
    <>
      {isOpen && (
        <div
          className="h-full w-full z-[1000]  absolute fixed top-0 left-0 bg-black bg-opacity-70 transition duration-300 ease-in-out"
          onClick={toggleDrawer}
        ></div>
      )}

      <div
        className="h-full fixed top-0 right-0 w-4/5 bg-black bg-opacity-85 z-[1000] flex flex-col transition-transform duration-300 ease-in-out"
        style={{ transform: isOpen ? "translateX(0%)" : "translateX(150%)" }}
      >
        <div className="NavDrawerRoutes flex flex-col">
          <div className="DrawerBottomSpace h-16" onClick={toggleDrawer}></div>

          <div className="accordian_D">
            {/* Section: What We Do */}
            <div className="item">
              <div
                className="flex justify-between items-center cursor-pointer my-2 mx-4 text-white"
                onClick={() => accordianToggel(1)}
              >
                <span className="text-lg font-semibold">What We Do</span>
                {selected === 1 ? (
                  <FaAngleUp className="text-xl" />
                ) : (
                  <FaAngleDown className="text-xl" />
                )}
              </div>
              <div
                className={`${
                  selected === 1 ? "h-auto" : "max-h-0"
                } overflow-hidden transition-all duration-300 bg-gray-700 p-0 mt-4`}
              >
                <div className="flex flex-col gap-2 pt-4 pb-2.5">
                  <Link
                    className="text-white text-[17px] no-underline pl-4 tracking-wide"
                    to="/serverless-computing"
                    onClick={toggleDrawer}
                  >
                    Serverless Computing
                  </Link>
                  <div className="border-b border-white/20"></div>
                  <Link
                    className="text-white text-[17px] no-underline pl-4 tracking-wide"
                    to="/devops"
                    onClick={toggleDrawer}
                  >
                    Devops
                  </Link>
                  <div className="border-b border-white/20"></div>
                  <Link
                    className="text-white text-[17px] no-underline pl-4 tracking-wide"
                    to="/mobile-app-development"
                    onClick={toggleDrawer}
                  >
                    Mobile App Development
                  </Link>
                  <div className="border-b border-white/20"></div>
                  <Link
                    className="text-white text-[17px] no-underline pl-4 tracking-wide"
                    to="/plugin-development"
                    onClick={toggleDrawer}
                  >
                    Plugin Development
                  </Link>
                  <div className="border-b border-white/20"></div>
                  <Link
                    className="text-white text-[17px] no-underline pl-4 tracking-wide"
                    to="/software-development"
                    onClick={toggleDrawer}
                  >
                    Software Application Development
                  </Link>
                  <div className="border-b border-white/20"></div>
                  <Link
                    className="text-white text-[17px] no-underline pl-4 tracking-wide"
                    to="/cloud-migration"
                    onClick={toggleDrawer}
                  >
                    Cloud Migration
                  </Link>
                  <div className="border-b border-white/20"></div>
                  <Link
                    className="text-white text-[17px] no-underline pl-4 tracking-wide"
                    to="/Artificial-intelligence"
                    onClick={toggleDrawer}
                  >
                    Artificial Intelligence
                  </Link>
                </div>
              </div>
            </div>

            {/* Section: Our Products */}
            <div className="item">
              <div
                className="flex justify-between items-center cursor-pointer my-2 mx-4 text-white"
                onClick={() => accordianToggel(3)}
              >
                <span className="text-lg font-semibold">Our Products</span>
                {selected === 3 ? (
                  <FaAngleUp className="text-xl" />
                ) : (
                  <FaAngleDown className="text-xl" />
                )}
              </div>
              <div
                className={`${
                  selected === 3 ? "h-auto" : "max-h-0"
                } overflow-hidden transition-all duration-300 bg-gray-700 p-0 mt-4`}
              >
                <div className="flex flex-col  gap-2 pt-4 pb-2.5">
                  <Link to="https://clousec.io/" className="text-white text-[17px] no-undertext-white text-sm no-underline pl-4 tracking-wide" >
                    ClouSec
                  </Link>
                  <div className="border-b border-white/20"></div>
                  <Link 
                  to="/home" className="text-white text-[17px] no-undertext-white text-sm no-underline pl-4 tracking-wide" >
                    Happiediner
                  </Link>
                  <div className="border-b border-white/20"></div>
                  <Link to="/home" className="text-white text-[17px] no-undertext-white text-sm no-underline pl-4 tracking-wide" >
                    PII Protector
                  </Link>
                </div>
              </div>
            </div>

            {/* Section: Our Expertise */}
            <div className="item">
              <div
                className="flex justify-between items-center cursor-pointer my-2 mx-4 text-white"
                onClick={() => accordianToggel(2)}
              >
                <span className="text-lg font-semibold">Our Expertise</span>
                {selected === 2 ? (
                  <FaAngleUp className="text-xl" />
                ) : (
                  <FaAngleDown className="text-xl" />
                )}
              </div>
              <div
                className={`${
                  selected === 2 ? "h-auto" : "max-h-0"
                } overflow-hidden transition-all duration-300 bg-gray-700 p-0 mt-4`}
              >
                <div className="flex flex-col gap-2 pt-4 pb-2.5">
                  <Link className="text-white text-[17px] no-underline pl-4 tracking-wide"># Heavy Construction Companies</Link>
                  <Link className="text-white text-[17px] no-underline pl-4 tracking-wide"># Power Transmission & Distribution</Link>
                  <Link className="text-white text-[17px] no-underline pl-4 tracking-wide"># Financial Institutions</Link>
                  <Link className="text-white text-[17px] no-underline pl-4 tracking-wide"># AWS Enterprises (CSPM tool – ClouSec)</Link>
                  <Link className="text-white text-[17px] no-underline pl-4 tracking-wide"># Digital Solutions for All Enterprises</Link>
                </div>
              </div>
            </div>

            {/* Section: Company */}
            <div className="item">
              <div
                className="flex justify-between items-center cursor-pointer my-2 mx-4 text-white"
                onClick={() => accordianToggel(4)}
              >
                <span className="text-lg font-semibold">Company</span>
                {selected === 4 ? (
                  <FaAngleUp className="text-xl" />
                ) : (
                  <FaAngleDown className="text-xl" />
                )}
              </div>
              <div
                className={`${
                  selected === 4 ? "h-auto" : "max-h-0"
                } overflow-hidden transition-all duration-300 bg-gray-700 p-0 mt-4`}
              >
                <div className="flex flex-col gap-2 pt-4 pb-2.5">
                  <Link to="/about-us"  className="text-white text-[17px] no-underline pl-4 tracking-wide"   onClick={toggleDrawer} >
                    About Us
                  </Link>
                  <div className="border-b border-white/20"></div>
                  <Link to="/contact-us" className="text-white text-[17px] no-underline pl-4 tracking-wide"   onClick={toggleDrawer}>
                    Contact Us
                  </Link>
                  <div className="border-b border-white/20"></div>
                  <Link to="/careers"  className="text-white text-[17px] no-underline pl-4 tracking-wide"   onClick={toggleDrawer} >
                    Careers
                  </Link>
                </div>
              </div>
            </div>

            {/* Section: Insights */}
            <div className="item">
              <div
                className="flex justify-between items-center cursor-pointer my-2 mx-4 text-white"
                onClick={() => accordianToggel(5)}
              >
                <span className="text-lg font-semibold">Insights</span>
                {selected === 5 ? (
                  <FaAngleUp className="text-xl" />
                ) : (
                  <FaAngleDown className="text-xl" />
                )}
              </div>
              <div
                className={`${
                  selected === 5 ? "h-auto" : "max-h-0"
                } overflow-hidden transition-all duration-300 bg-gray-700 p-0 mt-4`}
              >
                <div className="flex flex-col gap-2 pt-4 pb-2.5">
                  <Link  to="/blog" className="text-white text-[17px] no-underline pl-4 tracking-wide"   onClick={toggleDrawer}>
                    Blog
                  </Link>
                  <div className="border-b border-white/20"></div>

                  <Link
                    className="text-white text-[17px] no-underline pl-4 tracking-wide"
                    to="https://youtube.com/@stigmatatechnosolutionsclousec?si=-jlrQuNQ6ACViNae"
                  >
                    Youtube
                  </Link>
                  <div className="border-b border-white/20"></div>

                  <Link
                  
                    to="/news"
                    className="text-white text-[17px] no-underline pl-4 tracking-wide"
                    onClick={toggleDrawer}
                  >
                    News
                  </Link>
                </div>
              </div>
            </div>

            {/* Section: Contact Us */}
            <div className="pt-[0.3rem]">
              <div
                className="flex flex-col gap-2  pb-2.5"
                onClick={() => accordianToggel(6)}
              >
                <Link to="/contact-us"   onClick={toggleDrawer} className="text-white  no-underline pl-4 tracking-wide text-lg text-lg font-semibold" >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Drawer;
