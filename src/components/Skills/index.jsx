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
    <SkillContainer>
      <Wrapper>
        <ContainerDescription>
          <Components.TextGradientComponent size={"55px"} weight={"bold"}>
            Habilidades
          </Components.TextGradientComponent>
        </ContainerDescription>
        <Components.Divider width={"90%"} color={"var(--background-100)"} />
        <ContainerList>
          <Components.TagScript open>Conhecimentos</Components.TagScript>
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
