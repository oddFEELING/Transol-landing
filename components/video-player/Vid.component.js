import styled from 'styled-components';

export const Container = styled.div`
  width: 90%;
  height: 70vh;
  min-height: 350px;
  display: flex;
  position: fixed;
  z-index: 50;
  align-items: center;
  justify-content: center;
  top: 10vh;
  pointer-events: ${(props) => (props.open ? 'auto' : 'none')};
  opacity: ${(props) => (props.open ? '1' : '0')};
  transform: ${(props) => (props.open ? 'translateY(0)' : 'translateY(-20vh)')};
  align-self: center;
  background-color: white;
  overflow: hidden;
  box-shadow: 5px 10px 35px rgba(0, 0, 0, 0.2);

  @media (max-width: 800px) {
    width: 90%;
    height: 50vh;
    margin-top: 15vh;
    text-align: center;
    flex-direction: column;
    justify-content: flex-start;
  }
`;

//-- close btn ------------------/
export const CloeBtn = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  top: 3%;
  right: 4%;
  cursor: pointer;
  position: absolute;
  align-items: center;
  justify-content: center;
`;
