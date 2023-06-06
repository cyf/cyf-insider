import { withAuth } from "next-auth/middleware";

// More on how NextAuth.js middleware works: https://next-auth.js.org/configuration/nextjs#middleware
export default withAuth({
  callbacks: {
    authorized({ req, token }) {
      console.log("callback token", token, "req", req);
      // `/form` only requires the user to be logged in
      return !!token;
    },
  },
});

export const config = { matcher: ["/form"] };
