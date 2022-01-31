import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  height: 85vh;
  min-height: 600px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  overflow: hidden;
  color: white;
  position: relative;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  background-color: ${(props) => props.theme.colors.dk};

  .img {
    width: 100%;
    height: 85vh;
    object-fit: cover;
  }

  &::after {
    content: '';
    width: 100%;
    height: 85vh;
    min-height: 600px;
    position: absolute;
    left: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.7);
  }

  @media (max-width: 1000px) {
    padding: 15vh 10vw;
    justify-content: flex-end;
    align-items: flex-start;
  }
`;

export const TextArea = styled.section`
  width: 40%;
  height: 80%;
  display: flex;
  margin: 0 8vw;
  gap: 6vh;
  margin-top: 5vh;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  z-index: 3;

  @media (max-width: 1000px) {
    width: 100%;
    /* text-align: center; */
    align-items: flex-start;
    justify-content: flex-end;
    margin: 12vh 0 0 0;
  }
`;

export const HeroTitle = styled.h1`
  width: 45vw;
  margin-top: 8vh;
  color: white;
  font-size: clamp(3rem, 3.8vw, 8rem);

  @media (max-width: 800px) {
    width: 100%;
    font-size: clamp(2.5rem, 6.5vw, 5rem);
  }

  b {
    color: ${(props) => props.theme.colors.main};
    font-weight: 800;
    letter-spacing: 2px;
  }
`;

export const HeroSubText = styled.p`
  width: 60%;
  color: rgba(255, 255, 255, 0.7);
  margin-top: -6vh;
  font-family: ${(props) => props.font};

  @media (max-width: 800px) {
    width: 100%;
    font-size: clamp(0.5rem, 2.54vw, 5rem);
  }
`;
