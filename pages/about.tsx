import { GetStaticProps } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function About() {
  const { t } = useTranslation("about");
  return <div className="z-10 w-full max-w-2xl px-5 xl:px-0">{t("title")}</div>;
}

export const getStaticProps: GetStaticProps<{}> = async ({
  locale = "en",
}) => ({
  props: {
    ...(await serverSideTranslations(
      locale,
      ["about", "header", "footer"],
      null,
      ["en", "zh"],
    )),
  },
});
