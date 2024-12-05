
import NewsCard from "../components/NewsCard";
import newsData from "../data/newsData";

const News = () => {
  return (
    <div className="w-full py-[2rem] overflow-hidden" >
      <div className="  pl-[2rem] sm:pl-[6.7rem] pb-[2rem]  ">
        
        <h2 className="text-4xl    tracking-wide">
             
              News

        </h2>
       
      </div>
      <div className="flex items-center justify-center">
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
