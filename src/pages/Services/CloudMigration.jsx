import ServicesBanner from '../../components/ServicesBanner/ServicesBanner';
import imageUrl from "/images/Cloud-Migration.jpg"
import { BsFillRecord2Fill } from 'react-icons/bs';
import Banner from '../../components/Banner/Banner';





const CloudMigration = () => {

    const servicesData = {
        title:"Cloud Migration",
        des:"At Stigmata Techno Solutions, we offer expert cloud migration services that seamlessly transition your business operations to the cloud. Whether you need to move applications, databases, or entire infrastructures, our team ensures a smooth, secure, and efficient migration process.",
        image: imageUrl,
        isContact:false
      };

      const BannerData = {
        title: "Why Choose Our Cloud Migration Services?",
        services: [
          {
            id1:1,
            id2:2,
            subtitle1: "Expert Guidance :",
            description1:
              "Our experienced team provides comprehensive guidance throughout the migration process. We help you navigate the complexities of cloud adoption, ensuring that your migration is aligned with your business goals and IT strategy.",
            subtitle2: "Cost Efficiency :",
            description2:
              "By leveraging the scalability and flexibility of cloud environments, we help you optimize your IT costs. Our cloud migration services enable you to take advantage of the cost savings associated with cloud computing.",
          },
          {
            id1:3,
            id2:4,
            subtitle1: "Seamless Transition :",
            description1:
              "We focus on minimizing downtime and disruption to your operations. Our structured approach ensures that your data and applications are migrated efficiently and securely, with minimal impact on your daily activities.",
            subtitle2: "Security and Compliance :",
            description2:
              "Security is a top priority in our migration process. We implement robust security measures and ensure compliance with industry standards, protecting your data throughout the transition.",
          },
        
        ],
        // "finalText1":"Stigmata Techno Solutions Is A 9+ Year Aged Firm Rendering Software, IT Development Services To Global Customers. We Are Specialized In Developing Applications, Digital Transformation For Specific Industries Like ",
        finalText2:
          "Transform your business with our cloud migration services. At Stigmata Techno Solutions, we are committed to helping you harness the full potential of the cloud. Contact us today to learn more about how we can assist with your cloud migration journey.",
      
        buttonText: "Discuss With Our Experts",
      };
      
    
     
  return (
    <>
    <ServicesBanner data={servicesData} />
    <SoftwareWorks />
    <Banner data={BannerData}/>

    
    
    
    </>
  )
}

export default CloudMigration;








const SoftwareWorks = () => {
  return (
    <div className="cloudMigrateMainSection1 flex flex-col md:flex-row p-8">
    <div className="cloudMigrateMainSection1Left flex flex-col flex-1 mb-8 md:mb-0">
      <span className="cloudMigrateSection1LeftTitel text-3xl md:text-4xl font-bold mb-8">
      Maximize the Value of Cloud with Expert Cloud Services
      </span>
      <div className="cloudMigrateSection1LeftBottomContainer flex items-center gap-2 mt-2">
        <BsFillRecord2Fill color="#5E6FEC" size={26} />
        <span className="feaPage-col-1-text-4 text-black text-lg opacity-100">
        Boost efficiency, accelerate results.
        </span>
      </div>
      <div className="cloudMigrateSection1LeftBottomContainer flex items-center gap-2 mt-2">
        <BsFillRecord2Fill color="#5E6FEC" size={26} />
        <span className="feaPage-col-1-text-4 text-black text-lg opacity-100">
        Automate tasks, save valuable time.
        </span>
      </div>
      <div className="cloudMigrateSection1LeftBottomContainer flex items-center gap-2 mt-2">
        <BsFillRecord2Fill color="#5E6FEC" size={26} />
        <span className="feaPage-col-1-text-4 text-black text-lg opacity-100">
        Achieve 10x faster market speed.
        </span>
      </div>
    </div>
    <div className="cloudMigrateMainSection1Right flex-1  pt-8 6md:pt-8">
      <span className="text-black text-lg leading-relaxed">
      Transform your enterprise’s operational dynamics, eliminate latency, and improve infrastructure efficiency, with Integra’s cloud migration consulting services, designed to enhance performance while reducing total cost of ownership (TCO).
        <br />
        <br />
        Our cloud architecture services are tailored to ensure security, scalability, and continuity, integrating seamlessly with top-tier platforms like cloud AWS services and Azure services. By leveraging cloud deployment solutions that focus on infrastructure efficiency and innovative pricing models like pay-per-use, Integra enhances cloud ROI and delivers consistent, on-demand user experiences.
      </span>
    </div>
  </div>
  
  
  
  )
}











  
  





  









  
  
