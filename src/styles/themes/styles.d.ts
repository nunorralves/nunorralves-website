import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    font: {
      default: string;
      monospaced: string;
      defaultSize: string;
      defaultWeight: number;
    };
    borderRadius: string;
    colors: {
      background: string;
      text: string;
      header: string;

      black: string;
      white: string;
      error: string;
      info: string;
      success: string;
      warning: string;

      primary: string;
      formBackground: string;
      inputBackground: string;
      button: string;
      buttonText: string;
      buttonHover: string;
      link: string;
      linkHover: string;
    };
  }
}
