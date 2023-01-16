import React from "react";
import * as Components from "../";
import avatar from "../../assets/avatar.png";
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
          <div>
            <img src={avatar} alt="avatar do yuri" />
          </div>
        </ProfileHeader>

        <ContainerSocialMedia data-aos="zoom-in">
          <Components.SocialMedia link={"https://github.com/YuriAtzler"}>
            <Components.TextNormalComponent>
              GitHub
            </Components.TextNormalComponent>
            <FaGithub fontSize={25} />
          </Components.SocialMedia>
          <Components.SocialMedia
            link={"https://www.linkedin.com/in/yurinunesatzler/"}
          >
            <Components.TextNormalComponent>
              LinkedIn
            </Components.TextNormalComponent>
            <FaLinkedinIn fontSize={25} />
          </Components.SocialMedia>
          <Components.SocialMedia link={curriculo}>
            <Components.TextNormalComponent>
              Currículo
            </Components.TextNormalComponent>
            <FaDownload fontSize={25} />
          </Components.SocialMedia>
        </ContainerSocialMedia>

        <ProfileBody>
          <Components.TagScript right open>
            Sobre Min
          </Components.TagScript>
          <p data-aos="zoom-in">
            Oi me chamo Yuri, tenho 22 anos e curso SI desde de 2020
            foi quando inicie meus estudos na área de TI, comecei desde
            cedo jogando video games muito por incentivo da minha fámilia
            que também gostava, quando conheci a programação eu me senti
            muito a vontade e animado em aprender mais. Hoje em dia foco
            meus estudos no desenvolvimento web e pretendo me tornar um dev
            full-stack.
          </p>
          <Components.TagScript closed>Sobre Min</Components.TagScript>
        </ProfileBody>
      </Wrapper>
    </ProfileContainer>
  );
};
