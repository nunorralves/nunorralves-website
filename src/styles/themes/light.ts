import baseTheme from './base';

const lightTheme = {
  ...baseTheme,
  colors: {
    ...baseTheme.colors,
    background: '#fefffe',
    text: '#555555',
    header: '#fefffe',

    primary: '#0000ff',
    formBackground: '#202020',
    inputBackground: '#fefffe',
    button: '#0000ff',
    buttonText: '#fff',
    buttonHover: '#6666ff',
    link: '#0000ff',
    linkHover: '#6666ff'
  }
};

export default lightTheme;
