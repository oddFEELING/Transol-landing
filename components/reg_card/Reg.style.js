import styled from 'styled-components';

export const Container = styled.div`
  width: 55vw;
  height: 70vh;
  display: flex;
  position: fixed;
  z-index: 50;
  align-items: center;
  justify-content: center;
  top: 12vh;
  pointer-events: ${(props) => (props.open ? 'auto' : 'none')};
  opacity: ${(props) => (props.open ? '1' : '0')};
  transform: ${(props) => (props.open ? 'translateY(0)' : 'translateY(-20vh)')};
  align-self: center;
  background-color: white;
  overflow: hidden;

  border-radius: 0.3vw;
  box-shadow: 5px 10px 35px rgba(0, 0, 0, 0.2);

  @media (max-width: 800px) {
    width: 90%;
    height: 50vh;
    margin-top: 15vh;
    flex-direction: column;
    justify-content: flex-start;
  }
`;

export const CardImg = styled.div`
  width: 40%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  .img {
    object-fit: cover;
  }
  @media (max-width: 800px) {
    width: 100%;
    height: 30%;
    display: none;
  }
`;

export const CardForm = styled.form`
  width: 60%;
  min-height: 400px;
  height: 100%;
  display: flex;
  padding: 10% 0;
  gap: 4%;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;

  input {
    width: 90%;
    height: 50px;
    border: 0;
    color: black;
    outline: ${(props) => `0 solid ${props.theme.colors.main}`};
    color: black;
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
  }

  @media (max-width: 800px) {
    width: 100%;
    padding: 10% 0;
    gap: 6%;
    justify-content: center;
  }
`;

export const CloseBtn = styled.div`
  width: 20px;
  height: 20px;
  /* background-color: red; */
  position: absolute;
  top: 3%;
  right: 3%;
  cursor: pointer;
`;
