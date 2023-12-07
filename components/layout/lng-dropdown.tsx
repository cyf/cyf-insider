import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { RiTranslate } from "react-icons/ri";
import Popover from "@/components/shared/popover";
import { locales, Link, usePathname } from "@/navigation";
import { basePath } from "@/constants";

export default function LngDropdown() {
  const pathname = usePathname();
  const t = useTranslations();
  const currentLocale = useLocale();
  const [openPopover, setOpenPopover] = useState(false);

  return (
    <div className="relative mr-2 inline-block text-left">
      <Popover
        content={
          <div className="w-full rounded-md bg-white p-2 dark:bg-black sm:w-56">
            {locales.map((locale) => {
              return (
                <Link
                  key={locale}
                  href={pathname
                    .replace(basePath, "")
                    .replace(`/${currentLocale}`, "")}
                  locale={locale}
                  className={`relative flex w-full items-center justify-start space-x-2 rounded-md p-2 text-left text-sm transition-all duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 ${
                    locale === currentLocale
                      ? "cursor-not-allowed bg-gray-100 dark:bg-gray-700"
                      : ""
                  }`}
                >
                  <p className="text-sm">{t(`header.languages.${locale}`)}</p>
                </Link>
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
          className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-full transition-all duration-75 focus:outline-none active:scale-95 sm:h-9 sm:w-9"
        >
          <RiTranslate className="h-5 w-5" />
        </button>
      </Popover>
    </div>
  );
}
