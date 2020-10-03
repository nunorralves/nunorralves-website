import { AppProps } from 'next/app';
import GlobalStyle from '../styles/global';
import { ThemeProvider } from 'styled-components';
import darkTheme from '../styles/themes/dark';
import lightTheme from '../styles/themes/light';
import { MainLayout } from '../components/layouts/MainLayout';
import Head from 'next/head';
import { useState } from 'react';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const [theme, setTheme] = useState(darkTheme);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? darkTheme : lightTheme);
  };

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>John Doe</title>
      </Head>
      <MainLayout toggleTheme={toggleTheme}>
        <Component {...pageProps} />
      </MainLayout>
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default MyApp;
