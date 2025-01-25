import CTAImage from "../assets/CTA.png";
const CTA = () => {
  return (
    <section className="mt-36 px-6 flex justify-center items-center">
    <div className="CTA-block flex flex-col lg:flex-row items-center justify-center gap-6 p-8shadow-md">
      {/* Image */}
      <img 
        src={CTAImage} 
        alt="CTA" 
        className="h-32 w-32 object-contain lg:h-40 lg:w-40 rounded-lg"
      />
  
      {/* Content */}
      <div className="CTA-content text-center lg:text-left">
        <h1 className="font-semibold text-2xl lg:text-4xl text-darkBlue">
          Subscribe For More <br /> Info and Update from Hounter
        </h1>
      </div>
    </div>
  </section>
  
  );
};

export default CTA;
