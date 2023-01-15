import styled from "styled-components";

export const TextNormal = styled.h1`
  margin: 0;
  padding: 0;
  font-size: ${({ size }) => (size ? size : "16px")};
  color: ${({ color }) => (color ? color : "#fff")};
  font-style: ${({ italic }) => (italic ? "italic" : "")};
  font-weight: ${({ weight }) => (weight ? weight : "400")};
`;

export const TextGradient = styled.h1`
  margin: 0;
  padding: 0;
  color: transparent;
  font-size: ${({ size }) => (size ? size : "16px")};
  font-weight: ${({ weight }) => (weight ? weight : "400")};
  background-image: linear-gradient(
    to left,
    #eecc71,
    #3498db,
    #9b59b6,
    #f39c12
  );
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -o-background-clip: text;
  background-clip: text;
  animation: animate 5s linear infinite;
  -webkit-background-size: 500%;
  background-size: 500%;

  @keyframes animate {
    0% {
      background-position: 0 100%;
    }
    50% {
      background-position: 100% 0;
    }
    100% {
      background-position: 0 100%;
    }
  }
`;
