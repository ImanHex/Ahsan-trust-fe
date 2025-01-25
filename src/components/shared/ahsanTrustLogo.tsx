import AhsanLogo from "../../assets/AhsanTrustLogo.png";
const AhsanTrustLogo = () => {
  return (
    <div>
      <a href="/" className="flex items-center gap-2">
      <img src={AhsanLogo} alt="Ahsan Trust Logo" width={40} height={40} />
      <h1 className="text-base font-semibold leading-none text-darkBlue">
        AHSAN Trustmark
      </h1>
      </a>
    </div>
  );
};

export default AhsanTrustLogo;
