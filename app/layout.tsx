import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import cx from "classnames";
import { sfPro, inter } from "@/styles/fonts";

export const metadata = {
  title: "CYF Insider",
  description: "CYF Insider.",
  metadataBase: new URL("https://insider.chenyifaer.com"),
  themeColor: "#FFF",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cx(sfPro.variable, inter.variable)}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
