import styled from 'styled-components';

export const COntainer = styled.div`
  width: 100%;
  min-height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  filter: ${(props) => (props.modal ? 'blur(15px)' : '')};
`;
