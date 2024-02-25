"use client";
import { TypewriterEffectSmooth } from "@/app/components/ui/typewriter-effect";
import Link from "next/link";
const TypewriterEffectSmoothDemo = () => {
  const words = [
    {
      text: "From",
    },
    {
      text: "stress",
    },
    {
      text: "to success",
    },
    {
      text: "your :",
    },
    {
      text: "Assignment Ally.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[40rem] text-black">
      <p className=" text-black text-[12px] font-semibold md:text-2xl ">
        Beyond Assignments: We Deliver Excellence, Every Time
      </p>
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        {/* <button className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
          Signup
        </button> */}
        <div className="mt-16 mb-16 flex flex-col items-center justify-center divide-y divide-gray-300 sm:flex-row sm:divide-x sm:divide-y-0 md:mt-20">
          <div className="flex max-w-xs space-x-2 px-4 py-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-blue-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
              />
            </svg>
            <p className="text-gray-600 text-sm">
              We deliver plagiarism-free, high-standard, and quality work to our
              clients.{" "}
            </p>
          </div>
          <div className="flex max-w-xs space-x-2 px-4 py-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-blue-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
              />
            </svg>
            <p className="text-gray-600 text-sm">
              We provide hands-on technical assignment tutorials designed for
              learning purposes.{" "}
            </p>
          </div>
          <div className="flex max-w-xs space-x-2 px-4 py-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-blue-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p className="text-gray-600 text-sm">
              Budget-friendly prices, allowing you to concentrate on value, not
              expenses.{" "}
            </p>
          </div>
        </div>
      </div>

      <Link href="/pricing" className="bg-black rounded-lg">
        <button className="w-40 h-10 rounded-lg bg-blue-600 border e border-transparent text-white text-sm">
          Order now
        </button>{" "}
      </Link>
    </div>
  );
}

export default TypewriterEffectSmoothDemo;

