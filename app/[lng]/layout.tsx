import "./globals.css";
import React from "react";
import cx from "classnames";
import { Metadata } from "next";
import dynamic from "next/dynamic";
import { BiArrowToTop } from "react-icons/bi";
import NextTopLoader from "nextjs-toploader";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import Footer from "@/components/layout/footer";
import GoogleAnalytics from "@/components/shared/google-analytics";
import CookieBanner from "@/components/shared/cookie-banner";
import ScrollToTop from "@/components/layout/scroll-to-top";
import Particles from "@/components/layout/particles";
import { locales } from "@/navigation";
import { basePath } from "@/constants";
import { Providers } from "./providers";
import { sfPro, inter } from "./fonts";

const Header = dynamic(() => import("@/components/layout/nav"), {
  ssr: false,
});

export async function generateMetadata({
  params,
}: {
  params: { lng: string };
}): Promise<Metadata | undefined> {
  return {
    title: params.lng === "en" ? "CYF Insider" : "陈一发儿",
    description: `${params.lng === "en" ? "CYF Insider" : "陈一发儿"}`,
    metadataBase: new URL(`https://chenyifaer.com${basePath}`),
    icons: {
      icon: `${basePath}/logo.png`,
    },
    colorScheme: "dark",
    themeColor: "black",
  };
}

// export async function generateStaticParams() {
//   return locales.map((lng: string) => ({ lng }));
// }

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: {
    lng: string;
  };
}) {
  let messages;
  try {
    messages = (await import(`@/messages/${params.lng}.json`)).default;
  } catch (error) {
    notFound();
  }
  return (
    <html lang={params.lng} suppressHydrationWarning>
      <body className={cx(sfPro.variable, inter.variable)}>
        <NextIntlClientProvider locale={params.lng} messages={messages}>
          <NextTopLoader height={1} />
          <Providers>
            <Particles />
            <Header lng={params.lng} />
            <main
              id="main"
              className="flex min-h-screen w-full flex-col items-center justify-center py-32"
            >
              {children}
              <GoogleAnalytics />
            </main>
            <Footer lng={params.lng} />
            <CookieBanner lng={params.lng} />
          </Providers>
          <ScrollToTop
            smooth
            component={
              <BiArrowToTop className="mx-auto my-0 h-5 w-5 text-gray-700" />
            }
          />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
