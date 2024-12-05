import { LuServerOff } from "react-icons/lu";
import { SiAzuredevops } from "react-icons/si";
import { CgWebsite } from "react-icons/cg";
import { FaCloud } from "react-icons/fa6";
import { FaMobileScreenButton } from "react-icons/fa6";
import { BsPlugin } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function Features() {
  const dataFeatures = [
    {
      id: 1,
      title: "Serverless Computing",
      icon: <LuServerOff fontSize="25px" />,
      content:
        "We specialize in serverless computing, enabling you to build app functionality without the hassle of infrastructure management. Let the cloud provider handle setup, capacity planning, and server management. We architect serverless applications to be highly scalable and event-driven, utilizing resources only when a specific function or trigger occurs.",
      link: "/serverless computing",
    },
    {
      id: 2,
      title: "DevOps",
      icon: <SiAzuredevops fontSize="25px" />,
      content:
        "At Stigmata Techno Solutions, we offer agile DevOps services that intelligently automate your entire development and operations process. Our approach ensures the creation of high-quality, secure code by providing agile development, continuous integration, continuous security, continuous testing, and continuous delivery.",
      link: "/devops",
    },
    {
      id: 3,
      title: "Web Application Development",
      icon: <CgWebsite fontSize="25px" />,
      content:
        "At Stigmata Techno Solutions, we leverage cutting-edge AI to drive innovation and efficiency. Our solutions optimize processes, enhance decision-making, and deliver personalized customer experiences. From machine learning to natural language processing and predictive analytics, we unlock AI's full potential for your needs.",
      link: "/software development",
    },
    {
      id: 4,
      title: "Cloud Migration",
      icon: <FaCloud fontSize="25px" />,
      content:
        "Thinking about moving your workloads to the cloud, whether it's your applications, database, or server? Unsure where to start? Stigmata Techno Solutions is here to assist your organization in migrating servers, databases, applications, and emails to cloud, dedicated, and virtual environments, with a strong focus on security.",
      link: "/cloud migration",
    },
    {
      id: 5,
      title: "Mobile App Development",
      icon: <FaMobileScreenButton fontSize="25px" />,
      content:
        "Our team excels in developing robust and scalable web portals tailored to your enterprise's unique needs. By combining innovative technology with user-centric design, we deliver portals that enhance collaboration, streamline workflows, and improve overall efficiency.",
      link: "/mobile app development",
    },
    {
      id: 6,
      title: "Plugin Development",
      icon: <BsPlugin fontSize="25px" />,
      content:
        "We develop customized plugins for business applications, utilizing innovative approaches throughout our development lifecycle. With extensive experience in creating plugins for Atlassian products (Confluence, JIRA, BitBucket, DevOps, SonarQube, Jenkins), we ensure governance and compliance are maintained.",
      link: "/plugin-development",
    },
  ];

  return (
    <div className="relative mt-20">
      <div className="text-center py-[10px]">
        <span

          data-aos="zoom-out"
          data-aos-duration="500"
          data-aos-once="true"
          className="bg-neutral-900 text-white rounded-full h-6 text-sm font-medium px-2 py-1 uppercase"
        >
          An Emerging Player In
        </span>
        <h2 data-aos="zoom-in" className="text-[35px] my-[1rem]  mt-6  tracking-wide">
          Software Development/ <br />
          Automation
          <span className="ml-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Services
          </span>
        </h2>
      </div>

      {/* Grid Layout */}
          
          <div data-aos="zoom-in"  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 lg:mt-20">
        {dataFeatures.map((feature, index) => (
          <div 
        
           key={index} className="p-4">
            <div className="flex flex-col items-start bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300">
              <div className="flex items-center justify-center bg-gradient-to-r from-primary to-secondary text-white rounded-full h-14 w-14 mb-6">
                {feature.icon}
              </div>
              <h5 className="text-2xl font-semibold mb-4">{feature.title}</h5>
              <p className="text-md text-neutral-500 mb-6">{feature.content}</p>
              <Link
                to={feature.link}
                className="text-black font-semibold hover:text-secondary transition duration-300"
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
