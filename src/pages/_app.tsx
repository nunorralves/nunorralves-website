import { AppProps } from 'next/app';
import GlobalStyle from '../styles/global';
import { ThemeProvider } from 'styled-components';
// import darkTheme from '../styles/themes/dark';
import lightTheme from '../styles/themes/light';
import Header from '../components/Header';
import { Footer } from '../components/Footer';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={lightTheme}>
      <div>
        <header>
          <Header />
        </header>
        <main>
          <Component {...pageProps} />
        </main>

        <footer>
          <Footer />
        </footer>
      </div>
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default MyApp;
