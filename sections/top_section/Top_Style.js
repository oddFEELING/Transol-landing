import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  height: 70vh;
  min-height: 250px;
  display: flex;
  flex-direction: row;
  position: relative;
  align-items: center;
  justify-content: center;
  user-select: none;
  background-color: rgba(7, 41, 181, 0.035);

  @media (max-width: 680px) {
    padding: 4vh 6vw;
    flex-direction: column;
  }
`;

//--------------------------------------->  Text Area
export const TeaxtArea = styled.section`
  width: 50%;
  height: 100%;
  display: flex;
  z-index: 1;
  margin-right: -15vw;
  padding: 13vh 5vw;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 3vh;

  h3 {
    color: ${(props) => props.theme.colors.main};
    font-weight: 600;
    font-size: clamp(1rem, 1.3vw, 5rem);
    @media (max-width: 680px) {
      font-size: clamp(0.9rem, 1.2vw, 5rem);
    }
  }

  h1 {
    margin-top: -3vh;
    color: ${(props) => props.theme.colors.dk};
    font-weight: 800;
    font-size: clamp(1.5rem, 2.5vw, 5rem);
    @media (max-width: 680px) {
      font-size: clamp(1rem, 4.8vw, 5rem);
    }
  }
  p {
    color: ${(props) => props.theme.colors.lt_2};
    font-family: ${(props) => props.theme.fonts.sc_font};
    font-weight: 300;
    font-size: clamp(0.7rem, 1vw, 5rem);
  }

  @media (max-width: 680px) {
    width: 100%;
    height: 50%;
    align-items: center;
    text-align: center;
    margin-right: 0;
  }
`;

//--------------------------------------->  Image Area
export const ImageArea = styled.section`
  width: 50%;
  height: 100%;
  display: flex;
  position: relative;
  padding-top: 10vh;
  align-items: center;
  justify-content: center;
  /* background-color: red; */

  .image {
    object-fit: contain;
    object-position: center;
  }

  @media (max-width: 680px) {
    width: 100%;
    height: 60%;

    .image {
      object-fit: cover;
    }
  }
`;
