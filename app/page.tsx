'use client'
import {useEffect, useState} from 'react';
import Balancer from "react-wrap-balancer";
import type { Session } from "next-auth"
import { Github } from "@/components/shared/icons";
import { nFormatter } from "@/lib/utils";
import { useSignInModal } from "@/components/layout/sign-in-modal";

export default async function Home() {
  // const [session, setSession] = useState<Session | null>(null);
  // const { SignInModal, setShowSignInModal } = useSignInModal();
  //
  // useEffect(() => {
  //   getSession().then((session) => setSession(session));
  // }, []);
  //
  // if (!session) {
  //   setShowSignInModal(true);
  // }

  return (
    <>
      {/*<SignInModal />*/}
      <div className="z-10 w-full max-w-xl px-5 xl:px-0">
        <h1
          className="animate-fade-up bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm md:text-7xl md:leading-[5rem]"
          style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
        >
          <Balancer>CYF内测计划</Balancer>
        </h1>
        <p
          className="mt-6 animate-fade-up text-center text-gray-500 opacity-0 md:text-xl"
          style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
        >
          <Balancer>
            参与内测计划, 您将获得最新的产品体验.
          </Balancer>
        </p>
        <p
            className="mt-2 animate-fade-up text-center text-red-400 opacity-0 md:text-sm"
            style={{ animationDelay: "0.35s", animationFillMode: "forwards" }}
        >
          <Balancer>
            我们保证您的个人信息不会被滥用.
          </Balancer>
        </p>
        <div
          className="mx-auto mt-6 flex animate-fade-up items-center justify-center space-x-5 opacity-0"
          style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
        >
          <button
            className="flex max-w-fit items-center justify-center space-x-2 rounded-full border border-gray-300 bg-white px-5 py-2 text-sm text-gray-600 shadow-md transition-colors hover:border-gray-800"
          >
            <Github />
            <p>
              <span className="hidden sm:inline-block font-semibold">Join Insider</span>
            </p>
          </button>
        </div>
      </div>
    </>
  );
}
