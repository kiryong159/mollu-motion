"use client";

import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { lineGridAtom } from "./atom";

export default function MobileGrid() {
  const [oneLine, setOneLine] = useRecoilState(lineGridAtom);
  const [width, setWidth] = useState(0);

  const oneLineFn = () => {
    setOneLine(true);
  };

  const GridLineFn = () => {
    setOneLine(false);
  };

  /*   useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);

      if (window.innerWidth > 639) {
        oneLineFn();
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); */

  return (
    <div className="group flex items-center justify-center bg-gray-500 text-white  rounded-md shadow-md px-3 py-2 hover:cursor-pointer hover:scale-105 transition-all hover:bg-purple-200 hover:text-black">
      {oneLine === true ? (
        <button
          onClick={GridLineFn}
          className="w-full bg-gray-500 text-white px-3 py-2 flex  justify-center items-center space-x-3 group-hover:bg-purple-200 transition-all group-hover:text-black group-hover:scale-105"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            data-slot="icon"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
          <span className="font-bold text-[20px] whitespace-pre">
            여러줄 보기
          </span>
        </button>
      ) : (
        <button
          onClick={oneLineFn}
          className="bg-gray-500 text-white  px-3 py-2 flex flex-col justify-center items-center space-y-3  group-hover:scale-105 transition-all group-hover:bg-purple-200 group-hover:text-black"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            data-slot="icon"
            className="w-8 h-8 text-black"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
            />
          </svg>

          <span className="font-bold text-[10px] whitespace-pre">
            크게 보기
          </span>
        </button>
      )}
    </div>
  );
}
