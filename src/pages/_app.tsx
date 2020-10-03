import GlobalStyles from '../styles/global';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import darkTheme from '../styles/themes/dark';
import lightTheme from '../styles/themes/light';
import { MainLayout } from '../components/layouts/MainLayout';
import Head from 'next/head';
import usePersistedState from '../lib/usePersistedStateHook';
import { useEffect, useState } from 'react';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  // const [theme, setTheme] = usePersistedState<string>('theme', 'light');
  const [theme, setTheme] = useState<string>('light');

  const toggleTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  return (
    <>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyles />
        <Head>
          <title>John Doe</title>
        </Head>
        <MainLayout toggleTheme={toggleTheme}>
          <Component {...pageProps} />
        </MainLayout>
      </ThemeProvider>
    </>
  );
};

export default MyApp;
