import type { AppProps } from "next/app";
import Head from 'next/head';
import { Analytics } from "@vercel/analytics/react";
import type { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import "@/styles/globals.css";
import { sfPro, inter } from "@/styles/fonts";
import { Suspense } from "react";
import { Provider } from "react-wrap-balancer";
import cx from "classnames";
import Nav from "@/components/layout/nav";
import Footer from "@/components/layout/footer";

export default function CYFApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps<{ session: Session }>) {
  return (
    <Provider>
      <SessionProvider session={session} basePath="/join/api/auth">
        <div className={cx(sfPro.variable, inter.variable)}>
          <Head>
            <title>CYF Insider</title>
            <meta name="description" content="CYF Insider" />
            <link rel="shortcut icon" href="/join/favicon.ico" />
          </Head>
          <div className="fixed h-screen w-full bg-gradient-to-br from-indigo-50 via-white to-cyan-100" />
          <Suspense fallback="...">
            <Nav />
          </Suspense>
          <main className="flex min-h-screen w-full flex-col items-center justify-center py-32">
            <Component {...pageProps} />
          </main>
          <Footer />
        </div>
        <Analytics />
      </SessionProvider>
    </Provider>
  );
}
