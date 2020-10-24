import styled from 'styled-components';

export const StyledBlockquote = styled.blockquote`
  display: flex;
  width: 100%;
  justify-content: center;
  font-size: 0.8rem;
  margin: -2rem 0 0.5rem 0;
  font-style: italic;

  a {
    font-style: normal;
  }
`;

export const StyledLink = styled.a`
  font-size: inherit;
  color: ${props => props.theme.colors.textTertiary};
  text-decoration: none;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;
