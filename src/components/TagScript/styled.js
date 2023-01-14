import styled from "styled-components";

export const Tag = styled.h1`
  font-size: ${({ size }) => (size ? size : "16px")};
  color: transparent;
  background-image: linear-gradient(
    to left,
    #eecc71,
    #3498db,
    #9b59b6,
    #f39c12
  );
  -webkit-background-clip: text;
  animation: animate 5s linear infinite;
  -webkit-background-size: 500%;
  background-size: 500%;
  margin-left: ${({ closed }) => (closed ? "auto" : "0")};
  margin-right: ${({ open }) => (open ? "auto" : "0")};

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

  span {
    color: var(--white);
  }
`;
