import React from "react";
import {
  ProjectContainer,
  ContainerTitle,
  Image,
  ContainerDescription,
} from "./styled";
import { Tooltip } from "react-tooltip";
import * as Components from "../";

export const CardProject = (props) => {
  return (
    <ProjectContainer
      data-aos="zoom-in-up"
      data-aos-anchor-placement="top-center"
    >
      <ContainerTitle>
        <Components.TextNormalComponent size={"20px"} weight={"bold"}>
          {props.name}
        </Components.TextNormalComponent>
        <Components.TextNormalComponent italic color={"rgba(255,255,255, 0.5)"}>
          {props.date}
        </Components.TextNormalComponent>
      </ContainerTitle>
      <a href={props.link} target="_blank" rel="noreferrer">
        <Image src={props.img} alt={props.name} />
      </a>
      <Tooltip
        anchorId={props.name}
        variant="info"
        style={{ width: "300px", opacity: 1 }}
      />
      <ContainerDescription>
        <Components.TextNormalComponent weight={"bold"}>
          Descrição
        </Components.TextNormalComponent>
        <p id={props.name} data-tooltip-content={props.description}>
          {props.description}
        </p>
      </ContainerDescription>
    </ProjectContainer>
  );
};
