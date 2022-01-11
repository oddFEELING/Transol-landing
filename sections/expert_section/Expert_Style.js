import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  min-height: 80vh;
  min-height: 300px;
  display: flex;
  padding: 10vh 0;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
`;

//--------------------------------------->  Top content
export const TopSection = styled.section`
  width: 100%;
  height: auto;
  display: flex;
  padding: 8vh 15vw;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 2vh;

  h3 {
    color: ${(props) => props.theme.colors.main};
    font-weight: 600;
    font-size: clamp(1rem, 1.2vw, 5rem);
  }

  h1 {
    width: 50%;
    margin-top: -2vh;
    color: ${(props) => props.theme.colors.dk};
    font-weight: 800;
    font-size: clamp(1.5rem, 2vw, 5rem);

    @media (max-width: 680px) {
      font-size: clamp(1rem, 4.8vw, 5rem);
      width: 100%;
    }
  }
  p {
    color: ${(props) => props.theme.colors.lt_2};
    font-family: ${(props) => props.theme.fonts.sc_font};
    font-weight: 300;
    font-size: clamp(0.8rem, 1vw, 5rem);
    letter-spacing: 1px;
  }
`;

//--------------------------------------->  Step section

export const StepContainer = styled.section`
  width: 100%;
  min-height: 30vh;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5vw;
  /* background-color: orange; */

  @media (max-width: 680px) {
    flex-direction: column;
    gap: 5vh;
  }
`;
