import MainLayout from "@/layouts/MainLayout";
import QueryProvider from "@/layouts/QueryProvider";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Router } from "next/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Head from "next/head";
import favicon from "public/favicon.ico";
import ThemeProvider from "@/layouts/ThemeProvider";

NProgress.configure({ showSpinner: false });
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href={favicon.src} type="image/x-icon" />
        <title>Raj Thapa Blog</title>
      </Head>
      <ThemeProvider>
        <QueryProvider>
          <ReactQueryDevtools initialIsOpen={false} />
          <MainLayout>
            <Component {...pageProps} />
          </MainLayout>
        </QueryProvider>
      </ThemeProvider>
    </>
  );
}
