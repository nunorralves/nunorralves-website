import baseTheme from './base';

const darkTheme = {
  ...baseTheme,
  colors: {
    ...baseTheme.colors,
    background: '#121212',
    text: '#fff',
    header: '#242424',

    primary: '#ff0000',
    formBackground: '#202020',
    inputBackground: '#353535',
    button: '#ff0000',
    buttonText: '#fff',
    buttonHover: '#FF6666',
    link: '#ff0000',
    linkHover: '#FF6666'

    // lightGray: '#292929',
    // gray: '#202020',
    // darkGray: '#101010',
  }
};

export default darkTheme;
