import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full border-gray-200 py-5">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a
              href="https://www.chenyifaer.com/join/"
              className="flex items-center"
            >
              <Image
                src="https://www.chenyifaer.com/join/logo.png"
                height={50}
                width={50}
                className="mr-3 rounded-full"
                alt="CYF Insider Logo"
              />
              <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
                CYF Insider
              </span>
            </a>
            <p className="mt-4">
              <Image
                src="https://visitor-badge.laobi.icu/badge?page_id=insider.chenyifaer.com"
                width={60}
                height={20}
                alt="visitor badge"
              />
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-6">
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-gray-300">
                Resources
              </h2>
              <ul className="font-medium text-gray-600 dark:text-gray-400">
                <li className="mb-4">
                  <a href="https://nextjs.org/" className="hover:underline">
                    Next
                  </a>
                </li>
                <li>
                  <a
                    href="https://tailwindcss.com/"
                    className="hover:underline"
                  >
                    Tailwind CSS
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-gray-300">
                Follow us
              </h2>
              <ul className="font-medium text-gray-600 dark:text-gray-400">
                <li className="mb-4">
                  <a
                    href="https://github.com/cyf/cyf-insider"
                    className="hover:underline "
                  >
                    Github
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-gray-300">
                Legal
              </h2>
              <ul className="font-medium text-gray-600 dark:text-gray-400">
                <li className="mb-4">
                  <a
                    href="https://chenyifaer.com/join/legal/privacy"
                    className="hover:underline"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="https://chenyifaer.com/join/legal/terms-of-use"
                    className="hover:underline"
                  >
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 dark:border-gray-500 sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 dark:text-gray-400 sm:text-center">
            © 2023{" "}
            <a
              href="https://www.chenyifaer.com/join"
              className="hover:underline"
            >
              CYF Insider
            </a>
            . All Rights Reserved.{" "}
            {process.env.VERCEL_GIT_COMMIT_SHA && (
              <a
                href={`https://github.com/cyf/cyf-insider/commit/${process.env.VERCEL_GIT_COMMIT_SHA}`}
                target="_blank"
                className="hover:underline"
                rel="noreferrer"
              >
                {process.env.VERCEL_GIT_COMMIT_SHA.substring(0, 8)}
              </a>
            )}
          </span>
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <a
              href="https://github.com/cyf"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">cyf</span>
            </a>
          </div>
        </div>
      </div>
    </footer>

    // <div className="absolute w-full border-gray-200 py-5 text-center">
    //   <p className="mr-2 inline-block text-gray-500">
    //     <a
    //       className="font-medium text-gray-800 underline transition-colors"
    //       href="https://chenyifaer.com/fafa-runner/privacy"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Privacy
    //     </a>
    //   </p>
    //   <p className="inline-block text-gray-500">
    //     <a
    //       className="font-medium text-gray-800 underline transition-colors"
    //       href="https://chenyifaer.com/fafa-runner/terms-of-use"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Terms of Use
    //     </a>
    //   </p>
    // </div>
  );
}
