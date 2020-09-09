import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

*,
::after,
::before{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html{
  min-height: 100%;
  background: ${props => props.theme.colors.background};
}

*, button, input{
  border: 0;
  background: none;
  font: ${props => props.theme.font.defaultWeight} ${props =>
  props.theme.font.defaultSize} ${props => props.theme.font.default};
}

ul {
  list-style: none;
}
`;
