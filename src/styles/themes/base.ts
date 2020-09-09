import { DefaultTheme } from 'styled-components';

const baseTheme: DefaultTheme = {
  font: {
    default: 'Roboto, system-ui, sans-serif',
    monospaced: 'monospace',
    defaultSize: '16px',
    defaultWeight: 400
  },
  borderRadius: '5px',
  colors: {
    background: '#000',
    text: '#fff',
    header: '',

    black: '#000',
    white: '#fff',
    error: '#dc3545',
    info: '#007bff',
    success: '#28a745',
    warning: '#ffc107',

    primary: '',
    formBackground: '',
    inputBackground: '',
    button: '',
    buttonText: '',
    buttonHover: '',
    link: '',
    linkHover: ''
  }
};

export default baseTheme;
