import { localDbCard } from "@/util/localDbCard";
import Card from "./Card";

/* 홈 화면 */
/* 카드 추가,수정 시 로컬 디비에도 추가하기 */
export default function Home() {
  return (
    <div className="w-[315px] bg-gray-700 mx-auto mt-[70px] p-5 gap-5 grid grid-cols-1 sm:grid-cols-2 sm:w-[635px] md:w-[763px] xl:w-[1024px] xl:grid-cols-3 2xl:grid-cols-4  2xl:w-[1440px] 3xl:w-[1750px] 3xl:grid-cols-5 ">
      <Card thumbSrc="/image/Notice.webp" name="알림말" nameEn="Notice" />
      {localDbCard.map((item) => {
        return (
          <Card
            key={item.name}
            thumbSrc={item.thumbSrc}
            name={item.name}
            nameEn={item.nameEn}
          />
        );
      })}
    </div>
  );
}

/* 카드 추가,수정 시 로컬 디비에도 추가하기 */
