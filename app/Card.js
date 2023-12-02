"use client";

import Link from "next/link";

/* 홈에서 보이는 카드 */
export default function Card({ thumbSrc, name, nameEn }) {
  const src = thumbSrc;
  const destinationURL = nameEn;
  return (
    <Link
      href={`/${destinationURL}`}
      className="bg-gray-500 rounded-md shadow-md px-3 py-2 flex items-center space-x-5 hover:cursor-pointer"
    >
      <img className="rounded-sm w-[55px]" src={src} alt="thumbImg" />
      <span className="text-[20px]">{name}</span>
    </Link>
  );
}

/* 카드 hover시 색상변경 */
/* router 이름 motion /[chara] ->  Aru ? Serica */
/* 글 내용을 db에서 불러와야하는가?  */
