import React from "react";
import { FiFolder } from "react-icons/fi";
import { Link } from "react-scroll";

const AboutMeLeft = () => {
  return (
    <div>
      <div className="flex flex-col mx-6 mt-6 md:max-w-[70%]">
        <div className="text-4xl text-lightCyan my-4">About Me</div>
        <div className="text-white font-body opacity-80">
          I am Achyuth Reddy, an aspiring software developer from Hyderabad,
          currently pursuing a B.Tech in IT at Malla Reddy College with a CGPA
          of 7.2. Skilled in Java, C++, JavaScript, and the MERN stack, I have
          built projects like a Zerodha-like trading platform and a bookstore
          app. With expertise in DSA and OOP, I am passionate about developing
          efficient and scalable software solutions.
        </div>
        <div>
          <Link
            to="projects" // Link to the projects section
            spy={true}
            smooth={true}
            duration={500}
            offset={-130}
          >
            <button className="flex items-center gap-2 bg-blue-500 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-lightCyan hover:text-black transition-all duration-300 border border-y-orange mt-6">
              <FiFolder className="text-xl" />
              My Projects
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutMeLeft;
