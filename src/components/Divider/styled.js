import styled from "styled-components";

export const Element = styled.hr`
  width: ${({ width }) => (width ? width : "100%")};
  background-color: ${({ color }) => (color ? color : "#fff")};
  margin: ${({ margin }) => (margin ? margin : "0")};
  border: none;
  height: 1px;
`;
