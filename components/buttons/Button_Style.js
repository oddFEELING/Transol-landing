import styled from 'styled-components';
//--> button styled-component
export const ButtonContainer = styled.div`
  width: auto;
  height: 30px;
  display: flex;
  position: relative;
  box-sizing: content-box;
  padding: 10px 35px;
  align-items: center;
  justify-content: center;
  gap: 1vw;
  color: white;
  font-size: clamp(0.6rem, 0.75vw, 4rem);
  cursor: pointer;
  transition: 300ms all ease-in-out;
  background-color: ${(props) => {
    if (props.variant === 'main') return props.theme.colors.main;
    if (props.variant === 'dark') return props.theme.colors.dark;
  }};

  &:hover {
    transform: scale(1.01);
    box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.25);
    /* border: thin solid rgba(255, 255, 255, 0.6); */
  }

  &::after {
    content: '';
    width: 0;
    height: 100%;
    position: absolute;
    left: 0;
    border: 0 solid rgba(255, 255, 255, 0.6);
    transition: 300ms all ease-in-out;
  }

  &:hover::after {
    width: 100%;
    border: thin solid rgba(255, 255, 255, 0.6);
    background-color: rgba(255, 255, 255, 0.05);
  }

  @media (max-width: 800px) {
    height: 22px;
  }
`;

export const ImageDiv = styled.div`
  width: 20px;
  height: 20px;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;

  .image {
    object-fit: contain;
  }
`;
