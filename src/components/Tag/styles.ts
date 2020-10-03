import styled from 'styled-components';

export const StyledTag = styled.div`
  color: ${props => props.theme.colors.white};
  border: 1px solid ${props => props.theme.colors.textTertiary};
  border-radius: 10px;
  padding: 3px 8px;
  margin: 1px 3px 0 0;
  background-color: ${props => props.theme.colors.textTertiary};
  font-size: 0.75rem;
`;
