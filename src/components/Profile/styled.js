import styled from "styled-components";

export const ProfileContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 1000px;
  height: 100vh;
  justify-content: center;
  align-items: center;
  gap: 3rem;
`;

export const ProfileHeader = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  img {
    width: 200px;
    height: 200px;
    border-radius: 100%;
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
`;
