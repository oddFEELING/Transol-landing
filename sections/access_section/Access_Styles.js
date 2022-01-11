import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  height: 50vh;
  display: flex;
  padding: 0 10vw;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 5vh;

  h1 {
    font-size: clamp(1.5rem, 2vw, 5rem);
    font-weight: 700;
    @media (max-width: 680px) {
      font-size: clamp(1rem, 4.8vw, 5rem);
    }
    b {
      font-weight: 900;
      color: ${(props) => props.theme.colors.main};
    }
  }

  p {
    margin-top: -4vh;
    color: ${(props) => props.theme.colors.lt_2};
    font-size: clamp(0.75rem, 0.8vw, 2rem);
  }
`;
