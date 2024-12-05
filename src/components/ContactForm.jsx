import React, { useState } from "react";
import { IoLocationOutline } from "react-icons/io5";
import { LuPhoneCall } from "react-icons/lu";
import { MdMailOutline, MdRefresh } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";
import canadaFlag from "/images/icons/canada.png";
import IndianFlag from "/images/icons/Indianflag.png";
import usaFlag from "/images/icons/usa.png";
const ContactForm = () => {
  const initalValues = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };
  // const [capVal, setcapVal] = useState(null);
  const randomString = Math.random().toString(36).slice(8);
  const [captcha, setCaptcha] = useState(randomString);
  const [text, setText] = useState("");
  const [valid, setValid] = useState(false);
  const refreshing = () => {
    setCaptcha(Math.random().toString(36).slice(8));
  };

  const matchCaptcha = () => {
    return text === captcha;
  };

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    if (!matchCaptcha()) {
      setValid(false);
      setResult("Captcha does not match. Please try again.");
      return;
    }
    setValid(true);

    const formData = new FormData(event.target);
    console.log(formData, "formmmm");

    formData.append("access_key", "4d175d08-6329-4667-86e6-c73e9febe81c");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      alert("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      alert(
        "Form not submitting ! please try again later (or) contact this Number 9790845787"
      );
    }
  };
  return (
    <div className="w-full flex flex-col lg:flex-row">
      <div className="flex flex-col p-8 ">
        <span className=" text-[40px] sm:text-[45px] font-light text-transparent bg-clip-text bg-gradient-to-r from-[#0565fe] to-[#d241a4] mb-6 capitalize ">
          Our office locations
        </span>
        <div className="border-b border-silver pb-4">
          <div className="flex items-center gap-4">
            <img src={canadaFlag} alt="" className="w-10" />
            <span className="text-[20px] font-semibold text-black">Canada</span>
          </div>
          <div className="flex items-center pt-2 gap-4">
            <IoLocationOutline class="text-[20px]" />
            <span className="text-[16px] tracking-wide space-x-2 text-black cursor-pointer">
              <a href="" className="no-underline text-black cursor-default">
                3200, Autoroute Jean-Noël-Lavoie, Laval, H7T 2H6
              </a>
            </span>
          </div>
          <div className="flex items-center pt-2 gap-4">
            <LuPhoneCall class="text-[20px]" />
            <span className="text-[16px] tracking-wide space-x-2 text-black cursor-pointer">
              <a href="" className="no-underline text-black cursor-default">
                450-517-2023
              </a>
            </span>
          </div>
        </div>
        <div className="border-b border-silver pb-4 pt-4">
          <div className="flex items-center gap-4">
            <img src={usaFlag} alt="" className="w-10" />
            <span className="text-[20px] font-semibold text-black">
              USA (Head Office)
            </span>
          </div>
          <div className="flex items-center pt-2 gap-4">
            <IoLocationOutline className="text-[25px]" />
            <span className="text-[16px] tracking-wide space-x-2 text-black cursor-pointer">
              <a href="" className="no-underline text-black cursor-default">
                <span className="font-extrabold">
                  Stigmata Technology Solutions LLC
                </span>
                <br />
                11700 Lebanon Road, Apt 1527 Frisco, <br />
                TX 75035-75025
              </a>
            </span>
          </div>
          <div className="flex items-center pt-2 gap-4">
            <MdMailOutline className="text-[25px]" />
            <span className="text-[16px] tracking-wide space-x-2 text-black cursor-pointer">
              <a
                href="mailto:jeree@stigmatatech.com"
                className="no-underline text-black"
              >
                jeree@stigmatatech.com
              </a>
            </span>
          </div>
          <div className="flex items-center pt-2 gap-4">
            <LuPhoneCall className="text-[25px]" />
            <span className="text-[16px] tracking-wide space-x-2 text-black cursor-pointer">
              <a href="" className="no-underline text-black">
                +1 (480) 852-1881
              </a>
            </span>
          </div>
        </div>
        <div className="pt-4">
          <div className="flex items-center gap-4">
            <img src={IndianFlag} alt="" className="w-10" />
            <span className="text-[20px] font-semibold text-black">India</span>
          </div>
          <div className="flex items-center pt-2 gap-4">
            <SlLocationPin className="text-[25px]" />
            <span className="text-[16px] tracking-wide space-x-2 text-black cursor-pointer">
              <a href="" className="no-underline text-black">
                No.52/1, 2nd Floor, Meenambal Salai, Vivekandhar Nagar, <br />
                Near S.K Mahal, Chennai, India - 600118.
              </a>
            </span>
          </div>
          <div className="flex items-center pt-2 gap-4">
            <MdMailOutline class="text-[25px]" />
            <span className="text-[16px] tracking-wide space-x-2 text-black cursor-pointer">
              <a
                href="mailto:jerome@stigmatatech.com"
                className="no-underline text-black ml-2"
              >
                Jerome@stigmatatech.com
              </a>
              <br />
              <a href="" className="no-underline text-black  ">
                Jerome@stigmata.co.in
              </a>
            </span>
          </div>
          <div className="flex items-center pt-2 gap-4">
            <LuPhoneCall class="text-[25px]" />
            <span className="text-[16px] tracking-wide space-x-2 text-black cursor-pointer flex flex-col">
              <a
                href="mailto:jerome@stigmatatech.com"
                className="no-underline text-black ml-2"
              >
                +91 93453 36553
              </a>

              <a href="" className="no-underline text-black ">
                +91 97908 45787
              </a>
            </span>
          </div>
        </div>
      </div>

      <div className="contactPageFormRight mx-4 sm:mx-8 my-4 ml-0 h-auto sm:h-[30rem] flex flex-col px-[10px]">
        <form onSubmit={onSubmit}>
          {/* First and Last Name fields */}
          <div className="flex flex-col sm:flex-row gap-4 ">
            <div className="inputItem flex flex-col mt-4 sm:mt-8 gap-1 w-full sm:w-[50%]">
              <label className="text-[#0565fe] text-lg">First Name</label>
              <input
                type="text"
                name="First name"
                placeholder="eg. Jerome"
                required
                className="outline-none border border-silver p-4 w-full rounded-md"
              />
            </div>
            <div className="inputItem flex flex-col mt-4 sm:mt-8 gap-1 w-full sm:w-[50%]">
              <label className="text-[#0565fe] text-lg">Last Name</label>
              <input
                type="text"
                name="Last Name"
                placeholder="eg. David"
                required
                className="outline-none border border-silver p-4 w-full rounded-md"
              />
            </div>
          </div>

          {/* Email and Phone fields */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="inputItem flex flex-col mt-4 sm:mt-8 gap-1 w-full sm:w-[50%]">
              <label className="text-[#0565fe] text-lg">Email</label>
              <input
                type="email"
                name="email"
                placeholder="eg. abc@gmail.com"
                required
                className="outline-none border border-silver p-4 w-full rounded-md"
              />
            </div>
            <div className="inputItem flex flex-col mt-4 sm:mt-8 gap-1 w-full sm:w-[50%]">
              <label className="text-[#0565fe] text-lg">Phone</label>
              <input
                type="number"
                name="phone"
                placeholder="eg. 111-111-1111"
                required
                className="outline-none border border-silver p-4 w-full rounded-md"
              />
            </div>
          </div>

          {/* Message Textarea */}
          <div className="flex flex-col mt-4 gap-4">
            <div className="inputItem flex flex-col gap-1">
              <label className="text-[#0565fe] text-lg">
                How can we help you?
              </label>
              <textarea
                className="txinput p-4 border border-silver rounded-md w-full"
                rows="6"
                name="message"
                required
              ></textarea>
            </div>

            {/* Captcha */}
            <div className="contactCaptchaContainer flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-4">
              <span className="bg-black text-white p-2">{captcha}</span>
              <MdRefresh
                onClick={() => refreshing()}
                className="text-[#0565fe] text-xl cursor-pointer"
              />
              <input
                type="text"
                placeholder="Enter Captcha"
                value={text}
                onChange={(e) => setText(e.target.value)}
                required
                className="outline-none border border-silver p-4 rounded-md w-full sm:w-[250px]"
              />
            </div>
            <label className="captcheresult text-red-500 text-lg">
              {result}
            </label>
          </div>

          {/* Submit Button */}
          <div className="flex justify-start  mt-4">
            <button
              type="submit"
              className="cursor-pointer px-6 py-3 outline-none border-none bg-[#0565fe] text-white text-lg rounded-md mb-8"
            >
              Submit Form
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
