import styled from 'styled-components';
import Tilt from 'react-parallax-tilt';

export const Container = styled(Tilt)`
  width: 25%;
  height: 250px;
  display: flex;
  padding: 5vh 2vw;
  margin-top: -5vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 1.5vh;
  transform-style: preserve-3d;
  cursor: pointer;
  border: 0 solid rgba(0, 0, 0, 0.2);
  /* background-color: green; */

  &:hover {
    transform: scale(1.02) translateY(-10px);
    border-radius: 0.6vw;
    box-shadow: 1px 4px 25px rgba(0, 0, 0, 0.1);
  }

  h2 {
    font-weight: 800;
    color: ${(props) => props.theme.colors.dk_2};
    font-size: clamp(1rem, 1.2vw, 4rem);
    transform: translateZ(30px);
    &:hover {
      text-shadow: 1px 4px 25px rgba(0, 0, 0, 0.1);
      color: #0729a1;
    }
  }

  p {
    font-family: ${(props) => props.theme.fonts.sc_font};
    color: ${(props) => props.theme.colors.lt_2};
    font-size: clamp(0.8rem, 0.85vw, 4rem);
    transform: translateZ(20px);
    &:hover {
      text-shadow: 1px 4px 25px rgba(0, 0, 0, 0.1);
      color: #4779a1;
    }
  }

  @media (max-width: 680px) {
    width: 80%;
    height: 180px;
    padding: 1vh 2vw;
  }
`;

export const IconCard = styled.div`
  width: 60px;
  min-height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 9px;
  transform: translateZ(40px);
  background-color: white;
  box-shadow: 2px 10px 30px rgba(0, 0, 0, 0.1);
  &:hover {
    transform: translateY(-10px) translateZ(50px);
    box-shadow: 2px 10px 30px rgba(0, 0, 0, 0.2);
  }
`;
