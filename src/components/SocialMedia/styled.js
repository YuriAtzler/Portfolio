import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
  background-color: #1a1a1a;
  border: 2px dashed #5a5a5a;
  text-align: center;
  transition: 0.5s;
  background-size: 200% auto;
  width: 200px;
  height: 50px;
  border-radius: 100px;

  :hover {
    cursor: pointer;
    background-color: #2a2a2a;
  }
`;
