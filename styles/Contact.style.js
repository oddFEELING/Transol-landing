import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  min-height: 900px;
  overflow: hidden;
  display: flex;
  gap: 2vh;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  align-items: center;

  h1 {
    font-weight: 700;
    font-size: clamp(1rem, 2.5vw, 5rem);
    font-style: italic;
    font-family: ${(props) => props.theme.fonts.sc_font};
  }
`;

//--------------------------------------->  Pattern section

export const PatternDiv = styled.section`
  width: 100%;
  height: 100%;
  position: relative;
  background-color: ${(props) => props.theme.colors.dk};
  box-shadow: 5px 10px 35px rgba(0, 0, 0, 0.3);

  @media (max-width: 1199px) {
    height: 30vh;
  }

  .img {
    object-fit: cover;
  }

  &::after {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.1);
    top: 0;
    bottom: 0;

    @media (max-width: 1200px) {
      background-color: rgba(0, 0, 0, 0.5);
    }
  }
`;
