import ServicesBanner from "../../components/ServicesBanner/ServicesBanner";
import imageUrl from "/images/devopsPG.jpg";
import Banner from "../../components/Banner/Banner";
import { FaRocket, FaUsers, FaCode, FaDollarSign } from "react-icons/fa";


const DevopsData = {
  title: "DevOps Application Development",
  des: "At Stigmata Techno Solutions, we specialize in delivering agile DevOps services designed to streamline your development and operations processes.",
  image: imageUrl,
  isContact:false
};

const BannerData = {
  title: "Tackling your Operational Challenges with Stigmata Techno Solutions",
  services: [
    {
      id1:1,
      id2:2,
      subtitle1: "Agile Development :",
      description1:
        "Our approach integrates agile methodologies, allowing your development teams to work more efficiently and collaboratively. We help you adopt agile practices to accelerate project timelines and enhance flexibility.",
      subtitle2: "Continuous Integration & Continuous Delivery (CI/CD) :",
      description2:
        "We implement CI/CD pipelines that automate code integration and deployment, ensuring faster delivery and higher code quality. Our CI/CD solutions minimize manual interventions and reduce the risk of errors, enabling seamless and reliable software releases.",
    },
    {
      id1:3,
      id2:4,
      subtitle1: "Continuous Testing :",
      description1:
        "Quality assurance is a critical component of our DevOps strategy. We establish continuous testing frameworks that automate testing processes, providing rapid feedback and ensuring your code is always production-ready.",
      subtitle2: "Continuous Security :",
      description2:
        "Security is integrated into every stage of the development lifecycle. Our DevSecOps approach embeds security practices within the DevOps pipeline, ensuring your applications are secure from the ground up. We implement automated security checks and compliance validations to protect your systems against vulnerabilities.",
    },
    {
      id1:5,
      id2:6,
      subtitle1: "Infrastructure as Code (IaC) :",
      description1:
        "We leverage IaC to manage and provision your infrastructure through code, enabling consistent and scalable environments. Our IaC solutions ensure that your infrastructure is version-controlled and easily replicable, reducing configuration drifts and enhancing deployment efficiency.",
      subtitle2: "Monitoring and Logging :",
      description2:
        "Our DevOps services include robust monitoring and logging solutions that provide real-time insights into system performance and health. We help you implement comprehensive monitoring tools to detect issues early, optimize performance, and maintain high availability.",
    },
  ],
  // "finalText1":"Stigmata Techno Solutions Is A 9+ Year Aged Firm Rendering Software, IT Development Services To Global Customers. We Are Specialized In Developing Applications, Digital Transformation For Specific Industries Like ",
  finalText2:
    "Stigmata Techno Solution's utilize cloud hyperscalers to create collaborative, interactive, and transparent business architecture ready to tackle technology challenges.",

  buttonText: "Discuss With Our Experts",
};

const DevOps = () => {
  return (
    <>
      <ServicesBanner data={DevopsData} />
      <div className="flex flex-col p-[15px] sm:p-[50px]">
        <span className="text-2xl md:text-4xl font-semibold">
          Automate your operational tool onboarding access & deployment process
        </span>
        <span className="mt-4 text-base md:text-lg leading-6 tracking-wide">
          Our DevOps solutions streamline operational tool onboarding, access,
          and deployment through automation, reducing manual effort and
          enhancing efficiency. This approach accelerates innovation, enabling
          faster and more reliable workflows. By ensuring higher quality
          standards, our solutions drive operational excellence across teams.
          Empower your organization to achieve agility and sustained success in
          a competitive landscape.
        </span>
      </div>
      <Banner data={BannerData} />
      <DevOpsAccordion />
    </>
  );
};

export default DevOps;







const DevOpsAccordion = () => {
  return (
    <div className="cloudMigrateMainSection3 mt-16 p-6 sm:p-12 bg-gradient-to-b from-blue-50 to-gray-100 rounded-lg shadow-lg">
      {/* Top Section */}
      <div className="cloudMigrateMainSection3Top text-center">
        <h1 className="cloudMigrateMainSection3Title text-blue-700 text-3xl sm:text-4xl font-bold leading-snug tracking-tight">
        What We Do
        </h1>
        <p className="cloudMigrateMainSection3Des w-full sm:w-4/4  mx-auto text-gray-700 text-base sm:text-lg leading-relaxed mt-6 sm:mt-8 opacity-90">
        Transform your development and operations with our expert DevOps services. Partner with Stigmata Techno Solutions to drive innovation, efficiency, and growth within your organization. Contact us today to learn more about how our DevOps solutions can benefit your business.
        </p>
      </div>

      {/* Benefits Section */}
      <div className="cloudMigrateMainSection3Bottom pt-10 grid grid-cols-1 sm:grid-cols-2 gap-8">
        {/* Item 1: Faster Time-to-Market */}
        <div className="flex items-start bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform transition hover:-translate-y-2">
          <span className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white">
            <FaRocket size={20} />
          </span>
          <div className="ml-6">
            <h2 className="text-xl font-semibold text-blue-600">Faster Time-to-Market</h2>
            <p className="text-gray-600 mt-3 text-sm">
              Accelerate your software development lifecycle and bring new features to market quickly.
            </p>
          </div>
        </div>

        {/* Item 2: Improved Collaboration */}
        <div className="flex items-start bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform transition hover:-translate-y-2">
          <span className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white">
            <FaUsers size={20} />
          </span>
          <div className="ml-6">
            <h2 className="text-xl font-semibold text-blue-600">Improved Collaboration</h2>
            <p className="text-gray-600 mt-3 text-sm">
              Boost teamwork between development, operations, and security teams.
            </p>
          </div>
        </div>

        {/* Item 3: Higher Quality Code */}
        <div className="flex items-start bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform transition hover:-translate-y-2">
          <span className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white">
            <FaCode size={20} />
          </span>
          <div className="ml-6">
            <h2 className="text-xl font-semibold text-blue-600">Higher Quality Code</h2>
            <p className="text-gray-600 mt-3 text-sm">
              Deliver reliable applications with continuously tested and secure code.
            </p>
          </div>
        </div>

        {/* Item 4: Cost Efficiency */}
        <div className="flex items-start bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform transition hover:-translate-y-2">
          <span className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white">
            <FaDollarSign size={20} />
          </span>
          <div className="ml-6">
            <h2 className="text-xl font-semibold text-blue-600">Cost Efficiency</h2>
            <p className="text-gray-600 mt-3 text-sm">
              Reduce operational costs by automating tasks and optimizing resources.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};





