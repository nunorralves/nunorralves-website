import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledSeparator = styled.div`
  width: 1px;
  border: solid 1px ${props => props.theme.colors.textPrimary};
`;

export const StyledLink = styled.a`
  font-size: 1rem;
  padding: 0 0.3rem;
  line-height: 2.5rem;
  color: ${props => props.theme.colors.textTertiary};

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;
