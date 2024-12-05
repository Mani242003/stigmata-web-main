import React from "react";
import Navbar from "../Navigation/Navbar/Navbar";
import Footer from "../Footer/Footer";
import SocialMedia from "../SocialMedia";
import ScrollToTop from "react-scroll-to-top";
import { Outlet } from "react-router-dom";  // This is where the routes will be rendered

const Layout = () => {
  return (
    <div>
      <Navbar />
      <ScrollToTop smooth />
      
      <div>
        <SocialMedia />
        {/* This is where your page content will render */}
        <Outlet />
        
        <ScrollToTop  
          color="white"
          style={{
            width:'50px',
            height:'50px',
            backgroundColor: '#3B82F6', 
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            
          
            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
            
          }} 
          smooth 
          top="20" 
        />
      </div>
      
      <Footer />
    </div>
  );
};

export default Layout;

