import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;
    font: {
      default: string;
      monospaced: string;
      defaultSize: string;
      defaultWeight: number;
    };
    borderRadius: string;
    colors: {
      error: string;
      info: string;
      success: string;
      warning: string;
      black: string;
      white: string;

      htmlBackground: string;
      headerBackground: string;
      navBackground: string;
      navItemsBackground: string;
      textPrimary: string;
      textSecondary: string;
      textTertiary: string;
      backgroundPrimary: string;
      backgroundSecondary: string;
      backgroundTertiary: string;
      button: string;
      buttonText: string;
      buttonHover: string;
      link: string;
      linkHover: string;
    };
  }
}
