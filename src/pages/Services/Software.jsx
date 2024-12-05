import ServicesBanner from '../../components/ServicesBanner/ServicesBanner';
import imageUrl from "/images/softwareVector.jpg"

import s_vendor1 from "/images/customer/sAmazonVendor.png";
import s_vendor2 from "/images/customer/s_vendor2.png";
import s_vendor3 from "/images/customer/LandT1.png";
import s_vendor4 from "/images/customer/landT2.png";
import erp1 from "/images/erp1.png";
import erp2 from "/images/erp2.png";
import erp3 from "/images/erp3.png";
import erp4 from "/images/erp4.png";
import erp5 from "/images/erp5.png";

import orangeDot from "/images/icons/orangeBullet.png";
import { BsFillRecord2Fill } from 'react-icons/bs';


const Software = () => {

    const servicesData = {
        title:"Software Application Development",
        des:"At Stigmata Techno Solutions, we offer comprehensive software application development services designed to meet the unique needs of your business.",
        image: imageUrl,
        isContact:false
      };


      
    
     
  return (
    <>
    <ServicesBanner data={servicesData} />
    <VendorComponent />
    <SoftwareWorks />
    <SolutionSample />

    
    
    
    </>
  )
}

export default Software;




const VendorComponent = () => {
    return (
      <div className="text-center pb-6 flex flex-col items-center">
        <span className="text-black text-center text-[35px] mx-[10px] font-semibold opacity-70 mt-8">
          Software Development Vendor of
        </span>
        <div className="bg-black bg-opacity-70 h-[3px] w-[200px] mt-4"></div>
        <div className="flex py-8 gap-8 flex-col sm:flex-row">
          <img src={s_vendor4} alt="" className="w-[10rem]" />
          <img src={s_vendor1} alt="" className="w-[10rem]" />
          <img src={s_vendor3} alt="" className="w-[10rem]" />
          <img src={s_vendor2} alt="" className="w-[10rem]" />
        </div>
      </div>
    )
  }



const SoftwareWorks = () => {
  return (
    <div className="cloudMigrateMainSection1 flex flex-col md:flex-row p-8">
    <div className="cloudMigrateMainSection1Left flex flex-col flex-1 mb-8 md:mb-0">
      <span className="cloudMigrateSection1LeftTitel text-3xl md:text-4xl font-bold mb-8">
        Maximize the Value of Software with Expert Services
      </span>
      <div className="cloudMigrateSection1LeftBottomContainer flex items-center gap-2 mt-2">
        <BsFillRecord2Fill color="#5E6FEC" size={26} />
        <span className="feaPage-col-1-text-4 text-black text-lg opacity-100">
          Boost efficiency by 60%
        </span>
      </div>
      <div className="cloudMigrateSection1LeftBottomContainer flex items-center gap-2 mt-2">
        <BsFillRecord2Fill color="#5E6FEC" size={26} />
        <span className="feaPage-col-1-text-4 text-black text-lg opacity-100">
          Automate tasks by 40%
        </span>
      </div>
      <div className="cloudMigrateSection1LeftBottomContainer flex items-center gap-2 mt-2">
        <BsFillRecord2Fill color="#5E6FEC" size={26} />
        <span className="feaPage-col-1-text-4 text-black text-lg opacity-100">
          10x faster time to market
        </span>
      </div>
    </div>
    <div className="cloudMigrateMainSection1Right flex-1  pt-8 6md:pt-8">
      <span className="text-black text-lg leading-relaxed">
        Partner with Stigmata Techno Solutions for your software application development needs.
        <br />
        <br />
        At Stigmata Techno Solutions, we specialize in the full lifecycle of software application development, from analysis and design to deployment and security testing, addressing and automating client pain points. We create custom software solutions to tackle everyday business challenges. With years of experience across diverse industries, we deliver high-quality work within budget using AGILE methodology, consistently delighting our clients with our progress and results.
      </span>
    </div>
  </div>
  
  
  
  )
}










const SolutionSample = () => {
    return (
      <section className="bg-white w-full py-12" id="solution">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-8">
            <span className="text-4xl font-bold leading-tight">
              Our Works In
              <br />
              ERP Development
            </span>
            <div className="bg-black opacity-70 h-0.5 w-48 mt-4 mx-auto"></div>
          </div>
  
          <div className="space-y-12">
            {/* First ERP Project */}
            <div className="flex flex-col tablet:flex-col md:flex-row bg-[#E4F6EF] p-8 rounded-xl shadow-lg">
              <div className="flex-1 flex flex-col gap-4">
                <span className="text-3xl font-bold">
                  Grid Management <span className="text-lg font-medium">(L&T Construction)</span>
                </span>
                <div className="space-y-2 mt-2">
                  {["Grid layer", "Subcontractor", "Client Billing", "Geolocation tracking", "Grid status monitoring", "Reports"].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <img src={orangeDot} alt="dot" className="w-5" />
                      <span className="text-xl">{item}</span>
                    </div>
                  ))}
                </div>
  
                <span className="text-2xl font-bold mt-6">
                  Technical Stack:
                  <br />
                  <span className="font-medium text-xl">Front End: ReactJS</span>,{" "}
                  <span className="font-medium text-xl">Middleware: .NET Core, Rest API</span>,{" "}
                  <span className="font-medium text-xl">Backend: MSSQL</span>,{" "}
                  <span className="font-medium text-xl">Mobile: React Native</span>
                </span>
              </div>
              <div className="flex justify-center items-center flex-1 mt-6 tablet:mt-0">
                <img src={erp1} alt="ERP 1" className="w-full max-w-md" />
              </div>
            </div>
  
            {/* Second ERP Project */}
            <div className="flex flex-col tablet:flex-col md:flex-row bg-[#FEF6D6] p-8 rounded-xl shadow-lg">
              <div className="flex justify-center items-center flex-1">
                <img src={erp2} alt="ERP 2" className="w-full max-w-md" />
              </div>
              <div className="flex-1 flex flex-col gap-4 mt-6 tablet:mt-0">
                <span className="text-3xl font-bold">
                  Medical Image Analysis <span className="text-lg font-medium">(Sri Ramachandra Hospital)</span>
                </span>
                <span className="text-xl font-semibold mt-4">Design and develop a window application based on Java to analyse real-time patient’s skull x-ray images.</span>
  
                <span className="text-xl font-semibold mt-4">Problem Statement:</span>
                <span className="text-lg mt-2">
                  Right now, manually doctor has to inspect all the patient x-ray images which invokes human dependency,
                  time-taking process, and sometimes error in decision-making.
                </span>
  
                <span className="text-xl font-semibold mt-4">Solution:</span>
                <span className="text-lg mt-2">
                  An automated software which could analyse the patient x-ray images and plot 41 dots on the input images.
                  11 angular and 10 linear equational logic are applied to extract the distance, angle, variance. The
                  proposed solution could able to provide results for 1000 x-ray images in 1 hour and export the whole
                  data as excel report.
                </span>
              </div>
            </div>
  
            {/* Third ERP Project */}
            <div className="flex flex-col tablet:flex-col md:flex-row bg-[#E3F5EE] p-8 rounded-xl shadow-lg">
              <div className="flex-1 flex flex-col gap-4">
                <span className="text-3xl font-bold">
                  Power Transmission & Distribution – Management Information System <span className="text-lg font-medium">(L&T Construction)</span>
                </span>
                <div className="space-y-2 mt-2">
                  {["Masters: Cost code, Region, Calendar, Project/Tenders, Employee, Timesheet, SLA revision", "Unfilled MH’s", "PEM Input page", "User Delegation", "Monthly Report", "Cross Booking Report"].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <img src={orangeDot} alt="dot" className="w-5" />
                      <span className="text-xl">{item}</span>
                    </div>
                  ))}
                </div>
  
                <span className="text-2xl font-bold mt-6">
                  Technical Stack:
                  <br />
                  <span className="font-medium text-xl">Front End: ReactJS</span>,{" "}
                  <span className="font-medium text-xl">Middleware: .NET Core, Rest API</span>,{" "}
                  <span className="font-medium text-xl">Backend: MSSQL</span>,{" "}
                  <span className="font-medium text-xl">Mobile: React Native</span>
                </span>
              </div>
              <div className="flex justify-center items-center flex-1 mt-6 tablet:mt-0">
                <img src={erp3} alt="ERP 3" className="w-full max-w-md" />
              </div>
            </div>
  
            {/* Fourth ERP Project */}
            <div className="flex flex-col tablet:flex-col md:flex-row bg-[#F6FDD6] p-8 rounded-xl shadow-lg">
              <div className="flex justify-center items-center flex-1">
                <img src={erp4} alt="ERP 4" className="w-full max-w-md" />
              </div>
              <div className="flex-1 flex flex-col gap-4 mt-6 tablet:mt-0">
                <span className="text-3xl font-bold">
                  Power transmission & distribution – Pile Foundation for Towers & Girders <span className="text-lg font-medium">(L&T Construction)</span>
                </span>
                <div className="space-y-2 mt-2">
                  {["Masters: Project details", "Foundation Loads", "Common Inputs", "Analysis Output", "Results Summary", "Weekly Progress"].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <img src={orangeDot} alt="dot" className="w-5" />
                      <span className="text-xl">{item}</span>
                    </div>
                  ))}
                </div>
  
                <span className="text-2xl font-bold mt-6">
                  Technical Stack:
                  <br />
                  <span className="font-medium text-xl">Front End: ReactJS</span>,{" "}
                  <span className="font-medium text-xl">Middleware: .NET Core, Rest API</span>,{" "}
                  <span className="font-medium text-xl">Backend: MSSQL</span>,{" "}
                  <span className="font-medium text-xl">Mobile: React Native</span>
                </span>
              </div>
            </div>
  
            {/* Fifth ERP Project */}
            <div className="flex flex-col tablet:flex-col md:flex-row bg-[#FEF6D6] p-8 rounded-xl shadow-lg">
              <div className="flex justify-center items-center flex-1">
                <img src={erp5} alt="ERP 2" className="w-full max-w-md" />
              </div>
              <div className="flex-1 flex flex-col gap-4 mt-6 tablet:mt-0">
                <span className="text-3xl font-bold">
                Day Closure & Patient Token Automation
                </span>
  
             
  
                <span className="text-lg mt-2 my-[2.5rem]">
                This web application streamlines patient appointments by generating automated token numbers, which are issued through receipts and SMS notifications. It eliminates the need for manual billing and simplifies the process of account reconciliation at the end of the day.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  





  









  
  
