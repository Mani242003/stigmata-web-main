
import NewsCard from "../components/NewsCard";
import newsData from "../data/newsData";

const News = () => {
  return (
    <div className="w-full  overflow-hidden" >
      
      <div className="bg-primary px-[1.5rem] py-[1.5rem]">
  <span className="text-white text-5xl font-bold">News</span>
 
  
</div>
      <div className="flex items-center justify-center py-[2rem]">
          <div className="flex items-center justify-center flex-wrap gap-4">
            {newsData.map((blog) => (
              <div key={blog.id} className="px-3">
                {/* {" "} */}
                {/* Add padding here for spacing */}
                <NewsCard
                  image={blog.image}
                  title={blog.title}
                  link={blog.link}
                />
              </div>
            ))}
          </div>
        </div>
    </div>
  );
};

export default News;
