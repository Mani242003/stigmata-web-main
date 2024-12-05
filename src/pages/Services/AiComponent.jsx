import imageUrl from "/images/AiBg.jpg";
import Banner from "../../components/Banner/Banner";
import DroneTech from "../../components/DroneTech/DroneTech";
import ServicesBanner from "../../components/ServicesBanner/ServicesBanner";





const aiData = {
    title: "Artificial Intelligence",
    des: "Leverage cutting-edge AI technologies to optimize processes, enhance decision-making, and deliver personalized customer experiences. Our AI solutions, including machine learning, natural language processing, and predictive analytics, help unlock the full potential of your business.",
    image: imageUrl,
    isContact : false
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
const AiComponent = () => {
    

  return (
   <>
   <ServicesBanner data={aiData} />
   <DroneTech />
   <Banner data={BannerData} />
   
   </>
  )
}

export default AiComponent;