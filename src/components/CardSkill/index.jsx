import React from "react";
import { SkillContainer } from "./styled";
import { Tooltip } from "react-tooltip";

export const CardSkill = (props) => {
  return (
    <SkillContainer data-aos="zoom-in-up">
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
