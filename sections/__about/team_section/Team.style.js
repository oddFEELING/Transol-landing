import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 10vh 10vw;
  gap: 5vh;
  align-items: center;

  h1 {
    font-size: clamp(1.7rem, 2vw, 5rem);
    font-weight: 700;
  }

  p {
    color: ${(props) => props.theme.colors.lt_2};
    font-family: ${(props) => props.theme.fonts.sc_font};
    font-style: italic;
    font-weight: 500;
    width: 45%;
    margin-top: -4vh;
    text-align: center;
    font-size: clamp(0.8rem, 0.88vw, 3rem);

    @media (max-width: 800px) {
      width: 85%;
    }
  }
`;

export const TeamCard = styled.div`
  width: 100%;
  height: 55vh;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  padding: 6%;
  position: relative;
  align-items: center;
  overflow: hidden;
  justify-content: flex-end;
  background-color: ${(props) => props.theme.colors.dk};

  .img {
    object-fit: cover;
    object-position: center;
  }

  @media (max-width: 480px) {
    height: 45vh;
  }

  &:hover {
    box-shadow: 3px 6px 25px rgba(0, 0, 0, 0.4);
    border-radius: 0.6vw;
  }

  &::after {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    bottom: 0;
    z-index: 3;
    opacity: 0;
    background-color: rgba(0, 0, 0, 0.5);
    pointer-events: none;
  }

  &:hover .img {
    transform: scale(1.25);
  }

  &:hover > div {
    opacity: 1;
    transform: translateY(0);
  }

  &:hover::after {
    opacity: 1;
  }
`;

export const CardInfo = styled.div`
  width: 86%;
  height: 50%;
  position: absolute;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-around;
  gap: 12%;
  backdrop-filter: blur(4px);
  border-radius: 0.8vw;
  padding: 5%;
  z-index: 5;
  opacity: 0;
  transform: translateY(-45%);
  color: white;
  border: 0.1px solid rgba(255, 255, 255, 0.3);
  background: linear-gradient(
    -45deg,
    rgba(255, 255, 255, 0.15),
    rgba(255, 255, 255, 0.3),
    rgba(255, 255, 255, 0.15)
  );
  box-shadow: 3px 8px 25px rgba(0, 0, 0, 0.25);

  h1 {
    width: 90%;
    font-weight: 600;
    font-size: clamp(1rem, 1.5vw, 4rem);
  }

  h3 {
    font-weight: 300;
    font-size: clamp(0.5rem, 0.8vw, 4rem);

    b {
      font-weight: 700;
      letter-spacing: 2px;
      font-size: clamp(0.6rem, 0.9vw, 4rem);
    }
  }
`;

export const SocialDiv = styled.div`
  width: 80%;
  height: 20%;
  display: flex;
  align-items: center;
  gap: 6%;
  justify-content: flex-start;

  div {
    width: 12%;
    /* min-width: 30px; */
    height: 55%;
    min-height: 13px;
    display: flex;
    position: relative;
    align-items: center;
    cursor: pointer;
    justify-content: center;

    &:hover img {
      transform: translateY(-20%) rotate(10deg);
    }
  }
`;
