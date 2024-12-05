import React from "react";
import people from "/images/people.jpg";

import CarrerPage from "/images/CarrerPageBg.jpg";
import Banner from "../components/Banner/Banner";
import ApplyImg from "/images/newEntite.jpg";
import StayConnected from "/images/StayConnected.jpg";
import interImg from "/images/interImg.jpg";

const ServicesBannerData = {
  title: "Why Choose React Native for Mobile Development?",
  services: [
    {
      id1: 1,
      id2: 2,
      subtitle1: "Cross-Platform Compatibility :",
      description1:
        "React Native enables the development of applications that run smoothly on both iOS and Android platforms using a single codebase. This significantly reduces development time and costs while ensuring a consistent user experience across devices.",
      subtitle2: "Fast Development Cycles :",
      description2:
        "React Native’s hot-reloading feature allows developers to see the changes they make in real-time, speeding up the development process. This rapid iteration cycle means faster time-to-market for your mobile applications.",
    },
    {
      id1: 3,
      id2: 4,
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
const Careers = () => {
  return (
    <>

      <div className=" ">
        <div
          className=" h-[300px]  flex flex-col items-start justify-center px-6 sm:px-10 md:px-16 text-white overflow-hidden"
          style={{
            backgroundImage: `url(${CarrerPage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
          }}
        >
          <span className=" text-white text-5xl font-normal tracking-wider block mb-4 mt-9">
            Join Our Team at Stigmata
          </span>
        </div>

        <div className="">
          {/* Join Content Section 1 */}
          <div className="flex flex-col lg:flex-row my-8">
            <div className="flex flex-col flex-1 p-[1rem] sm:p-[2rem]">
              <h2 className="text-4xl  mt-6  tracking-wide">
                Why
                <span className="ml-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Stigmata?
                </span>
              </h2>
              <span className="text-lg mt-4 leading-8 tracking-wider">
                At <span className="font-bold">Stigmata</span>, we are
                passionate about revolutionizing in the software development
                domain with innovative solutions and cutting-edge technology.
                Our team is our greatest asset, and we are committed to
                fostering a dynamic, inclusive, and inspiring work environment
                where every member can thrive and grow.
              </span>
            </div>
            <div
              className="flex-1 hidden lg:block bg-cover bg-no-repeat h-80"
              style={{ backgroundImage: `url(${people})` }}
            ></div>
          </div>

          {/* Join Content Section 2 */}

          <Banner data={ServicesBannerData} />

          {/* How to Apply Section */}
          <div className="flex flex-col sm:flex-row  mt-8  p-[0rem] sm:p-[3rem]">
            <div className="flex-1 flex gap-[2rem] p-[1rem] sm:p-[2rem] flex-col">
              <h2 className="text-4xl  mt-6  tracking-wide">
                How to
                <span className="ml-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Apply
                </span>
              </h2>
              <span className="text-lg  leading-8">
                Ready to take the next step in your career? Send your resume and
                a cover letter to
                <a
                  href="mailto:jerome@stigmatatech.com"
                  className="text-green-500 font-bold"
                >
                  {" "}
                  jerome@stigmatatech.com{" "}
                </a>
                &{" "}
                <a
                  href="mailto:jerome@stigmata.co.in"
                  className="text-green-500 font-bold mr-2"
                >
                  {" "}
                  jerome@stigmata.co.in
                </a>
                with the job title in the subject line. We can’t wait to hear
                from you!
              </span>
            </div>
            <div className="flex-1 ">
              <img src={ApplyImg} alt="" />
            </div>
          </div>

          {/* Internship Opportunities Section */}
          <div className="flex flex-col-reverse lg:flex-row mt-8 p-[0rem] sm:p-[3rem]">
            <div className="flex-1 ">
              <img src={interImg} alt="" />
            </div>
            <div className="flex-1 flex flex-col gap-[2rem] p-[1rem] sm:p-[2rem] ">
            <h2 className="text-4xl mt-6 tracking-wide flex flex-wrap">
  Internship
  <span className="ml-0 sm:ml-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
    Opportunities
  </span>
</h2>

              <span className="text-lg mt-4 leading-8">
                We also offer internship programs for students and recent
                graduates. If you are eager to gain hands-on experience and
                learn from industry experts, apply for our internship positions
                by emailing
                <a
                  href="mailto:jerome@stigmatatech.com"
                  className="text-green-500 font-bold mr-2"
                >
                  {" "}
                  jerome@stigmatatech.com
                </a>
                with your resume and a brief introduction.
              </span>
            </div>
          </div>

          {/* Stay Connected Section */}
          <div className="flex flex-col sm:flex-row  mt-8 p-[0rem] sm:p-[3rem]">
            <div className="flex-1 flex gap-[1rem] p-[1rem] sm:p-[2rem] flex-col">
              <h2 className="text-4xl  mt-6  tracking-wide">
                Stay
                <span className="ml-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Connected
                </span>
              </h2>
              <span className="text-lg mt-4 leading-8">
                Follow us on
                <a
                  href="https://www.linkedin.com/in/jerome-melkisidak-970b635b"
                  className="text-green-500 font-bold"
                >
                  {" "}
                  LinkedIn
                </a>
                to stay updated on our latest job openings and company news.
              </span>
              <span className="text-lg mt-4 leading-8">
                We look forward to welcoming you to the{" "}
                <span className="font-bold">Stigmata family!</span>
              </span>
            </div>
            <div className="flex-1 ">
              <img src={StayConnected} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Careers;
