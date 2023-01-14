import React from "react";
import {
  BodyContainer,
  ProfileContainer,
  ProfileHeader,
  ProfileBody,
  SkillContainer,
  ProjectsContainer,
} from "./styled";
import avatar from "./assets/avatar.png";
import { ArrSkills } from "./assets/skills";
import { ArrProjects } from "./assets/projects";
import { Skill } from "./components/skill";
import { Project } from "./components/project";
import "react-tooltip/dist/react-tooltip.css";

export const App = () => {
  return (
    <BodyContainer>
      <ProfileContainer>
        <ProfileHeader>
          <div>
            <h1 className="anim-text-flow">Yuri N. Atzler</h1>
            <p>Front-end Developer</p>
          </div>
          <div class="anim-border">
            <img src={avatar} alt="avatar do yuri" />
          </div>
        </ProfileHeader>
        <ProfileBody>
          <h1 className="open-tag">
            <span>{"< "}</span>Sobre Min<span>{" >"}</span>
          </h1>
          <p>
            Estudante de Sistemas da Informação, apaixonado por tecnologia e
            programação, atualmente com 22 anose no 7° semestre do curso de
            Sistemas de Informação, possuo experiência de um pouco mais de 1 ano
            naárea de TI e tenho como objetivo primário me tornar um
            desenvolvedor full-stack. Estou sempre disposto anovas experiências
            e desafios.
          </p>
          <h1 className="open-tag">
            <span>{"</ "}</span>Sobre Min<span>{" >"}</span>
          </h1>
        </ProfileBody>
      </ProfileContainer>
      <SkillContainer>
        <div id="box">
          <h1 className="open-tag">
            <span>{"< "}</span>Conhecimentos<span>{" >"}</span>
          </h1>
          <div id="list">
            {ArrSkills.map((item) => (
              <Skill key={item.alt} {...item} />
            ))}
          </div>
          <h1 className="open-tag close">
            <span>{"</ "}</span>Conhecimentos<span>{" >"}</span>
          </h1>
        </div>
      </SkillContainer>
      <ProjectsContainer>
        <div id="box-project">
          <h1 className="open-tag">
            <span>{"< "}</span>Projetos<span>{" >"}</span>
          </h1>
          <div className="list-project">
            {ArrProjects.map((item) => (
              <Project key={item.name} {...item} />
            ))}
          </div>
          <h1 className="open-tag close">
            <span>{"</ "}</span>Projetos<span>{" >"}</span>
          </h1>
        </div>
      </ProjectsContainer>
    </BodyContainer>
  );
};
