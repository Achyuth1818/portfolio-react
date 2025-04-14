import React from "react";
import NavbarMain from "./components/navbar/NavbarMain";
import HeroMain from "./components/herosection/HeroMain";

import SubHeroMain from "./components/subherosection/SubHeroMain";
import AboutMe from "./components/aboutme/AboutMe";
import SkillsMain from "./components/skills/SkillsMain";
import ProjectsMain from "./components/projectsSection/ProjectsMain";
import ContactMeMain from "./components/contactMeSection/ContactMeMain";
import FooterMain from "./components/footer/FooterMain";

const App = () => {
  return (
    <div>
      <NavbarMain />
      <HeroMain />
      <SubHeroMain />
      <AboutMe />
      <SkillsMain />
      <ProjectsMain />
      <ContactMeMain />
      <FooterMain />
    </div>
  );
};

export default App;
