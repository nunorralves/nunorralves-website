import GlobalStyles from '../styles/global';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import darkTheme from '../styles/themes/dark';
import lightTheme from '../styles/themes/light';
import { MainLayout } from '../components/layouts/MainLayout';
import Head from 'next/head';
import { useState } from 'react';
import { LanguageProvider } from '../intl/LanguageProvider';
import siteConfig from '../../site.config';
import { MDXProvider } from '@mdx-js/react';
import MDXComponents from '../MDXComponents';
import { DefaultSeo } from 'next-seo';
import SEO from '../../next-seo.config';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const [theme, setTheme] = useState<string>('light');

  const toggleTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <MDXProvider components={MDXComponents}>
        <LanguageProvider>
          <GlobalStyles />
          <Head>
            <title>{siteConfig.site_name}</title>
          </Head>
          <DefaultSeo {...SEO} />
          <MainLayout toggleTheme={toggleTheme}>
            <Component {...pageProps} />
          </MainLayout>
        </LanguageProvider>
      </MDXProvider>
    </ThemeProvider>
  );
};

export default MyApp;
