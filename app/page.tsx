import { redirect } from "next/navigation";
import { basePath } from "@/constants";
import { defaultLocale } from "@/navigation";

export default function RootPage() {
  redirect(`${basePath}/${defaultLocale}`);
}
