import React from 'react'
import Banner from '../Banner/Banner'
import Products from '../Products/Products';
import Services from "../Services"
import TechSlide from '../TechSlider/TechSlide';
import Count from '../Count/Count';
import News from '../News';
import Testimonial from '../Testimonial/Testimonial';
import DroneTech from '../DroneTech/DroneTech';
import TeamMember from '../TeamMember/TeamMember';
import AboutComponent from '../AboutComponent/AboutComponent';
import BlogComponent from '../BlogComponent';
import HoverCard from '../CustomHoverCard/HoverCard';

const MainContent = () => {


    const data = {
        "title": "Empowering Digital Transformation and Automation Solutions",
        "services": [
          {
            "id1":1,
            "id2":2,
            "subtitle1": "DevOps:",
            "description1": "Our agile DevOps services empower companies to automate their entire development and operations processes intelligently. This approach ensures the creation of high-quality, secure code through agile development, Continuous Integration, Continuous Security, Continuous Testing, and Continuous Delivery.",
            "subtitle2": "Web Application Development:",
            "description2": "We are experts in developing web applications with state-of-the-art technology, and we have a great deal of experience with Java frameworks. Our methodology guarantees dependable, expandable, and efficient web solutions customized to fulfill your business requirements."
        
        },
        {
          "id1":3,
            "id2":4,
            "subtitle1": "Cloud Migration:",
            "description1": "Planning to move your workloads to the cloud but unsure where to start? Stigmata Techno Solutions specializes in migrating your servers, databases, applications, and emails to cloud, dedicated, and virtual environments, making the transition seamless and secure.",
            "subtitle2": "Mobile App Development:",
            "description2": "With extensive expertise in Java frameworks, we excel in using React Native for mobile app development. This hybrid approach ensures cross-platform compatibility, providing cost-effective and timely solutions. The robust React Native community support further enhances development efficiency."
        
        },
        {
          "id1":5,
            "id2":6,
            "subtitle1": "Plugin Development:",
            "description1": "We develop customized plugins tailored to your business applications. Our innovative development approach and extensive experience with ATLASSIAN tools (Confluence, JIRA, BitBucket, DevOps, SonarQube, Jenkins, and governance & compliance) ensure that your plugins meet your specific needs. If you got any customised plugin requirement, Feel free to reach us. We would be happy to develop.",
            "subtitle2": "Software Application Development:",
            "description2": "At Stigmata Techno Solutions, we specialize in the full lifecycle of software application development, from analysis and design to deployment and security testing, addressing and automating client pain points. . We create custom software solutions to tackle everyday business challenges. efficiency."
        
        },
         
        ],
        "finalText1":"Stigmata Techno Solutions Is A 9+ Year Aged Firm Rendering Software, IT Development Services To Global Customers. We Are Specialized In Developing Applications, Digital Transformation For Specific Industries Like ",
        "finalText2":"Heavy Construction Companies, Power Transmission & Distribution, Financial Institutions (Governance & Compliance Handling PII Data) And Securing Organisations Cloud Environment (ClouSec : CSPM Tool – Cloud Security). ",
        "finalText3":"Our Key Focus Is To Provide World-Class Quality Service To Our Customers With Utmost Focus On Their Needs And To Ensure That Technology Supports Their Business Growth. We Would Be Happy To Get Associated With Your Esteemed Organization On Your Digital Transformation / Automation Reducing Manual Efforts And Cost.",
        
        "buttonText":"Get Started"  
    };
  return (
    <div className='pt-[0px]'>
      <HoverCard />
      
        <Banner data={data} />
        <Products />
        <Services />
        <TechSlide />
        <Count />
        <News />
        <Testimonial />
        <DroneTech />
        <TeamMember />
        <AboutComponent />
        <BlogComponent />


    </div>
  )
}

export default MainContent







