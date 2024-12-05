
import Banner from "../../components/Banner/Banner";
import ServicesBanner from "../../components/ServicesBanner/ServicesBanner";
import imageUrl from "/images/mobileBg.jpg";

import sample1 from "/images/sample1.png";
import sample2 from "/images/sample2.png";

import img1 from "/images/icons/reactjsIcon.svg";
import img3 from "/images/icons/wordPress.svg";
import restApi from "/images/icons/restApi.svg"
import ios from "/images/icons/ios-1.svg";
import { BsFillRecord2Fill } from "react-icons/bs";


const MobileAppDevelopment = () => {
  const servicesData = {
    title: "Mobile Development with React Native",
    des: "At Stigmata Techno Solutions, we harness the power of React Native to create high-performance, cross-platform mobile applications that provide seamless user experiences.",
    image: imageUrl,
    isContact:false
  };
  const ServicesBannerData = {
    title: "Why Choose React Native for Mobile Development?",
    services: [
      {
        id1:1,
        id2:2,
        subtitle1: "Cross-Platform Compatibility :",
        description1:
          "React Native enables the development of applications that run smoothly on both iOS and Android platforms using a single codebase. This significantly reduces development time and costs while ensuring a consistent user experience across devices.",
        subtitle2: "Fast Development Cycles :",
        description2:
          "React Native’s hot-reloading feature allows developers to see the changes they make in real-time, speeding up the development process. This rapid iteration cycle means faster time-to-market for your mobile applications.",
      },
      {
        id1:3,
        id2:4,
        subtitle1: "Performance :",
        description1:
          "Built on top of the robust React framework, React Native apps are known for their high performance and responsiveness. The framework leverages native components, ensuring your apps run as smoothly as those built with native development languages.",
        subtitle2: "Strong Community Support :",
        description2:
          "React Native boasts a large and active developer community. This means continuous improvements, extensive libraries, and a wealth of shared knowledge, all of which contribute to the efficiency and innovation of your mobile projects.",
      },
    ],
    // "finalText1":"Stigmata Techno Solutions Is A 9+ Year Aged Firm Rendering Software, IT Development Services To Global Customers. We Are Specialized In Developing Applications, Digital Transformation For Specific Industries Like ",
    // "finalText2":"Heavy Construction Companies, Power Transmission & Distribution, Financial Institutions (Governance & Compliance Handling PII Data) And Securing Organisations Cloud Environment (ClouSec : CSPM Tool – Cloud Security). ",
    // "finalText3":"Our Key Focus Is To Provide World-Class Quality Service To Our Customers With Utmost Focus On Their Needs And To Ensure That Technology Supports Their Business Growth. We Would Be Happy To Get Associated With Your Esteemed Organization On Your Digital Transformation / Automation Reducing Manual Efforts And Cost.",

    buttonText: "Get Started",
  };

  return (
    <>
      <ServicesBanner data={servicesData} />
    
       <MobileDevelopmentSection />
      <Banner data={ServicesBannerData} />
      <WorkSample />
    </>
  );
};

export default MobileAppDevelopment;











// Import necessary libraries

const MobileDevelopmentSection = () => {
  return (
    <div className="flex  flex-col sm:flex-row-reverse">
    <div className="flex-shrink-0 flex justify-center items-center">
      <img src={ios} alt="" className="w-[20rem]  sm:w-88" />
    </div>
    <div className="flex justify-cent items-start flex-col p-[1rem] pt-0 sm:p-[3rem]">
      <span className="text-[35px] font-semibold">
        Transform Your Mobile Development with our React Native
      </span>
      <span className="mt-8 text-lg leading-8 tracking-wide">
        At Stigmata Techno Solutions, we harness the power of React Native to
        create high-performance, cross-platform mobile applications that provide
        seamless user experiences. Our expertise in React Native allows us to
        deliver cost-effective and efficient mobile solutions that meet the
        diverse needs of your business.
      </span>
      
    </div>
  </div>
  
  
  );
};




const WorkSample = () => {
  return (
    <section className="w-full" id="simplicity">
    <div className="flex flex-col md:flex-row items-start w-full bg-[#f3f5f9] p-8">
      <div className="p-4 md:p-8">
        <img src={sample2} alt="" className="w-[80rem]" />
      </div>

      <div className="flex flex-col p-4 md:p-8">
        <span className="text-4xl font-semibold tracking-wide">
          Mart Easy Mobile Application
        </span>
        <span className="my-4 text-lg leading-relaxed">
          Mart Easy is an Andaman island-based multiple vendor managed
          ecommerce product. Mart Easy manages 8 different categories of
          products with several subcategories.
        </span>
        <span className="font-semibold mb-4">Features :</span>

        <div className="flex items-center space-x-2">
          <BsFillRecord2Fill color="#5E6FEC" size={26} />
          <span className="text-gray-800 opacity-80">Login</span>
        </div>
        <div className="flex items-center space-x-2">
          <BsFillRecord2Fill color="#5E6FEC" size={26} />
          <span className="text-gray-800 opacity-80">Geofence Tracking</span>
        </div>
        <div className="flex items-center space-x-2">
          <BsFillRecord2Fill color="#5E6FEC" size={26} />
          <span className="text-gray-800 opacity-80">Grid Management</span>
        </div>

        <div className="flex flex-col md:flex-row items-center md:space-x-20 pt-8">
          <div className="flex flex-col items-center text-center">
            <img src={img1} alt="" className="w-20" />
            <span className="font-bold tracking-wide">React Native</span>
          </div>
          <div className="flex flex-col items-center text-center">
            <img src={img3} alt="" className="w-20" />
            <span className="font-bold tracking-wide">WordPress</span>
          </div>
        </div>
      </div>
    </div>

    <div className="flex flex-col md:flex-row-reverse items-start w-full bg-[#FEF6D6] p-8">
      <div className="flex items-center justify-center p-4 md:p-8">
        <img src={sample1} alt="" className="w-[80rem]  " />
      </div>

      <div className="flex flex-col p-4 md:p-8">
        <span className="text-4xl font-semibold tracking-wide">
          Larsen & Tourbo (L&T) – Coastal Area Construction
        </span>
        <span className="my-4 text-lg leading-relaxed">
          Grid Mobile Application Development is an enterprise solution
          designed to display comprehensive grid progress. It incorporates
          geolocation features to provide real-time updates on vendor
          locations and grid construction status.
        </span>
        <span className="font-semibold mb-4">Features :</span>

        <div className="flex items-center space-x-2">
          <BsFillRecord2Fill color="#5E6FEC" size={26} />
          <span className="text-gray-800 opacity-80">WordPress</span>
        </div>
        <div className="flex items-center space-x-2">
          <BsFillRecord2Fill color="#5E6FEC" size={26} />
          <span className="text-gray-800 opacity-80">
            Executive Security Dashboard
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <BsFillRecord2Fill color="#5E6FEC" size={26} />
          <span className="text-gray-800 opacity-80">React Native</span>
        </div>
        <div className="flex items-center space-x-2">
          <BsFillRecord2Fill color="#5E6FEC" size={26} />
          <span className="text-gray-800 opacity-80">Rest API</span>
        </div>

        <div className="flex flex-col md:flex-row items-center md:space-x-20 pt-8">
          <div className="flex flex-col items-center text-center">
            <img src={img1} alt="" className="w-20" />
            <span className="font-bold tracking-wide">React Native</span>
          </div>
          <div className="flex flex-col items-center text-center">
            <img src={restApi} alt="" className="w-20" />
            <span className="font-bold tracking-wide">Rest API</span>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}







