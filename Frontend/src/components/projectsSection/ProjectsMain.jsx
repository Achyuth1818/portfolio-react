import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";

const projects = [
  {
    name: "Zerodha",
    year: "Mar 2024",
    align: "right",
    image: "/images/website-img-1.jpg",
    link: "#",
  },
  {
    name: "BookStore",
    year: "Sept 2024",
    align: "left",
    image: "/images/website-img-2.webp",
    link: "#",
  },
  {
    name: "Todo List",
    year: "Jan 2023",
    align: "right",
    image: "/images/website-img-3.jpg",
    link: "#",
  },
  {
    name: "Simon Says Game",
    year: "May 2024",
    align: "left",
    image: "/images/website-img-4.jpg",
    link: "#",
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
