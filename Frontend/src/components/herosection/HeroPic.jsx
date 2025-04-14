import { FaRegCircle } from "react-icons/fa";

const HeroPic = () => {
  return (
    <div className="h-full flex items-center justify-center">
      <div className="relative w-full md:max-w-[550px] sm:max-w-[350px] aspect-square flex items-center justify-center">
        {/* Rotating Circle */}
        <div className="absolute inset-0 flex items-center justify-center animate-spin-slow">
          <FaRegCircle className="w-[120%] h-[120%] text-cyan blur-md opacity-60 animate-glow" />
        </div>

        {/* Profile Image */}
        <div className="relative w-[80%] h-[80%] md:w-[90%] md:h-[90%] rounded-full overflow-hidden shadow-lg animate-float">
          <img
            src="/images/Achyuthimage2.jpg"
            alt="Achyuth Reddy"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroPic;
