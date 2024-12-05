// ServerLess.js
import ServicesBanner from "../../components/ServicesBanner/ServicesBanner";
import imageUrl from "/images/serverless.png"; // Ensure this path is correct
import Banner from "../../components/Banner/Banner"

import accesscontrol from "/images/icons/storage.webp";
import insights from "/images/icons/load-balancer.webp";
import compliance from "/images/icons/scaling.webp";
import costSaving from "/images/icons/costSavingIcon.png";

import { MdOutlineMiscellaneousServices, } from "react-icons/md";
import { FaCode, FaCloud, FaRocket, FaTools, FaShieldAlt } from "react-icons/fa"; // Unique icons



const ServerLess = () => {
  const servicesData = {
    title:"Embrace the future of cloud computing with our serverless solutions",
    des:"At Stigmata Techno Solutions, we specialize in creating cutting-edge serverless computing solutions, enabling your business to focus on innovation and functionality without the burden of infrastructure management.",
    image: imageUrl,
    isContact: false
  };

  const ServicesBannerData = {
    "title": "Why Choose Serverless Computing?",
    "services": [
      {
        id1:1,
        id2:2,
        "subtitle1": "No Infrastructure Management :",
        "description1": "With serverless computing, the cloud provider takes care of the infrastructure setup, capacity planning, and server management. This allows your development teams to focus on writing code and delivering value to your business.",
        "subtitle2": "Event-Driven Architecture :",
        "description2": "Serverless applications are designed to be event-driven, meaning they only consume resources when a specific function or trigger occurs. This architecture ensures efficient resource utilization and optimal performance."
    
    },
    {
      id1:3,
      id2:4,
        "subtitle1": "Scalability :",
        "description1": "Serverless architectures automatically scale your applications based on demand. Whether you have a spike in traffic or a steady flow of users, serverless computing ensures that your applications can handle the load without manual intervention.",
        "subtitle2": "Cost Efficiency :",
        "description2": "Pay only for what you use. Serverless computing charges you based on the actual execution of your code, rather than pre-allocated resources. This model significantly reduces costs by eliminating the need to over-provision resources for peak times."
    
    },
   
     
    ],
    // "finalText1":"Stigmata Techno Solutions Is A 9+ Year Aged Firm Rendering Software, IT Development Services To Global Customers. We Are Specialized In Developing Applications, Digital Transformation For Specific Industries Like ",
    // "finalText2":"Heavy Construction Companies, Power Transmission & Distribution, Financial Institutions (Governance & Compliance Handling PII Data) And Securing Organisations Cloud Environment (ClouSec : CSPM Tool – Cloud Security). ",
    // "finalText3":"Our Key Focus Is To Provide World-Class Quality Service To Our Customers With Utmost Focus On Their Needs And To Ensure That Technology Supports Their Business Growth. We Would Be Happy To Get Associated With Your Esteemed Organization On Your Digital Transformation / Automation Reducing Manual Efforts And Cost.",
    
    "buttonText":"Get Started"  
};

  return (
    <>
      <ServicesBanner data={servicesData} />
      <div className="flex flex-col p-[15px] sm:p-[50px]">
      <span className="text-2xl md:text-4xl font-semibold">
  Transform Your Application Development with our Serverless
  Computing stack
</span>
<span className="mt-4 text-base md:text-lg leading-6 tracking-wide">
  At Stigmata Techno Solutions, we specialize in creating
  cutting-edge serverless computing solutions that enable your
  business to focus on innovation and functionality without the
  burden of infrastructure management. Our serverless architecture
  ensures that your applications are scalable, cost-efficient, and
  resilient.
</span>

</div>
<Banner data={ServicesBannerData} />
<KeyCharacter />
<Problem />

    </>
  );
};

export default ServerLess;





const KeyCharacter = () => {
  return (
    <section className="w-full bg-gradient-to-br from-[#3B82F6] to-[#60A5FA]" id="fea">
      <div className="p-6 sm:p-10">
        <div className="text-center mb-10">
          <span className="text-white text-3xl sm:text-5xl font-semibold tracking-tight leading-tight">
            Benefits of Our Serverless Computing Solutions
          </span>
        </div>
        <div className="p-8 sm:p-14 flex flex-wrap gap-8 justify-center">
          {/* Card 1 */}
          <div className="flex-1 w-full sm:w-1/2 lg:w-1/4 bg-white p-6 rounded-2xl shadow-xl transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
            <div className="w-16 h-16 sm:w-24 sm:h-24 bg-[#3B82F6] rounded-full flex items-center justify-center shadow-lg mb-6">
              <img src={accesscontrol} alt="Access Control Icon" className="w-12 sm:w-16" />
            </div>
            <div>
              <span className="text-black text-xl sm:text-2xl font-semibold opacity-90 block mb-2">
                Reduced Operational Complexity
              </span>
              <span className="text-gray-700 text-sm sm:text-base opacity-80">
                Focus on developing features and functionality while we handle the infrastructure.
              </span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex-1 w-full sm:w-1/2 lg:w-1/4 bg-white p-6 rounded-2xl shadow-xl transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
            <div className="w-16 h-16 sm:w-24 sm:h-24 bg-[#3B82F6] rounded-full flex items-center justify-center shadow-lg mb-6">
              <img src={insights} alt="Insights Icon" className="w-12 sm:w-16" />
            </div>
            <span className="text-black text-xl sm:text-2xl font-semibold opacity-90 block mb-2">
              Enhanced Agility
            </span>
            <span className="text-gray-700 text-sm sm:text-base opacity-80">
              Quickly deploy and iterate on applications, reducing time-to-market.
            </span>
          </div>

          {/* Card 3 */}
          <div className="flex-1 w-full sm:w-1/2 lg:w-1/4 bg-white p-6 rounded-2xl shadow-xl transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
            <div className="w-16 h-16 sm:w-24 sm:h-24 bg-[#3B82F6] rounded-full flex items-center justify-center shadow-lg mb-6">
              <img src={compliance} alt="Compliance Icon" className="w-12 sm:w-16" />
            </div>
            <span className="text-black text-xl sm:text-2xl font-semibold opacity-90 block mb-2">
              Scalable Solutions
            </span>
            <span className="text-gray-700 text-sm sm:text-base opacity-80">
              Automatically scale to meet demand, ensuring performance and availability.
            </span>
          </div>

          {/* Card 4 */}
          <div className="flex-1 w-full sm:w-1/2 lg:w-1/4 bg-white p-6 rounded-2xl shadow-xl transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
            <div className="w-16 h-16 sm:w-24 sm:h-24 bg-[#3B82F6] rounded-full flex items-center justify-center shadow-lg mb-6">
              <img src={costSaving} alt="Cost Saving Icon" className="w-12 sm:w-16" />
            </div>
            <span className="text-black text-xl sm:text-2xl font-semibold opacity-90 block mb-2">
              Cost Savings
            </span>
            <span className="text-gray-700 text-sm sm:text-base opacity-80">
              Pay only for the compute resources you use, reducing overall IT costs.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};








const Problem = () => {
  return (
    <section className="w-full bg-white" id="problem">
      <div className="w-full px-8 py-12">
        <div className="text-center flex flex-col gap-2 items-center p-4">
          <span className="text-[35px] font-bold text-gray-800 mb-6">Our Serverless Computing Services</span>
        </div>

        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1: Application Development */}
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
              <div className="flex justify-center items-center mb-4">
                <div className="h-16 w-16 flex items-center justify-center rounded-full bg-gradient-to-r from-yellow-400 to-orange-500">
                  <FaCode className="text-white text-2xl" />
                </div>
              </div>
              <div>
                <span className="text-2xl font-semibold text-gray-800 hover:text-blue-600 cursor-pointer">
                  Application Development
                </span>
                <p className="text-gray-600 mt-2 opacity-80">
                  We design and develop serverless applications that are tailored to your needs, using the latest technologies for scalable, efficient solutions.
                </p>
              </div>
            </div>

            {/* Service 2: Migration to Serverless */}
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
              <div className="flex justify-center items-center mb-4">
                <div className="h-16 w-16 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-400 to-teal-500">
                  <FaCloud className="text-white text-2xl" />
                </div>
              </div>
              <div>
                <span className="text-2xl font-semibold text-gray-800 hover:text-blue-600 cursor-pointer">
                  Migration to Serverless
                </span>
                <p className="text-gray-600 mt-2 opacity-80">
                  Transitioning to serverless architecture is complex, but we ensure a smooth migration with minimal disruption to your operations.
                </p>
              </div>
            </div>

            {/* Service 3: Function as a Service */}
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
              <div className="flex justify-center items-center mb-4">
                <div className="h-16 w-16 flex items-center justify-center rounded-full bg-gradient-to-r from-purple-400 to-indigo-600">
                  <FaRocket className="text-white text-2xl" />
                </div>
              </div>
              <div>
                <span className="text-2xl font-semibold text-gray-800 hover:text-blue-600 cursor-pointer">
                  Function as a Service (FaaS)
                </span>
                <p className="text-gray-600 mt-2 opacity-80">
                  Run your code in response to events without managing servers. Our FaaS solutions support various programming languages and environments.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {/* Service 4: Backend Services */}
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
              <div className="flex justify-center items-center mb-4">
              <div className="h-16 w-16 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-400 to-pink-500">
                  <MdOutlineMiscellaneousServices className="text-white text-2xl" />
                </div>
              </div>
              <div>
                <span className="text-2xl font-semibold text-gray-800 hover:text-blue-600 cursor-pointer">
                  Backend Services
                </span>
                <p className="text-gray-600 mt-2 opacity-80">
                  From API gateways to data storage solutions, we offer a range of serverless backend services to support your application’s functionality and scalability.
                </p>
              </div>
            </div>

            {/* Service 5: Monitoring and Optimization */}
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
              <div className="flex justify-center items-center mb-4">
                <div className="h-16 w-16 flex items-center justify-center rounded-full bg-gradient-to-r from-pink-400 to-red-500">
                  <FaTools className="text-white text-2xl" />
                </div>
              </div>
              <div>
                <span className="text-2xl font-semibold text-gray-800 hover:text-blue-600 cursor-pointer">
                  Monitoring and Optimization
                </span>
                <p className="text-gray-600 mt-2 opacity-80">
                  Our serverless solutions include real-time monitoring and optimization, ensuring your applications are always running smoothly and efficiently.
                </p>
              </div>
            </div>

            {/* Service 6: Compliance and Audit */}
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
              <div className="flex justify-center items-center mb-4">
                <div className="h-16 w-16 flex items-center justify-center rounded-full bg-gradient-to-r from-orange-400 to-red-500">
                  <FaShieldAlt className="text-white text-2xl" />
                </div>
              </div>
              <div>
                <span className="text-2xl font-semibold text-gray-800 hover:text-blue-600 cursor-pointer">
                  Compliance and Audit Challenges
                </span>
                <p className="text-gray-600 mt-2 opacity-80">
                  Our solutions help you navigate compliance and audit challenges by ensuring transparency and meeting regulatory requirements in a serverless environment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
