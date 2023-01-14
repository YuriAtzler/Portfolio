import React from "react";
import { ProjectContainer } from "./project.styled";
import { Tooltip } from "react-tooltip";

export const Project = (props) => {
  return (
    <ProjectContainer>
      <h1>{props.name}</h1>
      <a href={props.link} target="_blank" rel="noreferrer">
        <img src={props.img} alt={props.name} />
      </a>
      <Tooltip anchorId={props.name} />
      <div>
        <p>{props.date}</p>
        <p id={props.name} data-tooltip-content={props.description}>
          {props.description}
        </p>
      </div>
    </ProjectContainer>
  );
};
