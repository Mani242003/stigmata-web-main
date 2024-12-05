import ServicesBanner from '../../components/ServicesBanner/ServicesBanner';
import imageUrl from "/images/pluginBgF.png"
import { BsFillRecord2Fill } from "react-icons/bs";
import plug1 from "/images/plug1.png";
import plug2 from "/images/plug2.png";
const Plugin = () => {

    const servicesData = {
        title:"Plugin Development Experts",
        des:"At Stigmata Techno Solutions, we specialize in developing custom plugins tailored to enhance the functionality and performance of your business applications. Our innovative development approach and extensive experience with ATLASSIAN tools (Confluence, JIRA, BitBucket, DevOps, SonarQube, Jenkins, and governance & compliance) ensure that your plugins meet your specific needs.",
        image: imageUrl,
        isContact:false
      };
    
     
  return (
    <>
    <ServicesBanner data={servicesData} />
    <PluginSample />

    
    
    
    </>
  )
}

export default Plugin







const PluginSample = () => {
    return (
      <section className="w-full" id="simplicity">
  <h2 className="text-5xl mt-6 tracking-wide my-[1.5rem] text-center">
  Our
  <span className="ml-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent ">
    Works
  </span>
</h2>

        {/* First Plugin Section */}
        <div className="flex flex-col md:flex-row w-full bg-gradient-to-r from-[#f3f5f9] to-[#e3e7f3] p-8 rounded-lg shadow-lg">
          <div className="flex-1 md:pl-8 flex justify-center md:justify-start">
            <img src={plug1} alt="" className="transition-transform duration-300 transform hover:scale-105" />
          </div>
  
          <div className="flex-1 md:px-8 md:py-6 py-4 flex flex-col justify-center">
            <span className="text-3xl font-semibold text-[#2C3E50] tracking-wide mb-2">
              ATLASSIAN: 
              <span className="text-lg font-normal text-[#7F8C8D]"> Confluence Space Analytics</span>
            </span>
  
            <p className="my-4 text-sm text-[#34495E] leading-relaxed tracking-wide">
              As part of our compliance management, we safeguard against unauthorized issue deletion. Our plugin allows users to submit deletion requests to the JIRA administrator. The administrator can then approve or reject these requests. All activities are logged for auditing purposes and can be exported as a CSV file when needed.
            </p>
  
            <span className="font-semibold text-[#2C3E50] mb-2 block">Features:</span>
  
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <BsFillRecord2Fill color="#5E6FEC" size={26} />
                <span className="text-gray-800 opacity-80">Audit logs</span>
              </div>
              <div className="flex items-center space-x-2">
                <BsFillRecord2Fill color="#5E6FEC" size={26} />
                <span className="text-gray-800 opacity-80">Workflow for deletion of issues</span>
              </div>
            </div>
          </div>
        </div>
  
        {/* Second Plugin Section */}
        <div className="flex flex-col md:flex-row-reverse w-full bg-gradient-to-l from-[#FEF6D6] to-[#f7f3d7] p-8 mt-8 rounded-lg shadow-lg">
          <div className="flex-1 md:pr-8 flex justify-center md:justify-end">
            <img src={plug2} alt="" className=" transition-transform duration-300 transform hover:scale-105" />
          </div>
  
          <div className=" flex-1 md:pl-8 md:py-6 py-4 flex flex-col justify-center">
            <span className="text-3xl font-semibold text-[#2C3E50] tracking-wide mb-2">
              ATLASSIAN: 
              <span className="text-lg font-normal text-[#7F8C8D]"> PII Protector : Confluence</span>
            </span>
  
            <p className="my-4 text-sm text-[#34495E] leading-relaxed tracking-wide">
              This plugin effectively handles PII data in a reactive approach and blocks the code push with notification. Our plugin detects the below PII types, masks them with detailed logs for the project administrators, solving compliance and auditing problems.
            </p>
  
            <span className="font-semibold text-[#2C3E50] mb-2 block">Features:</span>
  
            <div className="space-y-3">
              {["Passwords", "NRIC", "Email", "Passport Number", "Credit card number", "AWS key"].map(
                (feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <BsFillRecord2Fill color="#5E6FEC" size={26} />
                    <span className="text-gray-800 opacity-80">{feature}</span>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  
