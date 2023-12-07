"use client";
import { RoughNotation } from "react-rough-notation";
import { useTranslations } from "next-intl";

export default function Introduce() {
  const t = useTranslations();

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
