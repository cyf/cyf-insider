"use client";
import { RoughNotation } from "react-rough-notation";
import { useTranslation } from "next-i18next";

export default function Introduce() {
  const { t, i18n } = useTranslation("common");

  return (
    <RoughNotation
      animate
      type="highlight"
      show={true}
      color="rgb(36, 54, 110)"
      animationDelay={1000}
      animationDuration={2500}
    >
      {t("introduce")}
    </RoughNotation>
  );
}
