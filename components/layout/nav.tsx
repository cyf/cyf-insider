import { getServerSession } from "next-auth";
import Navbar from "./navbar";
import auth from "@/auth";

export default async function Nav(props: { lng: string }) {
  const session = await getServerSession(auth);
  return <Navbar session={session} lng={props.lng} />;
}
