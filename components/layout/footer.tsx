export default function Footer() {
  return (
    <div className="absolute w-full border-gray-200 py-5 text-center">
      <p className="mr-2 inline-block text-gray-500">
        <a
          className="font-medium text-gray-800 underline transition-colors"
          href="https://chenyifaer.com/fafa-runner/privacy"
          target="_blank"
          rel="noopener noreferrer"
        >
          Privacy
        </a>
      </p>
      <p className="inline-block text-gray-500">
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
