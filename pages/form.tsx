export default function Form() {
  return (
    <div
      className="mx-auto mt-6 flex animate-fade-up items-center justify-center space-x-5 opacity-0"
      style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
    >
      <button className="flex max-w-fit items-center justify-center space-x-2 rounded-full border border-gray-300 bg-white px-5 py-2 text-sm text-gray-600 shadow-md transition-colors hover:border-gray-800">
        <p>
          <span className="hidden font-semibold sm:inline-block">Login</span>
        </p>
      </button>
    </div>
  );
}
