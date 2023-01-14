import React from "react";
import {
  BodyContainer,
  ProfileContainer,
  ProfileHeader,
  ProfileBody,
  SkillContainer,
  ProjectsContainer,
} from "./styled";

import { ArrSkills } from "./assets/skills";
import { ArrProjects } from "./assets/projects";
import { Skill } from "./components/skill";
import { Project } from "./components/project";
import "react-tooltip/dist/react-tooltip.css";
import * as Components from "./components";

export const App = () => {
  return (
    <BodyContainer>
      <Components.Profile />
      <Components.Skills />
      {/* <ProjectsContainer>
        <div id="box-project">
          <Components.TagScript>Projetos</Components.TagScript>
          <div className="list-project">
            {ArrProjects.map((item) => (
              <Project key={item.name} {...item} />
            ))}
          </div>
          <Components.TagScript closed>Projetos</Components.TagScript>
        </div>
      </ProjectsContainer> */}
    </BodyContainer>
  );
};
