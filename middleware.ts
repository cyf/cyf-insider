import { withAuth } from "next-auth/middleware";

// More on how NextAuth.js middleware works: https://next-auth.js.org/configuration/nextjs#middleware
export default withAuth({
  callbacks: {
    authorized({ req, token }) {
      console.log("callback token", token, "req", req);
      // `/admin-form-list` requires admin role
      if (req.nextUrl.pathname === "/admin-form-list") {
        return token?.userRole === "admin";
      }
      // `/form` only requires the user to be logged in
      return !!token;
    },
  },
});

export const config = { matcher: ["/form", "/admin-form-list", "/user-form-list"] };
