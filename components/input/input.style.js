import styled from 'styled-components';

export const Input = styled.input`
  width: 90%;
  height: 50px;
  border: 0;
  outline: ${(props) => `0 solid ${props.theme.colors.main}`};
  color: ${(props) => (props.dk ? 'black' : 'white')};
  padding: 0 1.5vw;
  border-radius: 0.6vw;
  font-style: italic;
  background-color: rgba(255, 255, 255, 0.1);
  font-family: ${(props) => props.theme.fonts.sc_font};
  box-shadow: 2px 6px 20px rgba(0, 0, 0, 0.1);
  font-size: clamp(1rem, 1.1rem, 3rem);

  @media (max-width: 800px) {
    width: 80%;
    height: 40px;
  }

  &:focus {
    outline: ${(props) => `thin solid ${props.theme.colors.main}`};
    box-shadow: 2px 6px 15px rgba(0, 0, 0, 0.2);
  }
`;

export const Area = styled.textarea`
  width: 90%;
  height: 200px;
  border: 0;
  outline: ${(props) => `0 solid ${props.theme.colors.main}`};
  color: ${(props) => (props.dk ? 'black' : 'white')};
  padding: 0.8vh 1.5vw;
  border-radius: 0.6vw;
  font-style: italic;
  background-color: rgba(255, 255, 255, 0.1);
  font-family: ${(props) => props.theme.fonts.sc_font};
  box-shadow: 2px 6px 20px rgba(0, 0, 0, 0.1);
  font-size: clamp(1rem, 1.1rem, 3rem);

  @media (max-width: 800px) {
    width: 80%;
    height: 140px;
  }

  &:focus {
    outline: ${(props) => `thin solid ${props.theme.colors.main}`};
    box-shadow: 2px 6px 15px rgba(0, 0, 0, 0.2);
  }
`;
