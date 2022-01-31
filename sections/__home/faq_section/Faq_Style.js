import styled from 'styled-components';
import Accordion from '@mui/material/Accordion';

export const Container = styled.section`
  width: 100%;
  min-height: 50vh;
  display: flex;
  padding: 10vh 10vw;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5vh;
  clip-path: polygon(0 0, 0 100%, 100% 100%, 100% 8%);
  color: ${(props) => props.theme.colors.lt};
  background-color: ${(props) => props.theme.colors.dk};

  h1 {
    text-align: center;
    font-size: clamp(1.5rem, 1.7vw, 5rem);

    @media (max-width: 680px) {
      font-size: clamp(1rem, 4.5vw, 5rem);
    }
  }
`;

export const FaqDiv = styled.section`
  width: 90%;
  min-height: 200px;
  display: flex;
  flex-wrap: wrap;
  /* background-color: red; */
  align-items: flex-start;
  justify-content: space-around;
  gap: 2vh;
`;

export const AccordionDiv = styled(Accordion)`
  width: 45%;
  background-color: rgba(255, 255, 255, 0.05);
  font-size: clamp(0.75rem, 0.85vw, 3rem);

  @media (max-width: 1024px) {
    width: 100%;
  }
`;
