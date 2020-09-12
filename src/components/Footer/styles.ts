import styled from 'styled-components';

export const Container = styled.div`
  max-width: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  p:first-child {
    margin-top: 20px;
    font-size: 0.8rem;
  }
  p {
    padding-top: 5px;
    font-size: 0.7rem;
  }
`;
