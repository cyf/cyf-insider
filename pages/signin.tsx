import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { Github, Google, LoadingDots } from "@/components/shared/icons";
import { useRouter } from "next/router";

export default function SignIn() {
  const router = useRouter();
  const { callbackUrl } = router.query as { callbackUrl?: string };
  const [googleClicked, setGoogleClicked] = useState(false);
  const [githubClicked, setGitHubClicked] = useState(false);

  return (
    <div className="flex w-screen justify-center">
      <div className="z-10 h-fit w-full max-w-md overflow-hidden border border-gray-100 sm:rounded-2xl sm:shadow-xl">
        <div className="flex flex-col items-center justify-center space-y-3 border-b border-gray-200 bg-white px-4 py-6 pt-8 text-center sm:px-16">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="CYF logo"
              className="h-10 w-10 rounded-full"
              width={20}
              height={20}
            />
          </Link>
          <h3 className="text-xl font-semibold">Sign in to CYF</h3>
          <p className="text-sm text-gray-500">
            Only your email and profile picture will be stored.
          </p>
        </div>
        <div className="flex flex-col space-y-3 bg-gray-50 px-4 py-8 sm:px-16">
          <button
            disabled={googleClicked}
            className={`${
              googleClicked
                ? "cursor-not-allowed border-gray-200 bg-gray-100"
                : "border border-gray-200 bg-white text-black hover:bg-gray-50"
            } flex h-10 w-full items-center justify-center space-x-3 rounded-md border text-sm shadow-sm transition-all duration-75 focus:outline-none`}
            onClick={() => {
              setGoogleClicked(true);
              signIn("google", {
                ...(callbackUrl ? { callbackUrl } : {}),
              }).finally(() => {
                setGoogleClicked(false);
              });
            }}
          >
            {googleClicked ? (
              <LoadingDots color="#808080" />
            ) : (
              <>
                <Google className="h-5 w-5" />
                <p>Sign In with Google</p>
              </>
            )}
          </button>
          <button
            disabled={githubClicked}
            className={`${
              githubClicked
                ? "cursor-not-allowed border-gray-200 bg-gray-100"
                : "border border-gray-200 bg-white text-black hover:bg-gray-50"
            } flex h-10 w-full items-center justify-center space-x-3 rounded-md border text-sm shadow-sm transition-all duration-75 focus:outline-none`}
            onClick={() => {
              setGitHubClicked(true);
              signIn("github", {
                ...(callbackUrl ? { callbackUrl } : {}),
              }).finally(() => {
                setGitHubClicked(false);
              });
            }}
          >
            {githubClicked ? (
              <LoadingDots color="#808080" />
            ) : (
              <>
                <Github className="h-5 w-5" />
                <p>Sign In with GitHub</p>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
