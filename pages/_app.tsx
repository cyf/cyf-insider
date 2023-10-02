import type { AppProps } from "next/app";
import Head from "next/head";
import type { Session } from "next-auth";
import { ThemeProvider } from "next-themes";
import { SessionProvider } from "next-auth/react";
import "@/styles/globals.css";
import { sfPro, inter } from "@/styles/fonts";
import { Suspense } from "react";
import { Provider } from "react-wrap-balancer";
import cx from "classnames";
import { BiArrowToTop } from "react-icons/bi";
import GoogleAnalytics from "@/components/shared/google-analytics";
import ScrollToTop from "@/components/layout/scroll-to-top";
import Nav from "@/components/layout/nav";
import Footer from "@/components/layout/footer";
import { cacheThemeKey } from "@/constants/index";

export default function CYFApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps<{ session: Session }>) {
  return (
    <Provider>
      <SessionProvider session={session} basePath="/join/api/auth">
        <ThemeProvider
          defaultTheme="system"
          storageKey={cacheThemeKey}
          attribute="class"
        >
          <div className={cx(sfPro.variable, inter.variable)}>
            <Head>
              <title>CYF Insider</title>
              <meta name="description" content="CYF Insider" />
              <link rel="shortcut icon" href="/join/favicon.ico" />
            </Head>
            <div className="fixed h-screen w-full bg-cyan-50 dark:bg-black" />
            <Suspense fallback="...">
              <Nav />
            </Suspense>
            <main className="flex min-h-screen w-full flex-col items-center justify-center py-32">
              <Component {...pageProps} />
              <GoogleAnalytics />
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </SessionProvider>
      <ScrollToTop smooth component={<BiArrowToTop className="mx-auto my-0 h-5 w-5 text-gray-700" />} />
    </Provider>
  );
}
