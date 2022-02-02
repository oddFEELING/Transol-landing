import styled from 'styled-components';

//--------------------------------------->  desktop components
export const NavBar = styled.section`
  width: 100%;
  height: 8vh;
  max-height: 60px;
  min-height: 30px;
  display: flex;
  position: fixed;
  z-index: 100;
  top: 0;
  padding: 5px 3vw;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) =>
    props.scrolled ? 'rgba(255, 255, 255)' : 'rgba(255, 255, 255,0.6)'};
  font-family: ${(props) => props.font};
  box-shadow: ${(props) =>
    props.scrolled ? '3px 6px 20px rgba(0,0,0,0.2)' : ''};

  h1 {
    font-weight: 900;
    letter-spacing: 2px;
  }
`;

export const DesktopNavItems = styled.nav`
  width: 30%;
  height: 100%;
  display: flex;
  margin-right: 5vw;
  gap: 3vw;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  font-size: clamp(0.7rem, 1.2vw, 1rem);
`;

export const NavLink = styled.p`
  color: ${(props) => (props.picked ? '#0729a1' : 'inherit')};
  position: relative;
  cursor: pointer;
  font-weight: ${(props) => (props.picked ? '700' : '400')};
  padding: 0.2vh 0.1vw;
  font-size: ${(props) =>
    props.picked
      ? props.mobile
        ? 'clamp(1rem, 10.5vw, 3rem)'
        : 'clamp(1rem, 1.1vw, 3rem)'
      : props.mobile
      ? ''
      : ''};
  user-select: none;
  text-decoration: none;
  transition: 300ms all ease-in-out;

  &::after {
    content: '';
    width: 0%;
    height: 100%;
    position: absolute;
    left: 0;
    border-bottom: thin solid black;
    transition: 400ms all ease-in-out;
  }
  &:hover {
    transform: scale(1.03);
    color: #0729a1;
    transition: 400ms all ease-in-out;

    &:hover::after {
      width: 100%;
      border-color: #0729a1;
      transition: 400ms all ease-in-out;
    }
  }
`;

//--------------------------------------->  Mobile components
export const MObileNavBtn = styled.button`
  width: 20%;
  height: 80%;
  border: 0;
  background-color: transparent;
`;

export const MobileMenu = styled.div`
  width: ${(props) => (props.open ? '100%' : 0)};
  height: 100vh;
  display: flex;
  position: absolute;
  top: 0;
  right: ${(props) => (props.open ? '0' : '0vw')};
  padding: 5vh 5vw;
  gap: 7vh;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: ${(props) => props.theme.colors.lt};
  font-weight: 900;
  letter-spacing: 1px;
  font-size: clamp(1rem, 8.5vw, 4rem);
  pointer-events: ${(props) => (props.open ? 'auto' : 'none')};
  opacity: ${(props) => (props.open ? 1 : 0)};

  h1 {
    font-size: clamp(1rem, 6.5vw, 4rem);
    font-weight: 700;
    font-family: ${(props) => props.theme.fonts.sc_font};
  }
`;

export const BackBtn = styled.div`
  width: 15%;
  height: 5%;
  display: flex;
  position: absolute;
  top: 4.5vh;
  right: 2vw;
  align-items: center;
  justify-content: center;
`;

export const MobileNavItems = styled.nav`
  width: 100%;
  height: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4.5vh;
  color: #565656; ;
`;
