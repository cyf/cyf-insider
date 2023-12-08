import dynamic from "next/dynamic";
import { getServerSession } from "next-auth";
import auth from "@/auth";

const SignInComp = dynamic(() => import("@/components/home/sign-in"), {
  ssr: false,
});

export default async function SignIn() {
  const session = await getServerSession(auth);
  return <SignInComp session={session} />;
}
