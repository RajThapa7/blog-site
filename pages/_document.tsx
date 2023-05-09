import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  const environment = process.env.NEXT_PUBLIC_ENVIRONMENT;
  return (
    <Html lang="en">
      <Head />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&family=Outfit:wght@300;400;500&display=swap"
        rel="stylesheet"
      ></link>
      <body className={environment === "DEVELOPMENT" ? "debug-screens" : ""}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
