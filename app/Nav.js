import Link from "next/link";
import BackBtn from "./backBtn";

export default function Nav() {
  return (
    <div className="flex fixed top-0 w-full bg-gray-600 text-white font-bold left-0 right-0 h-[70px]  ">
      <div className="flex mx-auto p-3 w-[315px] sm:w-[635px]  items-center justify-between text-[25px]">
        <BackBtn />
        <Link href={"/"}>
          <h1>Mollu-Motion</h1>
        </Link>
        <Link
          href={"/search"}
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
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}

/*  md:w-[763px] xl:w-[1024px] xl:grid-cols-3 2xl:grid-cols-4  2xl:w-[1440px] 3xl:w-[1750px]  */
