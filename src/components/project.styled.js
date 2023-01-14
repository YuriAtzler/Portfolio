import styled from "styled-components";

export const ProjectContainer = styled.div`
  width: 300px;

  h1 {
    color: var(--white);
  }

  img {
    width: 100%;

    :hover {
      cursor: pointer;
      opacity: 0.9;
    }
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;

    p:first-child {
      color: var(--white);
    }

    p:last-child {
      text-align: justify;
      height: 50px;
      overflow: hidden;
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
  }
`;
