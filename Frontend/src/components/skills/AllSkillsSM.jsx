import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa"; // Node.js icon
import { SiExpress } from "react-icons/si"; // Express.js icon
import { SiMongodb } from "react-icons/si"; // MongoDB icon
import { SiBootstrap } from "react-icons/si"; // Bootstrap icon
import { RiTailwindCssFill } from "react-icons/ri"; // TailwindCSS icon

const skills = [
  {
    skill: "HTML",
    icon: FaHtml5,
  },
  {
    skill: "CSS",
    icon: FaCss3Alt,
  },
  {
    skill: "JavaScript",
    icon: IoLogoJavascript,
  },
  {
    skill: "TypeScript",
    icon: SiTypescript,
  },
  {
    skill: "ReactJS",
    icon: FaReact,
  },
  {
    skill: "Redux",
    icon: SiRedux,
  },
  {
    skill: "MongoDB",
    icon: SiMongodb,
  },
  {
    skill: "ExpressJS",
    icon: SiExpress,
  },
  {
    skill: "Node.js",
    icon: FaNodeJs,
  },
  {
    skill: "TailwindCSS",
    icon: RiTailwindCssFill,
  },
  {
    skill: "Bootstrap",
    icon: SiBootstrap,
  },
  {
    skill: "RESTful API",
    icon: IoLogoJavascript, // You can replace this with a different icon if needed
  },
];

const AllSkillsSM = () => {
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-12 my-12">
      {skills.map((item, index) => (
        <div key={index} className="flex flex-col items-center">
          <item.icon className="text-7xl text-orange" />
          <p className="text-center mt-4 text-white">{item.skill}</p>
        </div>
      ))}
    </div>
  );
};

export default AllSkillsSM;
