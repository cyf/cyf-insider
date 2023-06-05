import { withAuth } from "next-auth/middleware";
import jwt_decode  from 'jwt-decode';

// More on how NextAuth.js middleware works: https://next-auth.js.org/configuration/nextjs#middleware
export default withAuth({
  callbacks: {
    authorized({ req, token }) {
      console.log('callback token', token, "req", req);
      const tokenValue = req.cookies.get("next-auth.session-token")?.value;
      const tokenInSession: any = tokenValue ? jwt_decode(tokenValue) : null;

      console.log('tokenInSession', tokenInSession);
      // `/form` only requires the user to be logged in
      return !!token || !!tokenInSession;
    },
  },
});

export const config = { matcher: ["/form"] };
