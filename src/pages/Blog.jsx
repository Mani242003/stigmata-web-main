import BlogList from './BlogList'



const Blog = () => {
  return (
    <div>


<div className="bg-primary px-[1.5rem] py-[1.5rem]">
  <span className="text-white text-5xl font-bold">Blogs</span>
 
  
</div>
<BlogList isHomePage={false} />

    </div>
  )
}

export default Blog