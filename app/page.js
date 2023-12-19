"use client";
import { localDbCard } from "@/util/localDbCard";
import { useRecoilValue } from "recoil";
import { lineGridAtom } from "./atom";
import Card from "./Card";
import Card2 from "./Card2";
import MobileGrid from "./mobileGrid";

/* 홈 화면 */
/* 카드 추가,수정 시 로컬 디비에도 추가하기 */
export default function Home() {
  const oneLine = useRecoilValue(lineGridAtom);
  return (
    <div
      className={`w-[315px] bg-gray-700 mx-auto mt-[70px] p-5 gap-5 grid  ${
        oneLine ? "grid-cols-1" : "grid-cols-3 3sm:w-[370px] 2sm:w-[420px]"
      } sm:grid-cols-2 sm:w-[635px] md:w-[763px] xl:w-[1024px] xl:grid-cols-3 2xl:grid-cols-4  2xl:w-[1440px] 3xl:w-[1750px] 3xl:grid-cols-5 `}
    >
      {oneLine === true ? (
        <>
          <MobileGrid />
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
        </>
      ) : (
        <>
          <MobileGrid />
          <Card2 thumbSrc="/image/Notice.webp" name="알림말" nameEn="Notice" />
          {localDbCard.map((item) => {
            return (
              <Card2
                key={item.name}
                thumbSrc={item.thumbSrc}
                name={item.name}
                nameEn={item.nameEn}
              />
            );
          })}
        </>
      )}
    </div>
  );
}

/* 카드 추가,수정 시 로컬 디비에도 추가하기 */
/* "4sm": "320px","3sm": "375px","2sm": "425px", */
