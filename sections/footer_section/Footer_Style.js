import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  min-height: 20vh;
  display: flex;
  padding: 8vh 5vw;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3vh;
  color: ${(props) => props.theme.colors.lt};
  background-color: ${(props) => props.theme.colors.main};

  h1 {
    font-weight: 900;
    letter-spacing: 2px;
    /* font-size: clamp(1.3rem, 2vw, 5rem); */
    /* align-self: flex-start; */
  }

  p {
    font-size: clamp(0.8rem, 0.9vw, 2rem);
    color: rgba(255, 255, 255, 0.7);
    cursor: pointer;

    &:hover {
      color: ${(props) => props.theme.colors.lt};
    }
  }

  @media (max-width: 680px) {
    align-items: flex-start;
  } ;
`;
