import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";
import type { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import "@/styles/globals.css";
import { Suspense } from "react";
import Nav from "@/components/layout/nav";
import Footer from "@/components/layout/footer";

export default function CYFApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps<{ session: Session }>) {
  return (
    <SessionProvider session={session}>
      <div className="fixed h-screen w-full bg-gradient-to-br from-indigo-50 via-white to-cyan-100" />
      <Suspense fallback="...">
        <Nav />
      </Suspense>
      <main className="flex min-h-screen w-full flex-col items-center justify-center py-32">
        <Component {...pageProps} />
      </main>
      <Footer />
      <Analytics />
    </SessionProvider>
  );
}
