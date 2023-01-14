import styled from "styled-components";

export const SkillContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: var(--background-dark);
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
