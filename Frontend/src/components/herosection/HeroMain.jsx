import HeroText from "./HeroText";
import HeroPic from "./HeroPic";

const HeroMain = () => {
  return (
    <div className="sm:pt-40 md:pt-60 pb-16 mt-4 gap-4">
      <div className="flex flex-col md:flex-row max-w-[1200px] mx-auto justify-between items-center px-4">
        <div className="w-full md:w-2/3">
          <HeroText />
        </div>
        <div className="w-full md:w-1/3 flex justify-center">
          <HeroPic />
        </div>
      </div>
    </div>
  );
};

export default HeroMain;
