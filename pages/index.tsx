"use client";
import Balancer from "react-wrap-balancer";
import { JoinInsider } from "@/components/home/join-insider";

export default function Home() {
  return (
    <div className="z-10 w-full max-w-xl px-5 xl:px-0">
      <h1
        className="animate-fade-up bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-black/80 opacity-0 drop-shadow-sm dark:text-white/80 md:text-7xl md:leading-[5rem]"
        style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
      >
        <Balancer>CYF内测计划</Balancer>
      </h1>
      <p
        className="mt-6 animate-fade-up text-center text-gray-500 opacity-0 dark:text-gray-400 md:text-xl"
        style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
      >
        <Balancer>参与内测计划, 您将获得最新的产品体验.</Balancer>
      </p>
      <p
        className="mt-2 animate-fade-up text-center text-red-400 opacity-0 md:text-sm"
        style={{ animationDelay: "0.35s", animationFillMode: "forwards" }}
      >
        <Balancer>我们保证您的个人信息不会被滥用.</Balancer>
      </p>
      <JoinInsider />
    </div>
  );
}
