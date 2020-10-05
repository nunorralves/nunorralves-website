import Document, {
  DocumentInitialProps,
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      };
    } finally {
      sheet.seal();
    }
  }

  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
            rel="stylesheet"
          />

          <link
            // href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.21.0/themes/prism.min.css"
            // href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.21.0/themes/prism-coy.min.css"
            // href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.21.0/themes/prism-dark.min.css"
            // href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.21.0/themes/prism-funky.min.css"
            href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.21.0/themes/prism-okaidia.min.css"
            // href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.21.0/themes/prism-solarizedlight.min.css"
            // href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.21.0/themes/prism-tomorrow.min.css"
            // href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.21.0/themes/prism-twilight.min.css"
            rel="stylesheet"
          />
          <link
            href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.21.0/plugins/line-numbers/prism-line-numbers.min.css"
            rel="stylesheet"
          ></link>

          <link rel="icon" href="/#" />
        </Head>
        <body>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.21.0/components/prism-core.min.js"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.21.0/plugins/line-numbers/prism-line-numbers.min.js"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.21.0/plugins/autoloader/prism-autoloader.min.js"></script>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
