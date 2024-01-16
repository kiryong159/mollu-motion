import Link from "next/link";

/* 홈에서 보이는 카드 */
export default function Card({ thumbSrc, name, nameEn }) {
  const src = thumbSrc;
  const destinationURL = nameEn;
  return (
    <Link
      href={`/${destinationURL}`}
      className="bg-gray-500 text-white  rounded-md shadow-md px-3 py-2 flex items-center space-x-5 hover:cursor-pointer hover:scale-105 transition-all hover:bg-purple-200 hover:text-black"
    >
      <img
        className="rounded-sm w-[55px]"
        src={`${src}`}
        width="55"
        height="45"
        loading="lazy"
        alt="thumbImg"
      />
      {name.length > 9 ? (
        <span className="font-bold text-[18px] xl:text-[16px]  whitespace-pre">
          {name}
        </span>
      ) : (
        <span className="font-bold text-[20px]  whitespace-pre">{name}</span>
      )}
    </Link>
  );
}

/* 카드 hover시 색상변경 */
/* Image를  써야하나? */
