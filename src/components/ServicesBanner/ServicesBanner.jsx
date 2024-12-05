import PropTypes from "prop-types";
import { FiPhoneCall } from "react-icons/fi";
import { IoMailOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { TiMessages } from "react-icons/ti";
const ServicesBanner = ({ data }) => {
  return (
    <>
      {data.isContact ? (
        <div className="DevOps_container">
          <div
            className="DevOpsMainHeader h-[470px] sm:h-[400px] md:h-[400px] flex flex-col items-start justify-center px-6 sm:px-10 md:px-16 text-white"
            style={{
              backgroundImage: `url(${data.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundAttachment: "fixed",
            }}
          >
            <span
              data-aos="zoom-out"
              data-aos-duration="500"
              data-aos-once="true"
              className=" text-white text-4xl sm:text-5xl  font-normal tracking-wider block mb-4 mt-9"
            >
              We appreciate your interest in Stigmata!
            </span>
            <span
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay="100"
              className=" text-white text-3xl font-semibold block mt-5 "
            >
              Let's have a discussion!!
            </span>
            <div className="flex justify-center gap-16 my-12">
              <a href="tel:+91 93453 36553">
                <FiPhoneCall className="text-white text-4xl" />
              </a>
              <a href="mailto:jerome@stigmatatech.com">
                <IoMailOutline className="text-white text-4xl" />
              </a>
              <a href="#">
                <TiMessages className="text-white text-4xl" />
              </a>
            </div>
          </div>
        </div>
      ) : (
        <div className="DevOps_container">
          <div
            className="DevOpsMainHeader h-[470px] sm:h-[400px] md:h-[400px] flex flex-col items-start justify-center px-6 sm:px-10 md:px-16 text-white"
            style={{
              backgroundImage: `url(${data.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundAttachment: "fixed",
            }}
          >
            <span
              data-aos="zoom-out"
              data-aos-duration="500"
              data-aos-once="true"
              className="DevOpsPageHeaderText1 text-3xl w-full sm:w-3/4 sm:text-4xl lg:text-5xl font-semibold tracking-wide leading-tight font-nunito"
            >
              {data.title}
            </span>
            <span
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay="100"
              className="DevOpsPageHeaderText2 w-full sm:w-2/3 md:w-1/2 text-sm sm:text-base font-normal mt-4 mb-6 leading-5"
            >
              {data.des}
            </span>
            <div className="flex items-center gap-2 mt-4 p-3 w-[200px] sm:w-[220px] md:w-[240px] bg-green bg-opacity-70 hover:bg-green transition duration-300 rounded-full text-white cursor-pointer shadow-lg transform hover:scale-105">
              <Link
                to="/contact"
                className="text-white font-semibold tracking-wide text-center w-full"
              >
                Talk to Experts
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

ServicesBanner.propTypes = {
  data: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    des: PropTypes.string.isRequired,
    isContact: PropTypes.bool.isRequired,
  }).isRequired,
};

export default ServicesBanner;
