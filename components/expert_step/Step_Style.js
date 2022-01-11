import styled from 'styled-components';

export const Container = styled.div`
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
  /* background-color: green; */

  h2 {
    font-weight: 800;
    color: ${(props) => props.theme.colors.dk_2};
    font-size: clamp(1rem, 1.2vw, 4rem);
  }

  p {
    font-family: ${(props) => props.theme.fonts.sc_font};
    color: ${(props) => props.theme.colors.lt_2};
    font-size: clamp(0.8rem, 0.85vw, 4rem);
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
  background-color: white;
  box-shadow: 2px 10px 30px rgba(0, 0, 0, 0.1);
`;
