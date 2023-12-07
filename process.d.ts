declare namespace NodeJS {
  export interface ProcessEnv {
    POSTGRES_PRISMA_URL: string;
    POSTGRES_URL_NON_POOLING: string;
    GOOGLE_CLIENT_ID: string;
    GOOGLE_CLIENT_SECRET: string;
    GITHUB_CLIENT_ID: string;
    GITHUB_CLIENT_SECRET: string;
    NEXTAUTH_URL: string;
    NEXTAUTH_SECRET: string;
    VERCEL_GIT_COMMIT_SHA: string;
    NEXT_PUBLIC_GOOGLE_ID: string;
    NEXT_PUBLIC_COOKIE_BANNER_ID: string;
    NEXT_PUBLIC_VERCEL_ENV: string;
  }
}
