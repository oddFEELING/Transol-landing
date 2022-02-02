import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: auto;
  /* background-color: yellow; */
  padding-top: 5vh;
  display: flex;
  gap: 3vh;
  flex-direction: column;
  flex-direction: center;
  align-items: center;
  justify-content: flex-start;

  /* small screen */
  @media (max-width: 800px) {
    gap: 0;
  }
`;

//--------------------------------------->  service cards

export const ServiceCard = styled.section`
  width: 70%;
  height: 50vh;
  display: flex;
  gap: 5%;
  border-bottom: thin solid black;
  flex-direction: ${(props) => (props.left ? 'row-reverse' : 'row')};
  text-align: ${(props) => (props.left ? 'right' : 'left')};
  align-items: center;
  justify-content: space-around;

  /* small screen */
  @media (max-width: 800px) {
    width: 100%;
    flex-direction: column;
    height: 80vh;
    gap: 0;
    justify-content: flex-start;
  }
`;

// image section
export const ServiceImg = styled.div`
  width: 35%;
  height: 120%;
  user-select: none;
  display: flex;
  position: relative;
  border-radius: 1vw;
  flex-shrink: 0;
  z-index: 1;

  /* small screen */
  @media (max-width: 800px) {
    width: 100%;
    height: 70%;
    border-radius: 0;
    background-color: rgba(7, 41, 181, 0.035);
    box-shadow: 5px 10px 20px rgba(0, 0, 0, 0.3);
  }
`;

// text area
export const TextArea = styled.div`
  width: 70%;
  height: 85%;
  display: flex;
  z-index: 4;
  padding: 5vh 2vw;
  justify-content: center;
  align-items: ${(props) => (props.left ? 'flex-end' : 'flex-start')};
  gap: 5%;
  flex-shrink: 0;
  color: white;
  flex-direction: column;
  box-shadow: 5px 10px 30px rgba(0, 0, 0, 0.2);
  background-color: ${(props) =>
    props.left ? props.theme.colors.main : props.theme.colors.dk};
  clip-path: ${(props) =>
    props.left
      ? 'polygon(20% 10%, 100% 0%, 100% 100%, 0 85%)'
      : 'polygon(0% 0%, 100% 15%, 80% 90%, 0 100%)'};

  /* small screen */
  @media (max-width: 800px) {
    width: 100%;
    height: 30%;
    text-align: center;
    justify-content: flex-start;
    align-items: center;
    padding: 5vh 5vw;
    /* background-color: ${(props) => props.theme.colors.dk}; */
    box-shadow: none;
    clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0 100%);
  }

  h1 {
    font-size: clamp(1.4rem, 2.2vw, 6rem);
    /* margin-top: -10%; */

    @media (max-width: 800px) {
      font-size: 1.4rem;
    }
  }

  p {
    color: rgba(255, 255, 255, 0.7);
    font-family: ${(props) => props.theme.fonts.sc_font};
    font-size: clamp(0.7rem, 1vw, 6rem);
    width: 70%;

    @media (max-width: 800px) {
      width: 80%;
      font-size: 0.9rem;
    }
  }
`;
