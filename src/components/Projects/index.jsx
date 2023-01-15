import React from "react";
import {
  ProjectsContainer,
  Wrapper,
  ContainerList,
  List,
  ContainerDescription,
} from "./styled";
import * as Components from "../";
import { ArrProjects } from "../../assets/projects";
import backgroundDetail from "../../assets/backgroundDetail01.png";

export const Projects = () => {
  return (
    <ProjectsContainer
      style={{
        backgroundImage: `url(${backgroundDetail})`,
      }}
    >
      <Wrapper>
        <ContainerDescription data-aos="fade-down">
          <Components.TextGradientComponent size={`${window.innerWidth <= 900 ? "35px" : "55px"}`} weight={"bold"}>
            Projetos Realizados
          </Components.TextGradientComponent>
        </ContainerDescription>
        <ContainerList>
          <Components.Divider width={"90%"} color={"var(--background-100)"} />
          <div style={{ display: "flex" }} data-aos="fade-right">
            <Components.TagScript open>Projetos</Components.TagScript>
          </div>
          <List>
            {ArrProjects.map((item) => (
              <Components.CardProject key={item.name} {...item} />
            ))}
          </List>
          <div style={{ display: "flex" }} data-aos="fade-left">
            <Components.TagScript closed>Projetos</Components.TagScript>
          </div>
        </ContainerList>
      </Wrapper>
    </ProjectsContainer>
  );
};
