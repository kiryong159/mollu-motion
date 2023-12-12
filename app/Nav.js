import Link from "next/link";
import BackBtn from "./backBtn";

export default function Nav() {
  return (
    <div className="flex fixed top-0 w-full bg-gray-600 text-white font-bold left-0 right-0 h-[70px]  ">
      <div className="flex mx-auto p-3 w-[315px] items-center justify-between text-[25px]">
        <BackBtn />
        <h1>Mollu-Motion</h1>
        <Link
          href={"/"}
          className="hover:cursor-pointer hover:scale-125 transition-all hover:text-purple-200 "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}
