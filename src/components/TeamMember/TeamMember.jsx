import React from "react";
import img1 from "/images/ceo.png";
import img2 from "/images/youssef.jpeg";
import img3 from "/images/lawrence.jpeg";

const TeamMember = () => {
  return (
    <section className="bg-cover bg-center bg-no-repeat pb-16" style={{ backgroundImage: 'url(../../assets/branchBg.jpg)' }}>
      <div className="container mx-auto  px-6">
        

          <div className="text-center py-[3rem]">
        <span className="bg-neutral-900 text-white rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
        Our Amazing Team

        </span>
        <h2 className="text-4xl  mt-6  tracking-wide">
        The People Behind Our 
          <span className="ml-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Success
          </span>
        </h2>
      </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          <B_CustomCard
            name="Jerome Melkisidak, B.E, M.B.A"
            ceoText="CEO"
            url={img1}
            position="Board of Study Member : CSE, MCA"
            clgName="(SRM Valliammai Engineering College)"
            addText="Ex - TNQ Books & Journals"
          />
          <B_CustomCard
            name="Mr. Youssef Azad"
            url={img2}
            position="Business Development & Client Relationship"
            boldText="Canada"
          />
          <B_CustomCard
            name="Mr. Lawrence"
            url={img3}
            position="Business Development Head & Client Relationship"
            boldText="Zimbabwe"
          />
        </div>
      </div>
    </section>
  );
};

const B_CustomCard = ({ name, url, position, boldText, addText, ceoText, clgName }) => {
  return (
    <div    data-aos="zoom-out"
    data-aos-duration="500"
    data-aos-once="true" className=" w-full bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
      {/* Background Gradient on the card */}
      <div className="bg-gradient-to-r from-purple-700 to-blue-800 h-40 rounded-t-lg"></div>
      <div className="flex flex-col items-center p-6 -mt-[6rem]">
        {/* Increase image size and center it */}
        {/* <img src={} alt="Team Member" className="w-40 h-40 rounded-full border-4 border-white mb-6 shadow-lg" /> */}
        

                        <img
                          loading="lazy"
                          role="presentation"
                          src={url}
                          srcSet={`${url}?w=500&h=500&fit=crop 500w, ${url}?w=1000&h=1000&fit=crop 1000w`}
                          sizes="(max-width: 600px) 500px, 1000px"
                         
                          alt="Description of the image"
                           className="w-40 h-40 rounded-full border-4 border-white mb-6 shadow-lg"
                          // priority={data.isImportant ? true : false}
                        />
        <div className="text-center">
          <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
          <span className="block text-lg text-gray-600">{ceoText}</span>
          <p className="mt-3 text-base text-gray-700">
            {position}
            {clgName && <span className="block text-gray-500">{clgName}</span>}
            <br/>
            <span className="font-extrabold text-gray-900">{boldText}</span>
          </p>
          {addText && (
            <span className="mt-4 block text-lg font-semibold text-transparent bg-gradient-to-r from-purple-700 to-blue-800 bg-clip-text">
              {addText}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
