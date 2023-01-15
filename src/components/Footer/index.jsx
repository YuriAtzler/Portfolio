import React from "react";
import {
  FooterContainer,
  Container,
  ContainerIcons,
  ContainerText,
} from "./styled";

import { FaLinkedinIn, FaInstagram, FaGithub, FaTwitter } from "react-icons/fa";

import * as Components from "../";

export const Footer = () => {
  return (
    <FooterContainer>
      <Container>
        <ContainerIcons>
          <a
            href="https://github.com/YuriAtzler"
            target={"_blank"}
            rel="noreferrer"
          >
            <FaGithub color="var(--background-100)" size={40} />
          </a>
          <a
            href="https://www.linkedin.com/in/yurinunesatzler/"
            target={"_blank"}
            rel="noreferrer"
          >
            <FaLinkedinIn color="var(--background-100)" size={40} />
          </a>
          <a
            href="https://www.instagram.com/iurii_atz/"
            target={"_blank"}
            rel="noreferrer"
          >
            <FaInstagram color="var(--background-100)" size={40} />
          </a>
          <a
            href="https://twitter.com/atzler_yuri"
            target={"_blank"}
            rel="noreferrer"
          >
            <FaTwitter color="var(--background-100)" size={40} />
          </a>
        </ContainerIcons>
        <Components.Divider color={"var(--background-100)"} width={"50%"} />
        <ContainerText>
          <p>
            Desenvolvido por <span>Yuri N. Atzler</span>
          </p>
        </ContainerText>
      </Container>
    </FooterContainer>
  );
};
