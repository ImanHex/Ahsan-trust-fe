import { partnership } from "lib/data";
import LeftImage from "@assets/LeftImage.png";

function Header() {
  return (
    <header className="flex flex-col lg:flex-row items-center lg:items-start gap-6 px-6 py-12">
      {/* Left Section */}
      <div className="lg:w-1/2 text-center lg:text-left mt-12">
        <h1 className="text-3xl md:text-5xl font-bold leading-snug text-darkBlue">
          We Help Our <br /> Locals Achieve{" "}
          <span
            className="text-transparent"
            style={{ WebkitTextStroke: "1px rgba(27, 28, 87, 1)" }}
          >
            Their
          </span>{" "}
          Dreams Here
        </h1>
        <p className="text-lg text-gray-600 mt-6">
          Experience elegance with our beautifully embroidered floral dresses,
          designed to add grace and sophistication to every look. Boost your
          confidence and beauty effortlessly, every single day. 🌸✨ Elevate
          your wardrobe with a distinctive style that's uniquely yours.
          Pre-order now and be the first to own this stunning piece!
          <p className="text-blue-500"> #MuslimDresses #AnisaCollection #ElegantFashion #FloralEmbroidery
          #MuslimStyle</p>
        </p>
        <div className="mt-4 p-3">
          <p className="text-gray-600 font-normal text-base text-center md:text-left">
          Sponsored by
          </p>

          {/* Partnership Logos */}
          <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-6 gap-4 sm:gap-6 mt-4">
            {partnership.map((partner, index) => (
              <img
                src={partner.url}
                key={index}
                className="w-full h-auto object-contain"
                alt={`Partner ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="lg:w-1/2">
        <img
          src={LeftImage}
          alt="Header Image"
          className="w-full h-auto object-contain"
        />
      </div>
    </header>
  );
}

export default Header;
