import styled from "styled-components";

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: var(--background-dark);
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;
  padding: 50px 0;
  gap: 1rem;
`;

export const ContainerIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;

  a {
    :hover {
      opacity: 0.5;
    }
  }
`;

export const ContainerText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    color: #555;

    span {
      color: #666;
      font-style: italic;
      font-weight: bold;
    }
  }
`;
