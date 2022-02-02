import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: auto;
  min-height: auto;
  filter: ${(props) => (props.modal ? 'blur(15px)' : '')};
  display: flex;
  position: relative;
`;

export const Main = styled.main`
  width: 100%;
  height: auto;
  min-height: 800px;
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
`;
