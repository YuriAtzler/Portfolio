import styled from "styled-components";

export const SkillContainer = styled.div`
  width: 100px;
  height: 100px;

  img {
    width: 100px;
    height: 100px;

    :hover {
      cursor: pointer;
    }
  }

  @media screen and (max-width: 900px) {
    width: 75px;
    height: 75px;

    img {
      width: 75px;
      height: 75px;
    }
  }
`;
