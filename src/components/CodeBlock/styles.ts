import styled from 'styled-components';

export const Line = styled.div`
  display: flex;
  flex-direction: row;
`;

export const LineNo = styled.div`
  text-align: right;
  padding-right: 1rem;
  user-select: none;
  opacity: 0.8;
`;

export const LineContent = styled.div`
  width: 100%;

  span {
    white-space: pre-wrap;
  }
`;
