import React from "react";
// import "./GalleryDrawer.scss";
import { Scrollbars } from "react-custom-scrollbars-2";
import img1 from "/images/news/n3.jpg";
import img2 from "/images/news/n6.jpg";
import img3 from "/images/news/n6.jpg";
import img4 from "/images/news/n6.jpg";
import logo from "/logo.svg";
import { IoCloseSharp } from "react-icons/io5";
// import post1 from "../../../assets/images/news/img1.jpg";
// import post2 from "../../../assets/images/news/img4.jpg";
// import post3 from "../../../assets/images/news/img3.jpg";
// import post4 from "../../../assets/images/news/img1.jpg";

const GalleryDrawer = ({ isOpenGallery, toggleGalleryDrawer }) => {
  return (
    <>
      {isOpenGallery && (
        <div
          className="absolute fixed top-0 right-0 w-full h-full bg-black bg-opacity-70 z-50 transition-all duration-300 ease-in-out hidden md:block"
          onClick={toggleGalleryDrawer}
        ></div>
      )}

      <div
        className="sgalleryDrawer absolute top-0 w-[29%] h-full bg-white z-[1000] flex flex-col transition-all duration-300 ease-in-out hidden md:flex px-6 pb-12"
        style={
          isOpenGallery
            ? { transform: "translateX(0)" }
            : { transform: "translateX(-100%)" }
        }
      >
        {" "}
        <Scrollbars
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <div className="gallerCloseContainer w-full py-3 flex items-center justify-end">
            <IoCloseSharp
              className="rounded-full mr-4 cursor-pointer bg-primary text-white text-xl "
              onClick={toggleGalleryDrawer}
            />
          </div>
          <div className="w-full flex flex-col gap-4 pb-4">

                        <img
                          loading="lazy"
                          role="presentation"
                          src={logo}
                          srcSet={`${logo}?w=500&h=500&fit=crop 500w, ${logo}?w=1000&h=1000&fit=crop 1000w`}
                          sizes="(max-width: 600px) 500px, 1000px"
                          alt="Description of the image"
                          className="w-48" 
                           
                          // priority={data.isImportant ? true : false}
                        />
            <span className="text-sm font-medium text-gray-700 tracking-wide">
              "Transforming Ideas into Reality with Excellence"
            </span>
          </div>

          <span className="text-xl font-extrabold text-gray-700 tracking-wide mt-4">
            Gallery Posts
          </span>

          <div className="flex flex-col gap-2 mt-4 pt-8 border-t border-gray-300 ">
            <div className="flex">
              <img src={img1} width={100} alt="" className="w-28 ml-2" />
              <img src={img2} width={100} alt="" className="w-28 ml-2" />
            </div>
            <div className="flex">
              <img src={img3} width={100} alt="" className="w-28 ml-2" />
              <img src={img4} width={100} alt="" className="w-28 ml-2" />
            </div>
          </div>

          <span className="text-xl font-extrabold text-gray-700 tracking-wide mt-4">
            Working Hours
          </span>

          <div className="mt-4 pt-8 border-t border-gray-300 flex justify-between">
            <span className="text-sm font-medium text-gray-900">
              Mon - Fri:
            </span>
            <span className="text-sm font-medium text-gray-700">
              10:30 AM - 7:00 PM
            </span>
          </div>

          <div className="mt-4 pt-8 border-t border-gray-300 flex justify-between">
            <span className="text-sm font-medium text-gray-900">Saturday:</span>
            <span className="text-sm font-medium text-gray-700">
              10:30 AM - 06:00 PM
            </span>
          </div>

          <div className="mt-4 pt-8 border-t border-gray-300 flex justify-between">
            <span className="text-sm font-medium text-gray-900">Sunday:</span>
            <span className="text-sm font-medium text-gray-700">
              10:30 AM - 02:00 PM
            </span>
          </div>
        </Scrollbars>
      </div>
    </>
  );
};

export default GalleryDrawer;
