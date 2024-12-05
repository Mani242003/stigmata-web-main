import imageUrl from "/images/aboutUsBg.jpg";
import { useState } from "react";

import acc1 from "/images/ceoAboutUs.png";
import ourStory from "/images/ourstory.jpg";
import visionAndMission from "/images/visionAndMission.jpg";
import Count from "../components/Count/Count";
import TechBrains from "../components/TechBrains";


const accordionData = [
  {
    title: "DevOps",
    content:
      "Our agile DevOps services empower companies to automate their entire development and operations processes intelligently. This approach ensures the creation of high-quality, secure code through agile development, Continuous Integration, Continuous Security, Continuous Testing, and Continuous Delivery.",
  },
  {
    title: "Web Application Development",
    content:
      "We are experts in developing web applications with state-of-the-art technology, and we have a great deal of experience with Java frameworks. Our methodology guarantees dependable, expandable, and efficient web solutions customized to fulfill your business requirements.",
  },
  {
    title: "Cloud Migration",
    content:
      "Planning to move your workloads to the cloud but unsure where to start? Stigmata Techno Solutions specializes in migrating your servers, databases, applications, and emails to cloud, dedicated, and virtual environments, making the transition seamless and secure.",
  },
  {
    title: "Mobile App Development",
    content:
      "With extensive expertise in Java frameworks, we excel in using React Native for mobile app development. This hybrid approach ensures cross-platform compatibility, providing cost-effective and timely solutions. The robust React Native community support further enhances development efficiency.",
  },
  {
    title: "Plugin Development",
    content:
      "We develop customized plugins tailored to your business applications. Our innovative development approach and extensive experience with ATLASSIAN tools (Confluence, JIRA, BitBucket, DevOps, SonarQube, Jenkins, and governance & compliance) ensure that your plugins meet your specific needs. If you have any customized plugin requirements, feel free to reach out to us. We would be happy to develop.",
  },
  {
    title: "Software Application Development",
    content:
      "At Stigmata Techno Solutions, we specialize in the full lifecycle of software application development, from analysis and design to deployment and security testing, addressing and automating client pain points. We create custom software solutions to tackle everyday business challenges and improve efficiency.",
  },
  {
    title: "Artificial Intelligence",
    content:
      "Leveraging AI for data analysis, predictive analytics, and custom AI solutions.",
  },
];

const services = [
   { subtitle1: "Excellence in Software Development", description1: "We are committed to crafting the best software with a seamless and user-friendly journey for our clients. Our focus on quality ensures that our clients receive solutions that are reliable, efficient, and tailored to their needs." },
  { subtitle1: "Dedicated Customer Support", description1: "Our straightforward and effective customer approach is backed by a team that is equally responsible for supporting our clients at all times. We prioritize clear communication and prompt resolution of any issues." },
  { subtitle1: "Talented and Motivated Team", description1: "We recognize that a successful company is built on the strength of its people. We are fortunate to have a skilled team of professionals who bring their expertise and passion to provide superior service to our clients." },
  { subtitle1: "Empowerment and Collaboration", description1: "We believe in the power of people and technology as the driving force behind our success. Empowering our team leads to outstanding performance and, ultimately, higher client satisfaction." },
  { subtitle1: "Nurturing a Creative Workspace", description1: "We foster a pleasant, creative, and collaborative work environment. By encouraging team effort, education, growth opportunities, and rewarding good performance, we cultivate a culture of innovation and excellence." },
  { subtitle1: "Commitment to Total Quality", description1: "Pursuing total quality and delivering on our promises is central to who we are at Stigmata Techno Solutions. We take pride in our work and strive to exceed our clients' expectations with every project." }
];

const Aboutus = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleAccordionClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const AccordionItem = ({ title, content, isOpen, onClick, index }) => {
    return (
      <div className="border border-gray-300 rounded-lg shadow-sm mb-4">
        <div
          className="flex items-center p-4 bg-blue-50 cursor-pointer hover:bg-blue-100"
          onClick={onClick}
        >
          <div className="w-10 h-10 flex items-center justify-center bg-blue-600 text-white font-bold rounded-full">
            {String(index).padStart(2, "0")}
          </div>
          <div className="ml-4 font-semibold text-blue-900">{title}</div>
        </div>
        {isOpen && (
          <div className="p-4 bg-white text-gray-700">
            <div className="text-sm sm:text-base">{content}</div>
          </div>
        )}
      </div>
    );
  };

  return (
    <>
      <AboutUsBanner />
      {/* what we do text */}
      <div className="flex flex-col items-center py-9 px-2">
        <span className="text-black text-4xl leading-6 font-bold"></span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl tracking-wide">
          <span
            data-aos="zoom-out"
            data-aos-duration="500"
            data-aos-once="true"
            className="text-black text-opacity-80 bg-clip-text"
          >
            What We Do
          </span>
        </h2>
        <p className="text-gray-600 mb-2 w-9/10  text-base leading-6 text-center mt-10 x text-start ml-[1rem]  ">
        Stigmata offers a comprehensive suite of business-focused cloud
          transformation services, spanning across private, public, hybrid, and
          multi-cloud environments. Our team specializes in cloud consulting
          services, assessing legacy architectures and crafting strategic
          roadmaps for transformation. With expertise in cloud application
          development, we facilitate seamless migrations to advanced cloud
          environments, incorporating cloud AWS services and Azure services for
          robust, scalable solutions. As a cloud solutions provider, we provide
          24/7 managed support to help businesses accelerate technology
          adoption. Our innovative use of cloud AI/ML technologies and custom
          cloud products further enhances operational efficiency and agility on
          the cloud.
        </p>
        
      </div>
      {/* accordian */}
      <div className="flex flex-col sm:flex-row font-sans">
        {/* Left Side Accordion */}
        <div className="w-full sm:w-1/2 p-6 overflow-y-auto">
          {accordionData.map((item, index) => (
            <AccordionItem
              key={index}
              index={index + 1}
              title={item.title}
              content={item.content}
              isOpen={openIndex === index}
              onClick={() => handleAccordionClick(index)}
            />
          ))}
        </div>

        {/* Right Side Static Image */}
        <div className="w-full sm:w-1/2 flex items-center justify-center p-6">
          <img
            src={acc1}
            alt="Static Reference"
            className="max-w-full max-h-full rounded-lg shadow-lg"
          />
        </div>
      </div>
      {/* our story */}
      <div className="flex flex-col-reverse lg:flex-row p-8 bg-[#f1f2f5]">
        <div className=" flex-1 flex items-center justify-center mb-6 md:mb-0 p-[0] sm:p-[2rem]">
          <img src={ourStory} alt="" className="rounde" />
        </div>
        <div className="ourStoryRight flex-1 flex flex-col pt-4 text-start">
          <h2 className="text-4xl    mt-6  tracking-wide lg:text-center mb-8">
            OUR
            <span className="ml-2 bg-gradient-to-r  from-primary to-secondary bg-clip-text text-transparent">
              STORY
            </span>
          </h2>
          <p className="text-gray-600 mb-2">
          Founded in 2014, Stigmata Techno Solutions emerged with a mission to
            bridge the technical gap within educational institutions. We offered
            specialized technical training through guest lectures, workshops,
            value-added courses, internships, and research projects to empower
            students and academic institutions.
            <br />
            <br />
            In 2019, we evolved, expanding our focus to the dynamic realm of
            software development. Our expertise now spans creating websites, IT
            consulting, ERP development, plugin development, automation using
            web and AI technologies, and offering a range of digital services.
            We pride ourselves on providing customized IT solutions to customers
            worldwide.
            <br />
            <br />
            With a commitment to excellence and innovation, we continuously
            strive to stay ahead of industry trends, delivering cutting-edge
            technology and personalized services to meet the unique needs of our
            clients. At Stigmata Techno Solutions, your success is our priority.
            Let us transform your ideas into reality.
          </p>
        
        </div>
      </div>
      {/* vission And mission */}

      <div className="w-full flex flex-col p-8 lg:p-16">
        <div className="w-full text-center p-4 pb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl tracking-wide">
            <span
              data-aos="zoom-out"
              data-aos-duration="500"
              data-aos-once="true"
              className="text-black text-opacity-80 bg-clip-text"
            >
              We believe in The Power of Simple.
            </span>
          </h2>
        </div>
        <div className="flex flex-col lg:flex-row">
          <div className="flex-1 flex flex-col">
            <span className="text-4xl font-bold mb-4"></span>
            <h2 className="text-4xl  mt-6  tracking-wide mb-[2rem]">
              <span className=" bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mr-2">
              Mission 
              </span>
              &
              <span className="ml-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Vision
              </span>
            </h2>
            <p className="text-gray-600 mb-2">
            Our guiding principle is straightforward: to deliver exceptional
              quality service to our customers by prioritizing their needs and
              ensuring that technology serves as a catalyst for their business
              growth.
              <br />
              <br />
              Stigmata Techno Solutions comprises a vibrant team of dedicated
              professionals and consultants who excel in exceeding customer
              expectations with our deliverables and making a transformative
              impact worldwide.
            </p>
            
          </div>
          <div className="flex-1 mt-8 ml-0 sm:ml-[1rem] bg-black">
            <img src={visionAndMission} alt="" className="" />
          </div>
        </div>
      </div>
      {/* road Map */}

      <div className="bg-gray-100 py-12 px-6 sm:px-10 lg:px-24">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-8">
        
        {/* Description */}
        <p className="text-lg text-gray-600 mb-8 text-center leading-relaxed">
          At Stigmata Techno Solutions, our goal is to drive innovation and deliver high-quality software services to our customers. We strive to be at the forefront of technology, creating solutions that not only meet but exceed our clients' expectations.
        </p>
        
        {/* Roadmap Section */}
        <div className="roadmap-container">
         
          <h2 className="text-4xl    mt-6  tracking-wide lg:text-center mb-8">
          Our 
            <span className="ml-2 bg-gradient-to-r  from-primary to-secondary bg-clip-text text-transparent">
            Roadmap
            </span>
          </h2>
          {/* Roadmap Steps */}
          <div className="space-y-8">
            
            {/* Step 1 */}
            <div className="flex items-center">
              <div className="h-10 w-10 flex-shrink-0 rounded-full bg-blue-500 text-white flex items-center justify-center font-semibold">1</div>
              <div className="ml-6">
                <h4 className="text-lg font-semibold text-gray-800">Expand Client Base</h4>
                <p className="text-gray-600">
                  Grow our client base to 100+ trusted partners, fostering strong relationships built on reliability and excellence.
                </p>
              </div>
            </div>
            
            {/* Step 2 */}
            <div className="flex items-center">
              <div className="h-10 w-10 flex-shrink-0 rounded-full bg-blue-500 text-white flex items-center justify-center font-semibold">2</div>
              <div className="ml-6">
                <h4 className="text-lg font-semibold text-gray-800">Scale Operations</h4>
                <p className="text-gray-600">
                  Increase our operational capacity to meet the growing demands of our clients and expand our market impact.
                </p>
              </div>
            </div>
            
            {/* Step 3 */}
            <div className="flex items-center">
              <div className="h-10 w-10 flex-shrink-0 rounded-full bg-blue-500 text-white flex items-center justify-center font-semibold">3</div>
              <div className="ml-6">
                <h4 className="text-lg font-semibold text-gray-800">Innovate Continuously</h4>
                <p className="text-gray-600">
                  Focus on continuous innovation to integrate the latest technologies and enhance our service offerings.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex items-center">
              <div className="h-10 w-10 flex-shrink-0 rounded-full bg-blue-500 text-white flex items-center justify-center font-semibold">4</div>
              <div className="ml-6">
                <h4 className="text-lg font-semibold text-gray-800">Establish Industry Leadership</h4>
                <p className="text-gray-600">
                  Become a prominent player in our vertical, renowned for excellence and quality in software solutions.
                </p>
              </div>
            </div>
          </div>
          
        </div>
        
        {/* Closing Statement */}
        <div className="mt-12 text-center">
          <p className="text-lg text-gray-600">
            Stigmata Techno Solutions is committed to continuous growth and excellence, always with an eye towards shaping a better future through technology.
          </p>
        </div>
      </div>
    </div>


    {/* principles */}

    <div className=" ">
      <div className=" mx-auto bg-white shadow-xl rounded-lg p-6  pb-[3rem]">
        
        {/* Section Title */}
        <h2 className="text-3xl font-semibold text-center text-black mb-8">
         
        </h2>

        <h2 className="text-4xl    mt-6  tracking-wide lg:text-center mb-8">
        Our 
            <span className="ml-2 bg-gradient-to-r  from-primary to-secondary bg-clip-text text-transparent">
            Principles
            </span>
          </h2>

        {/* Services Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6"> {/* Reduced gap between cards */}
          {/* Loop over services */}
          {services.map((service, i) => (
            <div
              key={i}
              className="flex flex-col p-4 bg-gray-100 text-black rounded-lg shadow-lg hover:scale-105 transform transition duration-300 ease-in-out"
            >
              <div className="mb-3">
                <h4 className="text-2xl font-semibold text-gray-900">{service.subtitle1}</h4>
                <p className="text-gray-700">{service.description1}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
<Count />
<TechBrains />

{/* brains */}


    


    </>
  );
};

export default Aboutus;

const AboutUsBanner = () => {
  return (
    <div className="DevOps_container">
      <div
        className="DevOpsMainHeader h-[400px] sm:h-[400px] md:h-[400px] flex flex-col items-start justify-center px-6 sm:px-10 md:px-16 text-white"
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      >
        <span className=" text-white text-4xl sm:text-5xl font-normal font-extrabold tracking-wider leading-tight  block mb-4 mt-9">
          Welcome To Stigmata <br />
          Techno Solutions
        </span>
        <span className=" text-white text-4xl font-semibold block mt-5 ">
          About US
        </span>
      </div>
    </div>
  );
};
