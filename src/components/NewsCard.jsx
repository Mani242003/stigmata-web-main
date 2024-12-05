const NewsCard = ({ image, title, link }) => {
  return (
    <section
      data-aos="zoom-in"
      className="  flex w-[19rem] flex-col  gap-6 overflow-hidden"
    >
      <div className="">
        {/* <img
            
            src={image}
            alt="thumbnail"
          /> */}

        <img
          loading="lazy"
          role="presentation"
          src={image}
          srcSet={`${image}?w=500&h=500&fit=crop 500w, ${image}?w=1000&h=1000&fit=crop 1000w`}
          sizes="(max-width: 600px) 500px, 1000px"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
          }}
          className="  h-[200px] object-cover hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer"
          alt="Description of the image"
          // priority={data.isImportant ? true : false}
        />
      </div>
      <div className="flex flex-col">
        <h5 className="text-[19px]  font-semibold mb-4 text-desGray">
          {title}
        </h5>
        <a className="underline text-black-100 w-fit" href={link}>
          Read More
        </a>
      </div>
    </section>
  );
};

export default NewsCard;
