import React from "react";
import { Container } from "./styled";

export const SocialMedia = ({ children, link }) => {
  return (
    <a href={link ? link : null} target="_blank" rel="noreferrer" download>
      <Container>{children}</Container>
    </a>
  );
};
