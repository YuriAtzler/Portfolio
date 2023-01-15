import styled from "styled-components";

export const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
`;

export const ContainerTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Image = styled.img`
  width: 100%;

  :hover {
    cursor: pointer;
    opacity: 0.9;
  }
`;

export const ContainerDescription = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 150px;

  p {
    text-align: justify;
    background: -webkit-linear-gradient(
      rgba(255, 255, 255, 1),
      rgba(255, 255, 255, 0.1)
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    :hover {
      cursor: pointer;
    }
  }
`;
