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
  background: ${props => props.theme.colors.htmlBackground};
  color: ${props => props.theme.colors.textPrimary};
  min-height: 100vh;
}

body, button, input{
  font: ${props => props.theme.font.defaultWeight} ${props =>
  props.theme.font.defaultSize} ${props => props.theme.font.default};
}

`;
