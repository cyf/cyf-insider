import { getServerSession } from "next-auth/next"

import { authOptions } from "@/app/api/auth/[...nextauth]/route"

// Getting the session in Next13 app/ directory
// https://next-auth.js.org/configuration/nextjs#in-app-directory
export async function getSession() {
  return await getServerSession(authOptions)
}

export async function getCurrentUser() {
  const session = await getSession()
  return session?.user
}
