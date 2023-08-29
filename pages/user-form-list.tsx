import Balancer from "react-wrap-balancer";

export default function UserFormList() {
  return (
    <div className="z-10 w-full max-w-xl px-5 xl:px-0">
      <p
        className="mt-6 animate-fade-up text-center text-gray-500 opacity-0 dark:text-gray-300 md:text-xl"
        style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
      >
        <Balancer>list page.</Balancer>
      </p>
    </div>
  );
}
