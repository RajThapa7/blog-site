import MainLayout from "@/Layouts/MainLayout";
import QueryProvider from "@/Layouts/QueryProvider";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <MainLayout>
        <QueryProvider>
          <Component {...pageProps} />
        </QueryProvider>
      </MainLayout>
    </>
  );
}
