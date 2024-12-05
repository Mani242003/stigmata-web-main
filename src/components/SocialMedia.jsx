import React from "react";
import { FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

const SocialMedia = () => {
  return (
    <div className="fixed bottom-[13rem] right-0 z-50 text-white ">
      <div className="mb-1 p-[10px] text-[30px] bg-[#007BB6] flex items-center justify-center">
        <a
          href="https://www.facebook.com/StigmataTechnoSolutions/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookF />
        </a>
      </div>
      <div className="mb-1 p-[10px] bg-[#00ACED] text-[30px] flex items-center justify-center">
        <a
          href="https://www.youtube.com/channel/UCWi3Eqvsn3-rsJx6aFB2NSQ"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaYoutube />
        </a>
      </div>
      <div className="mb-1 p-[10px] bg-[#007BB6] text-[30px] flex items-center justify-center">
        <a
          href="https://www.linkedin.com/in/jerome-melkisidak-970b635b/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedinIn />
        </a>
      </div>

    </div>
  );
};

export default SocialMedia;
