import React from 'react'
import BlogList from '../pages/BlogList'

const BlogComponent = () => {
  return (
    <section>
  <div className="container mx-auto px-4 pt-[2rem] overflow-hidden">
   

    <div  data-aos="zoom-out"
              data-aos-duration="500"
               className="text-center ">
        <span className="bg-neutral-900 text-white rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
        Explore our blogs

        </span>
        <h2 className="text-4xl  mt-6   tracking-wide">
        Latest 
          <span className="ml-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Blogs
          </span>
        </h2>
      </div>

    <BlogList isHomePage={true} />
  </div>
</section>

  )
}

export default BlogComponent