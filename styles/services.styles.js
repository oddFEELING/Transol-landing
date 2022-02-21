import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  /* filter: ${(props) => (props.modal ? 'blur(15px)' : '')}; */
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

export const Header = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2vh;
  text-align: center;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 95%);
  justify-content: center;
  background-color: rgba(7, 41, 181, 0.035);
  padding: 8vh 3vw;

  h1 {
    font-size: clamp(1rem, 1.7vw, 4rem);
  }
  p {
    width: 50%;
    color: ${(props) => props.theme.colors.lt_2};
    font-size: clamp(0.8rem, 1vw, 4rem);
    font-family: ${(props) => props.theme.fonts.sc_font};

    @media (max-width: 800px) {
      width: 80%;
    }
  }
`;
