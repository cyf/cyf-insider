import { useState } from "react";
import { RiAddCircleLine } from "react-icons/ri";
import { LoadingDots } from "@/components/shared/icons";

export default function Form() {
  const [submitClicked, setSubmitClicked] = useState(false);
  const [platform, setPlatform] = useState<"ios" | "android">("android");
  const [email, setEmail] = useState<string>("");

  return (
    <div className="flex h-screen w-screen justify-center">
      <div className="z-10 mt-[calc(30vh)] h-fit w-full max-w-md overflow-hidden border border-gray-100 sm:rounded-2xl sm:shadow-xl dark:border-gray-700">
        <div className="flex flex-col space-y-3 bg-gray-50 px-4 py-8 sm:px-16 dark:bg-gray-700">
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              setSubmitClicked(true);
            }}
            className="flex flex-col space-y-3"
          >
            <div>
              <div className="text-xm mt-1 text-slate-900 dark:text-white">
                游戏
              </div>
              <select
                id="game"
                name="game"
                // placeholder="please select your game"
                required
                value="fafa-runner"
                onChange={(e) => {}}
                className="mt-1 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
              >
                <option value="fafa-runner">FaFa Runner</option>
              </select>
              <div className="mt-1 text-xs">
                <span>选择参与内测的游戏</span>
              </div>
            </div>
            <div>
              <div className="mb-4 mt-1" />
              <div className="text-xm mt-1 text-slate-900 dark:text-white">
                平台
              </div>
              <div className="flex">
                <div className="mr-4 flex items-center">
                  <input
                    id="android"
                    type="radio"
                    value="android"
                    name="inline-radio-group"
                    checked={platform === "android"}
                    onChange={() => setPlatform("android")}
                    className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-2 focus:ring-blue-500"
                  />
                  <label htmlFor="android" className="ml-2 text-sm font-medium">
                    Android
                  </label>
                </div>
                <div className="mr-4 flex items-center">
                  <input
                    id="ios"
                    type="radio"
                    value="ios"
                    name="inline-radio-group"
                    onChange={() => setPlatform("ios")}
                    checked={platform === "ios"}
                    className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-2 focus:ring-blue-500"
                  />
                  <label htmlFor="ios" className="ml-2 text-sm font-medium">
                    iOS
                  </label>
                </div>
              </div>
              <div className="mt-1 text-xs">
                <span>选择参与内测的平台</span>
              </div>
            </div>
            <div>
              <div className="mb-4 mt-1" />
              <div className="text-xm mt-1 text-slate-900 dark:text-white">
                邮箱地址
              </div>
              <input
                id="email"
                name="email"
                autoFocus
                type="email"
                placeholder="请输入您的邮箱地址"
                autoComplete="email"
                required
                onChange={(e) => {
                  e.preventDefault();
                  setEmail(e.target.value);
                }}
                className="mt-1 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
              />
              <div className="mt-1 text-xs">
                <div className="mb-1">填写参与平台的账号邮箱</div>
                <div className="text-red-400">
                  注意: iOS平台请填写apple id邮箱地址,
                  Google平台请填写注册账号的邮箱地址
                </div>
              </div>
            </div>
            <div>
              <div className="mb-4 mt-1" />
              <button
                disabled={submitClicked}
                type="submit"
                className={`${
                  submitClicked
                    ? "cursor-not-allowed border-gray-200 bg-gray-100 dark:border-gray-700 dark:bg-gray-700"
                    : "border border-gray-200 bg-white text-black hover:bg-gray-50 dark:border-gray-700 dark:bg-black dark:text-white dark:hover:bg-gray-700"
                } flex h-10 w-full items-center justify-center space-x-3 rounded-md border text-sm shadow-sm transition-all duration-75 focus:outline-none`}
              >
                {submitClicked ? (
                  <LoadingDots />
                ) : (
                  <>
                    <RiAddCircleLine className="h-5 w-5 dark:text-gray-300" />
                    <p className="text-lg">Submit</p>
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
