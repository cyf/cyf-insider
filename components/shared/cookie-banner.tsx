"use client";
import Script from "next/script";

const CookieBanner = (props: { lng: string }) => {
  const NEXT_PUBLIC_COOKIE_BANNER_ID = process.env.NEXT_PUBLIC_COOKIE_BANNER_ID;

  if (!NEXT_PUBLIC_COOKIE_BANNER_ID) return null;

  return (
    <>
      <Script
        id="cookieyes"
        src={`https://cdn-cookieyes.com/client_data/${NEXT_PUBLIC_COOKIE_BANNER_ID}/script.js`}
      />
    </>
  );
};

export default CookieBanner;
