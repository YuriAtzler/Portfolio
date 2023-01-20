import styled from "styled-components";

export const NavigatorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 75px;
  height: 200px;
  background-color: rgba(9, 9, 9, 0.4);
  position: fixed;
  top: 35%;
  left: 5%;
  border-radius: 10px;
  border: 1px solid #ececec;
  opacity: 0.5;

  a {
    :hover {
      opacity: 0.5;
    }
  }

  @media (max-width: 950px) {
    display: none;
  }
`;
