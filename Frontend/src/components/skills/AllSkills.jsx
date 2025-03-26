import SingleSkill from "./SingleSkill";
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
    skill: "ReactJS",
    icon: FaReact,
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
    skill: "Redux",
    icon: SiRedux,
  },
  {
    skill: "TypeScript",
    icon: SiTypescript,
  },
];

const AllSkills = () => {
  return (
    <div>
      <div className="flex items-center justify-center relative gap-2 max-w-[1200px] mx-auto">
        {skills.map((item, index) => (
          <SingleSkill key={index} text={item.skill} imgSvg={<item.icon />} />
        ))}
      </div>
    </div>
  );
};

export default AllSkills;
