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
  margin: auto;

  @media screen and (max-width: 1100px) {
    width: 80%;
  }
`;

export const ContainerList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
`;

export const ContainerForm = styled.div`
  width: 90%;
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  span {
    color: #ff4444;
    margin-top: -20px;
  }

  .button-submit {
    width: 175px;
    height: 50px;
    border: none;
    border-radius: 100px;
    background-color: #1a1a1a;
    border: 2px dashed #5a5a5a;

    :hover {
      cursor: pointer;
      opacity: 0.8;
    }
  }
`;

export const ContainerDescription = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
`;

export const TextInput = styled.input`
  width: 70%;
  height: 35px;
  margin: auto;
  background-color: #3a3a3a;
  border: none;
  padding: 10px;
  border-radius: 0 20px 20px 0;
  color: #fef7ff;
  font-weight: 500;
`;

export const Field = styled.div`
  width: 475px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background-color: #1a1a1a;
  border-radius: 0 20px 20px 20px;

  div {
    display: flex;
    margin: auto;
    max-width: 30%;
    min-width: 30%;
    align-items: center;
    justify-content: center;

    p {
      color: #fef7ff;
      font-weight: 600;
      text-transform: uppercase;
    }
  }

  .description {
    width: 75%;
    height: 120px;
    padding: 10px;
    border-radius: 0 20px 20px 0;
    resize: none;
    background-color: #3a3a3a;
    border: none;
    color: #fef7ff;
    font-weight: 500;
  }

  @media (max-width: 950px) {
    width: 100%;
    font-size: 10px;
  }
`;
