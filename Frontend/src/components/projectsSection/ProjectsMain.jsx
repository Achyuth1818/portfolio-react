import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";

const projects = [
  {
    name: "Zerodha",
    year: "Mar 2024",
    align: "right",
    image: "/images/website-img-1.jpg",
    link: "https://zerodha-git-main-achyuth-reddys-projects.vercel.app/",
  },
    {
    name: "Health Trackor",
    year: "Jan 2024",
    align: "left",
    image: "/images/website-img-3.jpg",
    link: "https://healthtrackor-2.onrender.com/",
  },
  {
    name: "BookStore",
    year: "Sept 2024",
    align: "right",
    image: "/images/website-img-2.webp",
    link: "https://github.com/Achyuth1818",
  },

  {
    name: "Simon Says Game",
    year: "May 2024",
    align: "left",
    image: "/images/website-img-4.jpg",
    link: "https://github.com/Achyuth1818",
  },
    {
    name: "to do list",
    year: "Oct 2024",
    align: "right",
    image: "/images/website-img-2.webp",
    link: "https://github.com/Achyuth1818",
  },

  {
    name: "my profile 2",
    year: "May 2023",
    align: "left",
    image: "/images/website-img-4.jpg",
    link: "https://achyuth-reddy-five-woad-20.vercel.app/",
  },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <ProjectsText />
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => (
          <SingleProject
            key={index}
            name={project.name}
            year={project.year}
            align={project.align}
            image={project.image}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsMain;
