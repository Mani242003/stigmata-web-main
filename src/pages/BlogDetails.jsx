import { useEffect } from "react";
import { useParams, Navigate } from "react-router-dom"; // Use Navigate instead of Redirect
import Helmet from "../components/Helmet/Helmet.jsx";
import { Link } from "react-router-dom";

import commentImg from "/images/icons/avatar.png";
import blogData from "../data/blogData.js";

const BlogDetails = () => {
  const { slug } = useParams();
  const blog = blogData.find((blog) => blog.title === slug);

  // Redirect if blog not found using Navigate
  if (!blog) {
    return <Navigate to="/404" />; // Use Navigate to redirect
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [blog]);

  return (
    <Helmet title={blog.title}>
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="lg:flex gap-8">
            <div className="lg:w-2/3 md:w-full">
              <div className="blog__details">
                <img src={blog.imgUrl} alt="" className="w-full" />
                <h2 className="section__title mt-4 text-2xl font-semibold">{blog.title}</h2>

                <div className="blog__publisher flex items-center gap-4 mb-4">
                  <span className="blog__author flex items-center gap-1 text-titleBlue">
                    <i className="ri-user-line"></i> {blog.author}
                  </span>

                  <span className="flex items-center gap-1 text-gray-600">
                    <i className="ri-calendar-line"></i> {blog.date}
                  </span>

                  <span className="flex items-center gap-1 text-gray-600">
                    <i className="ri-time-line"></i> {blog.time}
                  </span>
                </div>

                <p className="text-lg text-gray-700">{blog.description}</p>
                <h6 className="ps-5 font-normal">
                  <blockquote className="text-xl text-gray-600">{blog.quote}</blockquote>
                </h6>
                <p className="text-lg text-gray-700">{blog.description}</p>
              </div>

              <div className="comment__list mt-5">
                <h4 className="mb-5 text-xl font-semibold">1 Comments</h4>

                <div className="single__comment flex gap-3 mb-4">
                  <img src={commentImg} alt="" className="w-16 h-16 rounded-full border-2 border-blue-900 object-cover" />
                  <div className="comment__content">
                    <h6 className="font-semibold">Stigmata Team</h6>
                    <p className="text-gray-600 mb-0">14 July, 2022</p>
                    <p className="text-gray-700">
                    Great post! I really enjoyed reading this article. The insights about modern web development trends are spot on. Keep up the good work!
                    </p>

                    <span className="replay flex items-center gap-1 text-blue-900 font-semibold cursor-pointer">
                      {/* <i className="ri-reply-line"></i> Reply */}
                    </span>
                  </div>
                </div>

                {/* =============== comment form ============ */}
                <div className="leave__comment-form mt-5">
                  <h4 className="text-xl font-semibold">Leave a Comment</h4>
                  <p className="text-gray-600">
                    You must sign-in to make or comment a post
                  </p>

                  <form>
                    <div className="flex gap-3 mb-4">
                      <input type="text" placeholder="Full name" className="w-full py-2 px-3 border border-gray-300 rounded-md" />
                      <input type="email" placeholder="Email" className="w-full py-2 px-3 border border-gray-300 rounded-md" />
                    </div>

                    <div>
                      <textarea
                        rows="5"
                        className="w-full py-2 px-3 border border-gray-300 rounded-md"
                        placeholder="Comment..."
                      ></textarea>
                    </div>

                    <button className="btn comment__btn mt-3 bg-blue-900 text-white py-2 px-4 rounded-md">
                      Post a Comment
                    </button>
                  </form>
                </div>
              </div>
            </div>

            <div className="lg:w-1/3 md:w-full mt-8 lg:mt-0">
              <div className="recent__post mb-4">
                <h5 className="font-semibold">Recent Posts</h5>
              </div>
              {blogData.map((item) => (
                <div className="recent__blog-post mb-4" key={item.id}>
                  <div className="recent__blog-item flex gap-3">
                    <img src={item.imgUrl} alt="" className="w-1/4 rounded-2xl" />
                    <h6>
                      <Link to={`/blogs/${item.title}`} className="text-titleBlue font-semibold hover:underline">
                        {item.title}
                      </Link>
                    </h6>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Helmet>
  );
};

export default BlogDetails;
