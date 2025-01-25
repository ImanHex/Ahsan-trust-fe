import React from "react";
import ahsanlogo from "@assets/AHSAN Trustmark.png";
import brandColor from "@assets/brandcolor.png";

const BrandCI: React.FC = () => {
  return (
    <div className="p-4 md:p-8 bg-gray-50 rounded-3xl shadow-sm my-20">
      <h1 className="text-2xl md:text-3xl font-bold text-darkBlue mb-3">
        Brand CI (Corporate Identity) AHSAN Trustmark
      </h1>
      {/* Brand Identity Section */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6 bg-white p-6 shadow-lg rounded-lg">
        {/* Logo Section */}
        <div className="flex-shrink-0 bg-darkBlue rounded-full w-40 h-40 p-5">
          <img
            src={ahsanlogo}
            alt="AHSAN Trustmark Logo"
            className="w-28 h-28 md:w-32 md:h-32 object-contain"
          />
        </div>
        {/* Brand Information Section */}
        <div className="flex-1 pt-8">
          <h1 className="text-2xl md:text-3xl font-bold text-darkBlue mb-3">
            AHSAN Trustmark
          </h1>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed">
            is a symbol that reflects reliability,
            perfection, and excellence. We use a design that conveys trust,
            faith, and quality, verified and certified to meet high standards.
          </p>
        </div>
      </div>

      {/* Brand Color Section */}
      <div className="mt-8 flex flex-col lg:flex-row items-center lg:items-start gap-6">
        {/* Brand Colors Explanation */}
        <div className="flex-1 bg-white p-6 shadow-lg rounded-lg mt-10">
          <h2 className="text-xl md:text-2xl font-bold text-darkBlue mb-3">
            Brand Color
          </h2>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed">
            <strong>Teal Green:</strong> Signifies sustainability and
            environmental friendliness—water, soil, and air.
            <br />
            <strong>Gold:</strong> Represents excellence and meticulous quality,
            often rare.
            <br />
            <strong>White:</strong> Symbolizes the purity of faith, free from
            shirk, aligning with Maqasid Shar’iyyah.
            <br />
            <strong>Blue:</strong> Promotes the philosophy of sufficiency
            economy, highlighting producer honesty, care, and consumer brand
            loyalty.
          </p>
        </div>

        {/* Brand Color Image */}
        <div className="flex-shrink-0">
          <img
            src={brandColor}
            alt="Brand Colors"
            className="w-full max-w-md rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default BrandCI;
