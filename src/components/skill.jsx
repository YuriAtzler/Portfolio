import React from "react";
import { SkillContainer } from "./skill.styled";
import { Tooltip } from "react-tooltip";

export const Skill = (props) => {
  return (
    <SkillContainer>
      <Tooltip anchorId={props.alt} />
      <img
        id={props.alt}
        src={props.img}
        alt={props.alt}
        data-tooltip-content={props.alt}
      />
    </SkillContainer>
  );
};
