import styled from "styled-components";

export const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100vw;
  min-height: 100vh;
  background-color: var(--background);
`;

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  margin-top: 50px;
`;

export const ProfileHeader = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    h1 {
      color: transparent;
      font-size: 50px;
      text-transform: capitalize;
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
    }

    p {
      color: var(--text-secondary);
      font-size: 20px;
      font-style: italic;
    }
  }

  img {
    width: 200px;
    height: 200px;
    border-radius: 100%;
  }

  @-webkit-keyframes rotate {
    100% {
      transform: rotate(1turn);
    }
  }
  @keyframes rotate {
    100% {
      transform: rotate(1turn);
    }
  }
  .anim-border {
    position: relative;
    z-index: 0;
    width: 200px;
    height: 200px;
    border-radius: 100%;
    overflow: hidden;
    padding: 0.25rem;
  }
  .anim-border::before {
    content: "";
    position: absolute;
    z-index: -2;
    left: -50%;
    top: -50%;
    width: 200%;
    height: 200%;
    background-color: #b7a7ff;
    background-repeat: no-repeat;
    background-size: 50% 50%, 50% 50%;
    background-position: 0 0, 100% 0, 100% 100%, 0 100%;
    background-image: linear-gradient(#2e00ff, #917af9);
    -webkit-animation: rotate 4s linear infinite;
    animation: rotate 4s linear infinite;
  }
  .anim-border::after {
    content: "";
    position: absolute;
    z-index: -1;
    left: 6px;
    top: 6px;
    width: calc(100% - 12px);
    height: calc(100% - 12px);
    background: white;
    border-radius: 100%;
  }
  .anim-border img {
    width: 100%;
  }
  .container {
    max-width: 1060px;
    margin: auto;
  }
`;

export const ProfileBody = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: auto;
  margin-top: 50px;

  .open-tag {
    color: var(--detail);
    font-size: 20px;

    span {
      color: var(--white);
    }
  }

  p {
    color: var(--white);
    width: 90%;
    text-align: justify;
    margin: 10px auto;
    line-height: 25px;
  }

  h1:last-child {
    margin-left: auto;
  }
`;

export const SkillContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  margin-top: 50px;

  #box {
    display: flex;
    flex-direction: column;
    width: 80%;
    margin: auto;
    gap: 1rem;

    .open-tag {
      color: var(--detail);
      font-size: 20px;

      span {
        color: var(--white);
      }
    }

    h1:last-child {
      margin-left: auto;
    }

    #list {
      width: 100%;
      height: 100px;
      display: flex;
      gap: 2rem;
      overflow-y: hidden;
      justify-content: flex-start;
      margin: auto;
    }
  }
`;

export const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  margin-top: 50px;

  #box-project {
    display: flex;
    flex-direction: column;
    width: 80%;
    margin: auto;
    gap: 1rem;

    .open-tag {
      color: var(--detail);
      font-size: 20px;

      span {
        color: var(--white);
      }
    }

    .close {
      margin-left: auto;
    }

    .list-project {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-evenly;
      gap: 3rem;
    }
  }
`;
