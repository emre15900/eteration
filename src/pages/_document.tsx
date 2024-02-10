import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <title>Eteration | Emre Sayın</title>
          <meta name="keywords" content="eteration, emre" />
          <link rel="icon" href="https://www.eteration.com/favicon.ico" />
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
