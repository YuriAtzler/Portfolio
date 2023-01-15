import styled from "styled-components";

export const ProfileContainer = styled.div`
  display: flex;
  width: 90%;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 1000px;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  padding: 100px 0;

  @media screen and (max-width: 1100px) {
    width: 80%;
    gap: 2rem;
  }
`;

export const ProfileHeader = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 90%;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  img {
    width: 200px;
    height: 200px;
    border-radius: 25px 50px;
  }

  @media screen and (max-width: 1100px) {
    align-items: center;
    flex-direction: column-reverse;
    gap: 2rem;
    text-align: center;

    img {
      width: 150px;
      height: 150px;
    }
  }
`;

export const ProfileBody = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;

  p {
    color: var(--white);
    width: 90%;
    text-align: justify;
    margin: 10px auto;
    line-height: 25px;
  }
`;

export const ContainerSocialMedia = styled.div`
  display: flex;
  width: 100%;
  gap: 3rem;
  justify-content: center;

  @media screen and (max-width: 900px) {
    align-items: center;
    flex-direction: column;
    gap: 1.5rem;
  }
`;
