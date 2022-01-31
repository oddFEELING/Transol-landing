import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  min-height: 70vh;
  display: flex;
  padding: 5vh 3vw;
  flex-direction: column;
  gap: 5vh;
  align-items: center;
  justify-content: center;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 92%);
  background-color: ${(props) => props.theme.colors.dk};

  h1 {
    color: ${(props) => props.theme.colors.lt};
    font-size: clamp(1.5rem, 2vw, 5rem);

    @media (max-width: 680px) {
      font-size: clamp(1rem, 4.8vw, 5rem);
    }
  }
`;

//--------------------------------------->  Card section
export const CardSection = styled.div`
  width: 100%;
  min-height: 40vh;
  display: flex;
  gap: 5vh;
  align-items: center;
  justify-content: center;
  /* background-color: blue; */

  @media (max-width: 680px) {
    flex-direction: column;
    gap: 0;
  }
`;

export const CardDiv = styled.div`
  width: 35vw;
  height: 40vh;
  padding: 120px 3vw;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 2vw;
  background-color: rgba(255, 255, 255, 0.02);

  //-->  Ipad pro screen solve distortion
  @media (max-width: 1024px) {
    height: 33vh;
    padding: 11vh 3vw;
  }

  @media (max-width: 680px) {
    width: 90%;
    height: 30vh;
    padding: 2vh 3vw;
    background-color: transparent;
  }
`;

export const CardIconDiv = styled.div`
  width: 35px;
  height: 35px;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
`;

export const TextArea = styled.div`
  width: 65%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  /* background-color: orange; */

  h1 {
    font-size: clamp(0.9rem, 1.3vw, 5rem);
    color: ${(props) => props.theme.colors.lt};

    b {
      color: ${(props) => props.theme.colors.main};
    }

    @media (max-width: 680px) {
      font-size: 1.1rem;
    }
  }

  p {
    font-family: ${(props) => props.theme.fonts.sc_font};
    font-size: clamp(0.55rem, 0.85vw, 5rem);
    color: ${(props) => props.theme.colors.dk_2};

    @media (max-width: 680px) {
      font-size: 0.85rem;
    }
  }
`;
