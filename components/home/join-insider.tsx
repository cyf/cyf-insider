"use client";
import Link from "next/link";
import { RiAddCircleLine } from "react-icons/ri";
import { useTranslation } from "next-i18next";

export function JoinInsider() {
  const { t, i18n } = useTranslation("common");

  return (
    <div
      className="mx-auto mt-6 flex animate-fade-up items-center justify-center space-x-5 opacity-0"
      style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
    >
      <Link
        href={`${i18n?.language === "zh" ? "/zh" : ""}/form`}
        className="flex max-w-fit items-center justify-center space-x-2 rounded-full border border-gray-300 bg-white px-5 py-2 text-sm text-gray-600 shadow-md transition-colors hover:border-gray-800 dark:bg-black dark:text-gray-300"
      >
        <RiAddCircleLine className="h-5 w-5 text-gray-600 dark:text-gray-300" />
        <span className="font-semibold sm:inline-block">
          {t("join-insider")}
        </span>
      </Link>
    </div>
  );
}
