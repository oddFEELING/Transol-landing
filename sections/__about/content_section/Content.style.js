import styled from 'styled-components';
import Tilt from 'react-parallax-tilt';

export const AbtContainer = styled.div`
  width: 100%;
  height: 100vh;
  min-height: 600px;
  display: flex;
  align-items: center;
  background-color: rgba(7, 41, 181, 0.035);
  justify-content: center;
  clip-path: polygon(0 0%, 100% 0, 100% 100%, 0 90%);

  @media (max-width: 600px) {
    clip-path: polygon(0 0%, 100% 0, 100% 100%, 0 95%);
  }
`;

export const ParallaxContainer = styled(Tilt)`
  width: 100%;
  height: 100%;
  padding: 5vh 5vw;
  display: flex;
  transform-style: preserve-3d;
  align-items: center;
  background-color: rgba(7, 41, 181, 0.035);
  justify-content: center;
  background-color: transparent;

  @media (max-width: 800px) {
    flex-direction: column-reverse;
    padding: 0;
  }
`;

export const ContentDiv = styled.div`
  width: 50%;
  min-width: 500px;
  height: 65%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  transform: translateZ(150px);
  gap: 10%;
  transform-style: preserve-3d;
  margin-right: -11vw;
  padding: 8% 6%;
  z-index: 2;
  color: black;

  border-radius: 0.8vw;
  background-color: rgba(250, 251, 253);
  box-shadow: 5px 12px 30px rgba(0, 0, 0, 0.3);

  @media (max-width: 800px) {
    width: 90%;
    min-width: 0;
    text-align: center;
    align-items: center;
    justify-content: 0;
    margin: -30% 0 0 0;
    transform: translateZ(10px);
  }

  h1 {
    font-family: ${(props) => props.theme.colors.dk};
    font-size: clamp(2rem, 2.8vw, 6rem);
    transform: translateZ(200px);
    cursor: pointer;
    text-shadow: 2px 5px 15px rgba(0, 0, 0, 0.2);

    &:hover {
      color: ${(props) => props.theme.colors.main};
    }

    @media (max-width: 800px) {
      font-size: clamp(1rem, 8.8vw, 6rem);
      transform: translateZ(50px);
    }
  }

  p {
    font-size: clamp(0.9rem, 0.8vw, 3rem);
    transform: translateZ(150px);
    cursor: pointer;
    text-align: justify;
    color: ${(props) => props.theme.colors.lt_2};

    @media (max-width: 800px) {
      font-size: clamp(0.75rem, 1.4vw, 6rem);
      transform: translateZ(20px);
    }
  }
`;

export const ImageDiv = styled.div`
  width: 35%;
  min-width: 300px;
  height: 85%;
  display: flex;
  align-items: center;
  transform: translateZ(50px);
  justify-content: center;
  transform-style: preserve-3d;
  background-color: ${(props) => props.theme.colors.dk};
  position: relative;
  overflow: hidden;
  /* border-radius: 0.8vw;
  box-shadow: 2px 10px 20px rgba(0, 0, 0, 0.2); */

  .img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover .img {
    transform: scale(1.1);
  }

  @media (max-width: 800px) {
    width: 100%;
    transform: translateZ(5px);
  }
`;
