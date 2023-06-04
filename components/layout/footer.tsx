export default function Footer() {
  return (
    <div className="fixed bottom-0 w-full border-gray-200 py-5 text-center">
      <p className="text-gray-500 inline-block mr-2">
        <a
          className="font-medium text-gray-800 underline transition-colors"
          href="https://chenyifaer.com/fafa-runner/privacy"
          target="_blank"
          rel="noopener noreferrer"
        >
          Privacy
        </a>
      </p>
        <p className="text-gray-500 inline-block">
            <a
                className="font-medium text-gray-800 underline transition-colors"
                href="https://chenyifaer.com/fafa-runner/terms-of-use"
                target="_blank"
                rel="noopener noreferrer"
            >
                Terms of Use
            </a>
        </p>
    </div>
  );
}
