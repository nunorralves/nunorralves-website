import styled from 'styled-components';

export const StyledH1 = styled.h1``;

// export const StyledCode = styled.code`
//   /* background: #f9f7fb; */
//   background: #dddddd;
//   border: 1px solid #ede7f3;
//   border-radius: 4px;
//   padding: 2px 6px;
//   font-size: 0.9375em;
// `;

export const StyledLink = styled.a`
  font-size: inherit;
  color: ${props => props.theme.colors.textTertiary};
  text-decoration: none;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

export const StyledUl = styled.ul`
  list-style-position: inside;

  > li > ul {
    margin-left: 1rem;
  }
`;

export const StyledOl = styled.ol`
  list-style-position: inside;

  > li > ul {
    margin-left: 1rem;
  }
`;
