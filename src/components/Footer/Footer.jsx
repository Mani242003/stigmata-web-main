import React from "react";
import logo from "/logo.svg";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className="bg-[#f3f5f9] flex flex-col w-full">
      <div className="flex flex-col">
        {/* Section 1 */}
        <div className="flex flex-col items-center justify-center p-8 border-b border-silver gap-y-2 mb-4">
          <h2
            data-aos="zoom-in"
            className=" text-3xl sm:text-4xl   mt-6 font-bold text-center  tracking-wide mb-8"
          >
            "Driven by
            <span className="ml-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Innovation
            </span>
            , United by
            <span className="ml-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Expertise"
            </span>
          </h2>
          <span className="text-[25px] text-opacity-80 text-black">
            Let's get you started.
          </span>
        </div>

        {/* Section 2 */}
        <div className="flex flex-col sm:flex-row justify-between gap-[2rem] p-8 pb-12 ">
          {/* Services */}
          <div data-aos="zoom-in" className="flex flex-col ">
            <span className="text-[19px] font-semibold mb-4">Our Services</span>
            <Link className="hover:text-black mb-2" to="/serverless-computing">
              Serverless Computing
            </Link>
            <Link className="hover:text-black mb-2" to="/devops">
              DevOps
            </Link>
            <Link
              className="hover:text-black mb-2"
              to="/mobile-app=development"
            >
              Mobile App Development
            </Link>
            <Link className="hover:text-black mb-2" to="/plugin-development">
              Plugin Development
            </Link>
            <Link className="hover:text-black mb-2" to="/software-development">
              Software Application Development
            </Link>
            <Link
              className="hover:text-black mb-2"
              to="/Artificial-intelligence"
            >
              Artificial Intelligence
            </Link>
            <Link className="hover:text-black mb-2" to="/cloud-migration">
              Cloud Migration
            </Link>
          </div>

          {/* Product */}
          <div data-aos="zoom-in" className="flex flex-col">
            <span className="text-[19px] font-semibold mb-4">Our Product</span>
            <Link className="hover:text-black mb-2" to="https://clousec.io/">
              ClouSec
            </Link>
            <Link className="hover:text-black mb-2">Happiediner</Link>
            <Link className="hover:text-black mb-2">PII Protector</Link>
          </div>

          {/* Company */}
          <div data-aos="zoom-in" className="flex flex-col ">
            <span className="text-[19px] font-semibold mb-4">Company</span>
            <Link className="hover:text-black mb-2" to="/home">
              Home
            </Link>
            <Link className="hover:text-black mb-2" to="/about-us">
              About Us
            </Link>
            <Link className="hover:text-black mb-2" to="/blog">
              Blog
            </Link>
            <Link className="hover:text-black mb-2" to="/contact-us">
              Contact Us
            </Link>
          </div>

          {/* Help */}
          <div data-aos="zoom-in" className="flex flex-col">
            <span className="text-[19px] font-semibold mb-4">Help</span>
            <Link className="hover:text-black mb-2" to="/cookie-policy">
              Privacy Policy
            </Link>
            <Link className="hover:text-black mb-2" to="/careers">
              Careers
            </Link>
          </div>

          {/* Contact Sales */}
          <div data-aos="zoom-in" className="flex flex-col">
            <span className="text-[19px] font-semibold mb-4">
              Contact Sales
            </span>
            <span className="text-[16px] font-medium">Email</span>
            <a className="underline mb-2" href="mailto:sales@stigmatatech.com">
              sales@stigmatatech.com
            </a>
            <a className="underline mb-2" href="mailto:jerome@stigmatatech.com">
              jerome@stigmatatech.com
            </a>
            <a className="underline mb-2" href="mailto:jerome@stigmata.co.in">
              jerome@stigmata.co.in
            </a>

            <div className="border-t border-dashed border-silver my-3 w-full"></div>

            <div className="flex items-center gap-2 text-green-500">
              <Link to="/contact-us" className="font-medium tracking-wide">
                Talk to Concierge
              </Link>
              <MdKeyboardArrowRight />
            </div>
          </div>
        </div>

        {/* Section 4 */}
        <div className="bg-[#0b0d1f] flex flex-col items-center justify-center py-6 text-white gap-2">
          <picture>
            <source type="image/webp" />

            <img
              loading="lazy"
              role="presentation"
              src={logo}
              srcSet={`${logo}?w=500&h=500&fit=crop 500w, ${logo}?w=1000&h=1000&fit=crop 1000w`}
              sizes="(max-width: 600px) 500px, 1000px"
              alt="Description of the image"
              className="w-[170px]"

              // priority={data.isImportant ? true : false}
            />
          </picture>
          <span className="text-center mx-[1rem] ">
            © 2024 | Stigmata Techno Solution. Ltd. All Rights Reserved.
          </span>
        </div>
      </div>
    </section>
  );
};

export default Footer;
