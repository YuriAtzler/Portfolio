import styled from "styled-components";

export const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100vw;
  min-height: 100vh;
  background-color: var(--background);
`;

export const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  margin-top: 50px;

  #box-project {
    display: flex;
    flex-direction: column;
    width: 80%;
    margin: auto;
    gap: 1rem;

    .open-tag {
      color: var(--detail);
      font-size: 20px;

      span {
        color: var(--white);
      }
    }

    .close {
      margin-left: auto;
    }

    .list-project {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-evenly;
      gap: 3rem;
    }
  }
`;
