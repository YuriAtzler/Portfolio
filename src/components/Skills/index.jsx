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
          <div style={{ display: "flex" }} data-aos="fade-right">
            <Components.TagScript open>Conhecimentos</Components.TagScript>
          </div>
          <List>
            {ArrSkills.map((item) => (
              <Components.CardSkill key={item.alt} {...item} />
            ))}
          </List>
          <div style={{ display: "flex" }} data-aos="fade-left">
            <Components.TagScript closed>Conhecimentos</Components.TagScript>
          </div>
        </ContainerList>
      </Wrapper>
    </SkillContainer>
  );
};
