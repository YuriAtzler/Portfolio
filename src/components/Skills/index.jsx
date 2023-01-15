import React from "react";
import {
  SkillContainer,
  ContainerList,
  List,
  ContainerDescription,
  Wrapper,
} from "./styled";
import * as Components from "../";
import { ArrSkills } from "../../assets/skills";

export const Skills = () => {
  return (
    <SkillContainer id="skills">
      <Wrapper>
        <ContainerDescription data-aos="fade-down">
          <Components.TextGradientComponent
            size={`${window.innerWidth <= 900 ? "35px" : "55px"}`}
            weight={"bold"}
          >
            Habilidades
          </Components.TextGradientComponent>
        </ContainerDescription>
        <ContainerList>
          <Components.Divider width={"90%"} color={"var(--background-100)"} />
          <Components.TagScript right open>
            Conhecimentos
          </Components.TagScript>
          <List>
            {ArrSkills.map((item) => (
              <Components.CardSkill key={item.alt} {...item} />
            ))}
          </List>
          <Components.TagScript closed>Conhecimentos</Components.TagScript>
        </ContainerList>
      </Wrapper>
    </SkillContainer>
  );
};
