import styled from "styled-components";

export const SkillContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  background-color: var(--background-dark);
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 1000px;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  padding: 200px 0;

  @media screen and (max-width: 1100px) {
    width: 80%;
  }
`;

export const ContainerList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const List = styled.div`
  width: 100%;
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: center;
`;

export const ContainerDescription = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
`;
