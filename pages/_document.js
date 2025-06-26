import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Preload the custom font */}
        <link rel="preload" href="/fonts/FinkHeavy-Medium.otf" as="font" type="font/otf" crossOrigin="" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
