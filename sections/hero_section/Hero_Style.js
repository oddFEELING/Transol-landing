import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  height: 80vh;
  min-height: 600px;
  display: flex;
  padding: 10vh 5vw;
  flex-direction: column;
  gap: 6vh;
  align-items: flex-start;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.dk};

  @media (max-width: 800px) {
    padding: 15vh 10vw;
    justify-content: flex-end;
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
`;

export const HeroSubText = styled.p`
  width: 45%;
  color: rgba(255, 255, 255, 0.7);
  margin-top: -6vh;
  font-family: ${(props) => props.font};

  @media (max-width: 800px) {
    width: 100%;
    font-size: clamp(0.5rem, 2.54vw, 5rem);
  }
`;

export const ButtonSection = styled.section`
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2vw;
`;
