import React from "react";
import { Link } from "react-router-dom";
import blogData from "../data/blogData";

const BlogList = ({isHomePage}) => {
  return (
    <div className="flex flex-col sm:flex-row flex-wrap ">
 {
  blogData.map((item, index) => (
    isHomePage 
      ? (item.id === 1 || item.id === 2 || item.id === 3) && <BlogItem item={item} key={item.id} />
      : index < 6 && <BlogItem item={item} key={item.id} />
  ))
}

    </div>
  );
};

const BlogItem = ({ item }) => {
  const { imgUrl, title, author, date, description, time } = item;

  return (
    <div data-aos="zoom-in" className=" lg:w-1/3 md:w-1/2 sm:w-1/2 p-4 mb-5">
      <div className="border border-gray-200 rounded overflow-hidden">
        {/* <img src={} alt="" className="w-full" /> */}

        <img
          loading="lazy"
          role="presentation"
          src={imgUrl}
          srcSet={`${imgUrl}?w=500&h=500&fit=crop 500w, ${imgUrl}?w=1000&h=1000&fit=crop 1000w`}
          sizes="(max-width: 600px) 500px, 1000px"
          className="w-full"
          alt="Description of the image"
          // priority={data.isImportant ? true : false}
        />
        <div className="p-4">
          <Link
            to={`/blogs/${title}`}
            className="text-blue-900 text-lg font-semibold hover:text-black transition duration-300"
          >
            {title}
          </Link>
          <p className="text-gray-600 mt-3">
            {description.length > 100
              ? description.substr(0, 100)
              : description}
          </p>

          <Link
            to={`/blogs/${title}`}
            className="text-blue-900 font-semibold text-base mt-2 inline-block hover:text-black"
          >
            Read More
          </Link>

          <div className="border-t border-gray-200 pt-3 mt-3 flex items-center justify-between">
            <span className="text-titleBlue font-semibold flex items-center">
              <i className="ri-user-line mr-1 text-yellow-500"></i> {author}
            </span>

            <div className="flex items-center gap-3 text-gray-600">
              <span className="flex items-center gap-1">
                <i className="ri-calendar-line text-desGray"></i> {date}
              </span>

              <span className="flex items-center gap-1">
                <i className="ri-time-line text-desGray"></i> {time}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogList;
