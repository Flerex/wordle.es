import Document, { Head, Html, Main, NextScript } from "next/document";
import React from "react";
import SiteConfig from "../lib/config";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="es">
        <Head>
          <meta charSet="utf-8" />
          <meta name="description" content="" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1"></meta>

          <link rel="shortcut icon" type="image/png" href="/favicon.png" />

          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${SiteConfig.trackingID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${SiteConfig.trackingID}', { page_path: window.location.pathname });
            `,
            }}
          />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
