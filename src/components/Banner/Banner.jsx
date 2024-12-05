import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Banner = ({ data }) => {
  return (
    <div className="bg-bodyBg py-12  sm:px-10 lg:px-24">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-8">
        {/* Title */}
        <h2
          data-aos-duration="500"
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-gray-800 mb-6"
        >
          {data.title}
        </h2>

        {/* Description */}
        <p className="text-lg text-gray-600 mb-8 text-center leading-relaxed">
          {data.description}
        </p>

        {/* Roadmap Section */}
        <div className="space-y-8">
          {data.services.map((service, i) => (
            <div
              key={i}
              className="flex flex-col sm:flex-row items-start gap-6 mb-6"
            >
              <div className="h-10 w-10 flex-shrink-0 rounded-full bg-blue-500 text-white flex items-center justify-center font-semibold">
                {service.id1}
              </div>

              <div className="flex-1">
                <h4 className="text-lg font-semibold text-gray-800">
                  {service.subtitle1}
                </h4>
                <p className="text-gray-600">{service.description1}</p>
              </div>

              <div className="h-10 w-10 flex-shrink-0 rounded-full bg-blue-500 text-white flex items-center justify-center font-semibold">
                {service.id2}
              </div>

              <div className="flex-1">
                <h4 className="text-lg font-semibold text-gray-800">
                  {service.subtitle2}
                </h4>
                <p className="text-gray-600">{service.description2}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Closing Statement */}
        <div data-aos-duration="500" className="mt-12 text-center">
          <p className="text-lg text-gray-600 mb-4 leading-relaxed text-start">
            {data.finalText1}{" "}
            <span className="font-semibold">{data.finalText2}</span>{" "}
            {data.finalText3}
          </p>
          <Link
            to="/contact-us"
            className="bg-green tracking-wide hover:scale-105 duration-200 text-white py-2 px-6 rounded-lg inline-block"
          >
            {data.buttonText}
          </Link>
        </div>
      </div>
    </div>
  );
};

Banner.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    services: PropTypes.arrayOf(
      PropTypes.shape({
        subtitle1: PropTypes.string.isRequired,
        description1: PropTypes.string.isRequired,
        subtitle2: PropTypes.string.isRequired,
        description2: PropTypes.string.isRequired,
      })
    ).isRequired,
    finalText1: PropTypes.string.isRequired,
    finalText2: PropTypes.string.isRequired,
    finalText3: PropTypes.string.isRequired,
    buttonText: PropTypes.string.isRequired,
  }).isRequired,
};

export default Banner;
