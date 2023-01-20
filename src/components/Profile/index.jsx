import React from "react";
import * as Components from "../";
import {
  ProfileBody,
  ProfileContainer,
  ProfileHeader,
  ContainerSocialMedia,
  Wrapper,
} from "./styled";
import { FaLinkedinIn, FaDownload, FaGithub } from "react-icons/fa";
import curriculo from "../../assets/curriculo.pdf";
import backgroundDetail from "../../assets/backgroundDetail01.png";

export const Profile = () => {
  return (
    <ProfileContainer
      id="profile"
      style={{
        backgroundImage: `url(${backgroundDetail})`,
        backgroundSize: "cover",
      }}
    >
      <Wrapper>
        <ProfileHeader>
          <div>
            <Components.TextGradientComponent
              size={`${window.innerWidth <= 900 ? "35px" : "55px"}`}
              weight={"bold"}
            >
              Yuri N. Atzler
            </Components.TextGradientComponent>
            <Components.Divider
              margin={"15px"}
              width={"90%"}
              color={"var(--background-100)"}
            />
            <Components.TextNormalComponent
              size={`${window.innerWidth <= 900 ? "15px" : "25px"}`}
              italic
            >
              Front-End Developer
            </Components.TextNormalComponent>
          </div>
        </ProfileHeader>

        <ContainerSocialMedia data-aos="zoom-in">
          <Components.SocialMedia link={"https://github.com/YuriAtzler"}>
            <Components.TextGradientComponent weight={"bold"}>
              GitHub
            </Components.TextGradientComponent>
            <FaGithub fontSize={25} />
          </Components.SocialMedia>
          <Components.SocialMedia
            link={"https://www.linkedin.com/in/yurinunesatzler/"}
          >
            <Components.TextGradientComponent weight={"bold"}>
              LinkedIn
            </Components.TextGradientComponent>
            <FaLinkedinIn fontSize={25} />
          </Components.SocialMedia>
          <Components.SocialMedia link={curriculo}>
            <Components.TextGradientComponent weight={"bold"}>
              Currículo
            </Components.TextGradientComponent>
            <FaDownload fontSize={25} />
          </Components.SocialMedia>
        </ContainerSocialMedia>

        <ProfileBody>
          <Components.TagScript right open>
            Sobre Min
          </Components.TagScript>
          <p data-aos="zoom-in">
            Oi me chamo Yuri, tenho 22 anos e curso SI desde de 2020 foi quando
            inicie meus estudos na área de TI, trabalho como desenvolvedor
            front-end a mais de 1 ano e passei pela formação do Vem ser 10° da
            DBC Company, um programa de capacitação. <br /> <br /> Também já
            participei de alguns projetos como desenvolvedor back-end utilizando
            principalmente nodeJs na criação de apis rest, e tenho como primeiro
            e principal objetivo de carreira me tornar um desenvolvedor
            full-stack.
          </p>
          <Components.TagScript closed>Sobre Min</Components.TagScript>
        </ProfileBody>
      </Wrapper>
    </ProfileContainer>
  );
};
