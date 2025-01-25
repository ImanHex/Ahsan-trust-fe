import AhsanTrustLogo from "components/shared/ahsanTrustLogo";

const Footer = () => {
  return (
    <footer className="mt-5 px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-4 bg-gray-50 shadow-md">
      {/* Logo */}
      <div className="flex-shrink-0">
        <AhsanTrustLogo />
      </div>

      {/* Footer Text */}
      <span className="text-xs sm:text-sm md:text-base text-center md:text-left leading-5 sm:leading-6 text-gray-600">
        © 2024 AHSAN Trustmark. All rights reserved.
      </span>
    </footer>
  );
};

export default Footer;
