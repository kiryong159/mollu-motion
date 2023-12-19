import Link from "next/link";

/* 홈에서 보이는 카드 */
export default function Card2({ thumbSrc, name, nameEn }) {
  const src = thumbSrc;
  const destinationURL = nameEn;
  return (
    <Link
      href={`/${destinationURL}`}
      className="bg-gray-500 text-white  rounded-md shadow-md px-3 py-2 flex flex-col justify-center items-center space-y-3 hover:cursor-pointer hover:scale-105 transition-all hover:bg-purple-200 hover:text-black"
    >
      <img
        className="rounded-sm w-[45px]"
        src={`${src}`}
        width="45"
        height="20"
        loading="lazy"
        alt="thumbImg"
      />
      {name.length >= 6 ? (
        name.length > 9 ? (
          <span className="font-bold text-[8px] whitespace-pre">{name}</span>
        ) : (
          <span className="font-bold text-[10px] whitespace-pre">{name}</span>
        )
      ) : (
        <span className="font-bold text-[13px]">{name}</span>
      )}
    </Link>
  );
}

/* 카드 hover시 색상변경 */
/* Image를  써야하나? */
