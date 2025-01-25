import NavbarImg from "components/common/Navbar";
import BgAboutUs from "@assets/bg-about-us.png";
import AHSAN from "@assets/AHSAN Trustmark.png";
import { ahsan } from "lib/data";
import Footer from "components/common/Footer";
import { useEffect, useState } from "react";
import ahsanLogo from "@assets/AhsanTrustLogo.png";
import AhsanTeam from "components/OrganizationList";
import criteria5L from "@assets/criteria5L.png";
import BrandCI from "components/shared/BrandCI";

export function AboutUs() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 500); // Delay of 500ms
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-gray-100 mt-10">
      {/* Navbar */}
      <NavbarImg />

      {/* Hero Section */}
      <div className="relative w-full h-[500px] p-10">
        <img
          src={BgAboutUs}
          alt="Background"
          className="w-full h-full object-cover brightness-75 rounded-3xl"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white">
          <img src={AHSAN} alt="AHSAN Trustmark" className="h-36 md:h-48" />
          <p className="text-xs sm:text-sm md:text-lg lg:text-xl mt-4 font-semibold text-center px-12">
            AHSAN Trustmark: Global Excellence in Curation and Creation
          </p>
          <a
            href="https://forms.gle/Z8E3Xa54neLkmDmj6"
            className="mt-6 px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold rounded-full shadow-lg transform hover:scale-105 transition duration-300"
          >
            Join with us
          </a>
        </div>
      </div>

      {/* Content Section */}
      {showContent && (
        <div className="mx-auto px-6 lg:px-12 py-5">
          <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-800">
            About AHSAN
          </h2>
          <p className="text-center text-lg text-gray-600 mb-8">
            Discover our mission, vision, and the unique values that make AHSAN
            Trustmark a global leader in curation and creation.
          </p>

          {/* Horizontal Scrollable Row */}
          <div className="flex overflow-x-auto space-x-6 scrollbar-hide">
            {ahsan.map((item, index) => (
              <div
                key={index}
                className="flex-none w-64 bg-white shadow-md rounded-lg p-6 transform hover:scale-105 transition duration-300"
              >
                <div className="text-6xl font-bold text-white bg-gradient-to-r from-blue-500 to-blue-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto">
                  {item.letter}
                </div>
                <div className="mt-4 text-center">
                  <h3 className="text-lg font-bold text-gray-800">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 mt-2">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Horizontal Scrollable Row */}
          <div className="video-container mt-24 flex flex-col lg:flex-row items-center lg:items-start gap-6">
            {/* Video Section */}
            <div className="w-full lg:w-1/2">
              <iframe
                width="100%"
                height="315"
                src={`https://www.youtube.com/embed/Hl-disUxpq4?start=1`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-3xl shadow-lg w-full"
              ></iframe>
            </div>

            {/* Text Section */}
            <div className="lg:w-1/2 p-6 pt-16 rounded-3xl">
              <h2 className="text-xl lg:text-2xl font-semibold text-darkBlue mb-4">
                About AHSAN Trustmark
              </h2>
              <p className="text-sm lg:text-base text-gray-600 leading-relaxed">
                The AHSAN Trustmark is a certification that endorses the quality
                of products and services aimed at promoting and supporting the
                community-based economy (Ekonomi Ummah). It is managed by the
                AHSAN Trustmark Standards Committee at Fatoni University,
                ensuring compliance with Islamic principles and established
                standards.
              </p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 p-8 bg-gradient-to-r from-blue-50 to-gray-50 shadow-md rounded-3xl mt-24">
            {/* Text Section */}
            <div className="lg:w-4/5 pt-2">
              <h2 className="text-xl md:text-2xl font-bold text-darkBlue mb-4">
                AHSAN Trustmark Certification
              </h2>
              <p className="text-gray-600 text-sm md:text-sm lg:text-sm leading-relaxed">
                AHSAN Trustmark certifies products that aim to support the
                grassroots economy, promote the zakat system, and encourage waqf
                enterprises and charitable donations. Products certified with
                the AHSAN Trustmark adhere to standards that ensure compliance
                with Islamic principles throughout the production process. They
                emphasize transparency, fairness, and a focus on sustainable
                impact while promoting positive cultural values. This
                certification builds consumer confidence in both domestic and
                international markets.
              </p>
            </div>

            {/* Image Section */}
            <div className="flex-shrink-0  flex justify-center">
              <div className="relative group">
                <img
                  src={ahsanLogo}
                  alt="AHSAN Trustmark Logo"
                  className="w-28 h-28 md:w-36 md:h-36 lg:w-40 lg:h-40 object-contain shadow-lg transition-transform duration-300 group-hover:scale-105 rounded-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 opacity-0 group-hover:opacity-20 rounded-full transition-opacity duration-300"></div>
              </div>
            </div>
          </div>

          <div className="video-container mt-24 flex flex-col lg:flex-row items-center lg:items-start gap-6">
            <div className="lg:w-1/2 p-6 pt-16 rounded-3xl">
              <h2 className="text-xl md:text-2xl font-bold text-gray-800">
                Obtaining AHSAN Trustmark certification
              </h2>
              <p className="mt-4 text-sm md:text-base text-gray-600 leading-relaxed">
                reflects a product's commitment to promoting the Ummah economy,
                supporting the zakat system, or contributing to charitable
                initiatives and Waqf. It also demonstrates alignment with the
                objectives of Shariah (Maqasid Shariah), with an emphasis on
                environmental sustainability, making it highly appealing in the
                global halal market within the Muslim world.
              </p>
            </div>
            {/* Video Section */}
            <div className="w-full lg:w-1/2">
              <iframe
                width="100%"
                height="315"
                src={`https://www.youtube.com/embed/3Ih3uatCK5Y?start=10`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-3xl shadow-lg w-full"
              ></iframe>
            </div>
          </div>

          {/* Criteria */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 p-8 rounded-3xl mt-14">
            
             {/* Image Section */}
             <div className="flex-shrink-0">
              <img
                src={criteria5L}
                alt="Evaluation Criteria"
                className="w-full max-w-sm md:max-w-md rounded-3xl shadow-md"
              />
            </div>

            {/* Text Section */}
            <div className="text-center md:text-left">
              <p className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
                Evaluation Criteria as Defined by the AHSAN Trustmark Standards
                Committee
              </p>
              <p className="text-sm md:text-base text-gray-600">
                Ensure compliance with high standards of transparency,
                sustainability, and Islamic principles.
              </p>
            </div>
          </div>
          <BrandCI/>

          {/* Organizations */}
          <AhsanTeam />
        </div>
      )}

      {/* Footer */}
      <Footer />
    </div>
  );
}
