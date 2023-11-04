"use client";

import Image from "next/image";
import Link from "next/link";
import { Session } from "next-auth";
import { useTranslation } from "next-i18next";
import useScroll from "@/lib/hooks/use-scroll";
import { useSignInModal } from "./sign-in-modal";
import UserDropdown from "./user-dropdown";
import LngDropdown from "./lng-dropdown";
import ThemeDropdown from "./theme-dropdown";

export default function NavBar({ session }: { session: Session | null }) {
  const { t } = useTranslation("header");
  const { SignInModal, setShowSignInModal } = useSignInModal();
  const scrolled = useScroll(50);

  return (
    <>
      <SignInModal />
      <div
        className={`fixed top-0 w-full ${
          scrolled
            ? "border-b border-gray-200 bg-white/50 backdrop-blur-xl dark:border-gray-800 dark:bg-gray-900"
            : "bg-white/0 dark:bg-black/0"
        } z-30 transition-all`}
      >
        <div className="mx-5 flex h-16 max-w-screen-xl items-center justify-between xl:mx-auto">
          <Link href="/" className="flex items-center font-display text-2xl">
            <Image
              src="/join/logo.png"
              alt="Precedent logo"
              width="30"
              height="30"
              className="mr-2 rounded-sm"
            ></Image>
            <p>CYF Insider</p>
          </Link>
          <div className="flex items-center">
            <LngDropdown />
            <ThemeDropdown />
            {session ? (
              <UserDropdown session={session} />
            ) : (
              <button
                className="rounded-full border border-black bg-black p-1.5 px-4 text-sm text-white transition-all hover:bg-white hover:text-black dark:border-white dark:bg-white dark:text-black dark:hover:bg-black dark:hover:text-white"
                onClick={() => setShowSignInModal(true)}
              >
                {t("sign-in.title")}
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
