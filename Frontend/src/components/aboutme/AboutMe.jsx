import React from "react";
import AboutMeLeft from "./AboutMeLeft";
import AboutMeRight from "./AboutMeRight";

const AboutMe = () => {
  return (
    <div
      id="about"
      className="flex sm:flex-col md:flex-row pr-[14%] my-20 mb-12"
    >
      <AboutMeLeft />
      <AboutMeRight />
    </div>
  );
};

export default AboutMe;
