import { NextRequest } from "next/server";
import { withAuth } from "next-auth/middleware";
import createIntlMiddleware from "next-intl/middleware";
import { locales, defaultLocale } from "./navigation";

const protectedPages = ["/form", "/user-form-list", "/admin-form-list"];

const intlMiddleware = createIntlMiddleware({
  locales,
  localePrefix: "always",
  defaultLocale,
});

const authMiddleware = withAuth(
  // Note that this callback is only invoked if
  // the `authorized` callback has returned `true`
  // and not for pages listed in `pages`.
  (req) => intlMiddleware(req),
  {
    callbacks: {
      authorized({ req, token }) {
        // `/admin-form-list` requires admin role
        if (
          RegExp("^(/(en|zh))?(/admin-form-list)/?$", "i").test(
            req.nextUrl.pathname,
          )
        ) {
          return token?.userRole === "admin";
        }
        // `/form` only requires the user to be logged in
        return !!token;
      },
    },
    pages: {
      signIn: `/sign-in`,
    },
  },
);

export default function middleware(req: NextRequest) {
  const protectedPathnameRegex = RegExp(
    `^(/(${locales.join("|")}))?(${protectedPages
      .flatMap((p) => (p === "/" ? ["", "/"] : p))
      .join("|")})/?$`,
    "i",
  );

  const isProtected = protectedPathnameRegex.test(req.nextUrl.pathname);

  if (!isProtected) {
    return intlMiddleware(req);
  } else {
    return (authMiddleware as any)(req);
  }
}

export const config = {
  // Skip all paths that should not be internationalized
  matcher: [
    "/((?!api|_next/static|_next/image|images|videos|assets|favicon.ico|logo.png|sitemap.xml|sw.js).*)",
  ],
};
