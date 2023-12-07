import Image from "next/image";
import dynamic from "next/dynamic";
import Balancer from "react-wrap-balancer";
import { useTranslations } from "next-intl";
import { basePath } from "@/constants";
import { JoinInsider } from "@/components/home/join-insider";

const Introduce = dynamic(() => import("@/components/home/introduce"), {
  ssr: true,
});

export default function Home() {
  const t = useTranslations();

  return (
    <div className="z-10 w-full max-w-2xl px-5 xl:px-0">
      <div className="mb-8 flex items-center justify-center space-x-20">
        <Image
          className="rounded-full"
          alt="logo"
          src={`${basePath}/logo.png`}
          width={160}
          height={160}
        />
      </div>
      <h1
        className="animate-fade-up bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-black/80 opacity-0 drop-shadow-sm dark:text-white/80 md:text-7xl md:leading-[5rem]"
        style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
      >
        <Balancer>{t("title")}</Balancer>
      </h1>
      <p
        className="mt-6 animate-fade-up text-center text-gray-200 opacity-0 md:text-xl"
        style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
      >
        <Balancer>
          <Introduce />
        </Balancer>
      </p>
      <p
        className="mt-2 animate-fade-up text-center text-red-400 opacity-0 md:text-sm"
        style={{ animationDelay: "0.35s", animationFillMode: "forwards" }}
      >
        <Balancer>{t("tips")}</Balancer>
      </p>
      <JoinInsider />
    </div>
  );
}
