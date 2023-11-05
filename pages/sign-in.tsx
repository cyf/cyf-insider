import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { Github, Google, LoadingDots } from "@/components/shared/icons";

import type { GetStaticProps, InferGetStaticPropsType } from "next";

export default function SignIn() {
  const router = useRouter();
  const { t: th, i18n } = useTranslation("header");
  const { t: tf } = useTranslation("footer");
  const { callbackUrl: cb } = router.query as { callbackUrl?: string };
  console.log("cb", cb);
  const [checked, setChecked] = useState(false);
  const [showRed, setRed] = useState(false);
  const [googleClicked, setGoogleClicked] = useState(false);
  const [githubClicked, setGitHubClicked] = useState(false);

  const callbackUrl = useMemo(() => {
    console.log("router.query", router);
    let cbUrl = router.query?.callbackUrl as string | undefined;
    const lng = i18n?.language;
    console.log("lng", lng);
    console.log("callbackUrl", cbUrl);
    if (cbUrl) {
      cbUrl = decodeURIComponent(cbUrl);
      if (lng === "zh" && !cbUrl.includes("/zh")) {
        cbUrl = cbUrl.replace("/join", "/join/zh");
      } else if (lng === "en" && cbUrl.includes("/zh")) {
        cbUrl = cbUrl.replace("/join/zh", "/join");
      }
    }
    return cbUrl;
  }, [router.query, i18n?.language]);

  const onCheckboxChange = (e: any) => {
    e.target.checked && setRed(false);
    setChecked(e.target.checked);
  };

  return (
    <div className="flex w-screen justify-center">
      <div className="z-10 h-fit w-full max-w-md overflow-hidden border border-gray-100 dark:border-gray-900 sm:rounded-2xl sm:shadow-xl">
        <div className="flex flex-col items-center justify-center space-y-3 border-b border-gray-200 bg-white px-4 py-6 pt-8 text-center dark:border-gray-700 dark:bg-gray-900 sm:px-16">
          <Link href="/">
            <Image
              src="/join/logo.png"
              alt="CYF Insider logo"
              className="h-10 w-10 rounded-full"
              width={20}
              height={20}
            />
          </Link>
          <h3 className="text-xl font-semibold">{th("sign-in.title")}</h3>
          <p className="text-sm text-gray-500">{th("sign-in.tips")}</p>
        </div>
        <div className="flex flex-col space-y-3 bg-gray-50 px-4 py-8 dark:bg-gray-900 sm:px-16">
          <button
            disabled={googleClicked}
            className={`${
              googleClicked
                ? "cursor-not-allowed border-gray-200 bg-gray-100 dark:border-gray-700 dark:bg-gray-700"
                : "border border-gray-200 bg-white text-black hover:bg-gray-50 dark:border-gray-700 dark:bg-black dark:text-white dark:hover:bg-gray-700"
            } flex h-10 w-full items-center justify-center space-x-3 rounded-md border text-sm shadow-sm transition-all duration-75 focus:outline-none`}
            onClick={() => {
              if (!checked) {
                setRed(true);
                return;
              }
              setGoogleClicked(true);
              signIn("google", {
                ...(callbackUrl ? { callbackUrl } : {}),
              }).finally(() => {
                setGoogleClicked(false);
              });
            }}
          >
            {googleClicked ? (
              <LoadingDots />
            ) : (
              <>
                <Google className="h-5 w-5" />
                <p>{th("sign-in.sign-in-with-google")}</p>
              </>
            )}
          </button>
          <button
            disabled={githubClicked}
            className={`${
              githubClicked
                ? "cursor-not-allowed border-gray-200 bg-gray-100 dark:border-gray-700 dark:bg-gray-700"
                : "border border-gray-200 bg-white text-black hover:bg-gray-50 dark:border-gray-700 dark:bg-black dark:text-white dark:hover:bg-gray-700"
            } flex h-10 w-full items-center justify-center space-x-3 rounded-md border text-sm shadow-sm transition-all duration-75 focus:outline-none`}
            onClick={() => {
              if (!checked) {
                setRed(true);
                return;
              }
              setGitHubClicked(true);
              signIn("github", {
                ...(callbackUrl ? { callbackUrl } : {}),
              }).finally(() => {
                setGitHubClicked(false);
              });
            }}
          >
            {githubClicked ? (
              <LoadingDots />
            ) : (
              <>
                <Github className="h-5 w-5" />
                <p>{th("sign-in.sign-in-with-github")}</p>
              </>
            )}
          </button>
        </div>
        <div className="flex flex-row items-start justify-center border-b border-gray-200 bg-white px-4 pb-8 text-center dark:border-gray-700 dark:bg-gray-900 sm:px-16">
          <input
            checked={checked}
            type="checkbox"
            onChange={onCheckboxChange}
            className={`mt-[0.1875rem] h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600 ${
              showRed
                ? "border-2 border-red-400 dark:border-2 dark:border-red-400"
                : ""
            }`}
          />
          <p className="text-sm text-gray-500">
            &nbsp;{th("sign-in.read-and-agree")}&nbsp;
            <Link className="text-blue-500" href="/legal/privacy">
              {tf("privacy")}
            </Link>
            &nbsp;
            {th("sign-in.and")}&nbsp;
            <Link className="text-blue-500" href="/legal/terms-of-use">
              {tf("terms-of-use")}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps<{}> = async ({
  locale = "en",
}) => ({
  props: {
    ...(await serverSideTranslations(locale, ["header", "footer"], null, [
      "en",
      "zh",
    ])),
  },
});
