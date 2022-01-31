import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 800px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1200px) {
    height: 70vh;
    z-index: 3;
    align-items: flex-start;
  }
`;

export const MainForm = styled.form`
  width: 70%;
  height: 75%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5%;
  border-radius: 0.5vw;
  justify-content: center;
  /* background-color: cyan; */

  &:hover {
    box-shadow: 5px 10px 35px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 1200px) {
    height: 90%;
    width: 90%;
    padding: 5vh 0;
    border-radius: 2vw;
    justify-content: flex-start;
    box-shadow: 5px 10px 35px rgba(0, 0, 0, 0.2);
  }

  h1 {
    font-size: clamp(1.7rem, 2.5vw, 4rem);
    margin-bottom: 5%;
  }

  b {
    color: ${(props) => props.theme.colors.main};
  }
`;
