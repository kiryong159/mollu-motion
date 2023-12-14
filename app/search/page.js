"use client";

import { localDbCard } from "@/util/localDbCard";
import { useState } from "react";
import Card from "../Card";

export default function Search() {
  const [keyword, setKeyword] = useState("");

  const onChange = (event) => {
    /*  console.log(event.target.value); */
    setKeyword(event.target.value);
  };
  const filterKeyword =
    keyword === ""
      ? []
      : localDbCard.filter((item) => {
          return item.name.includes(keyword);
        });
  /*  console.log(filterKeyword); */
  return (
    <div className="flex flex-col mt-[70px] ">
      <input
        className="mt-[30px] w-[200px] mx-auto p-1 px-3 bg-transparent border-b-2 text-white text-[20px]  focus:outline-none"
        placeholder="이름으로 검색"
        value={keyword}
        onChange={onChange}
      />
      <div className="w-[315px] bg-transparent mx-auto mt-[30px] p-5 gap-5 grid grid-cols-1 sm:grid-cols-2 sm:w-[635px] md:w-[763px] xl:w-[1024px] xl:grid-cols-3 2xl:grid-cols-4  2xl:w-[1440px] 3xl:w-[1750px] 3xl:grid-cols-5 ">
        {filterKeyword.map((item) => {
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
    </div>
  );
}

// 키워드를 포함한 오브젝트를 db에서 찾아서  [] 만들어준다음  맵 하면 될듯?
