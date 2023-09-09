import { useState } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { RiTranslate } from "react-icons/ri";
import Popover from "@/components/shared/popover";
import { i18n as i18nSettings } from "../../next-i18next.config";

export default function LngDropdown() {
  const router = useRouter();
  const { t, i18n } = useTranslation(["languages"]);
  const [openPopover, setOpenPopover] = useState(false);

  const onToggleLanguageClick = (newLocale: string) => {
    const { pathname, asPath, query } = router;
    router.push({ pathname, query }, asPath, { locale: newLocale });
  };

  console.log("i18nSettings.locales", i18nSettings.locales);

  return (
    <div className="relative mr-4 inline-block text-left">
      <Popover
        content={
          <div className="w-full rounded-md bg-white p-2 dark:bg-black sm:w-56">
            {i18nSettings.locales.map((locale) => {
              return (
                <button
                  key={locale}
                  onClick={() => onToggleLanguageClick(locale)}
                  className={`relative flex w-full items-center justify-start space-x-2 rounded-md p-2 text-left text-sm transition-all duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 ${
                    locale === i18n.language
                      ? "cursor-not-allowed bg-gray-100 dark:bg-gray-700"
                      : ""
                  }`}
                >
                  <p className="text-sm">{t(locale)}</p>
                </button>
              );
            })}
          </div>
        }
        align="end"
        openPopover={openPopover}
        setOpenPopover={setOpenPopover}
      >
        <button
          onClick={() => setOpenPopover(!openPopover)}
          className="mr-2 flex h-8 w-8 items-center justify-center overflow-hidden rounded-full transition-all duration-75 focus:outline-none active:scale-95 sm:h-9 sm:w-9"
        >
          <RiTranslate className="h-5 w-5" />
        </button>
      </Popover>
    </div>
  );
}
