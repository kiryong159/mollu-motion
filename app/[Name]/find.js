import { localDB } from "@/util/localDb";
import { localDB101_200 } from "@/util/localDb101-200";

export function find(charaName) {
  let result = {};
  console.log("find 함수 찾을 캐릭터 이름 : ", charaName);
  const found1_100 = localDB.find((item) => item.Name === charaName);
  /* console.log("1-100", found1_20); */
  if (found1_100 === undefined) {
    const found101_200 = localDB101_200.find(
      (item) => item.Name === `${charaName}`
    );
    /* console.log("101-200", found101_200); */
    //101~200에서 찾은경우
    return (result = found101_200);
  } else {
    //1~100에서 찾은경우
    return (result = found1_100);
  }
}

// 140개 넘어갈시 121-140안에
// if(found121_140 === undefined) {솰라솰라 } else{return result =found121_140} .
