import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
  background-image: linear-gradient(
    to right,
    #314755 0%,
    #26a0da 51%,
    #314755 100%
  );
  text-align: center;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;
  width: 200px;
  height: 50px;
  border-radius: 10px;

  :hover {
    cursor: pointer;
    background-position: right center;
    color: #fff;
    text-decoration: none;
  }
`;
