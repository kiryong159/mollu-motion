import { localDB } from "@/util/localDb";
import { localDB101_120 } from "@/util/localDb101-120";
import { localDB121_140 } from "@/util/localDb121-140";
import { localDB21_40 } from "@/util/localDb21-40";
import { localDB41_60 } from "@/util/localDb41-60";
import { localDB61_80 } from "@/util/localDb61-80";
import { localDB81_100 } from "@/util/localDb81-100";

export function find(charaName) {
  let result = {};
  console.log("find 함수 찾을 캐릭터 이름 : ", charaName);
  const found1_20 = localDB.find((item) => item.Name === charaName);
  /* console.log("1-20", found1_20); */
  if (found1_20 === undefined) {
    const found21_40 = localDB21_40.find(
      (item) => item.Name === `${charaName}`
    );
    /* console.log("21-40", found21_40); */
    if (found21_40 === undefined) {
      const found41_60 = localDB41_60.find((item) => item.Name === charaName);
      /* console.log("41-60", found41_60); */
      if (found41_60 === undefined) {
        const found61_80 = localDB61_80.find((item) => item.Name === charaName);
        /* console.log("61-80", found61_80); */
        if (found61_80 === undefined) {
          const found81_100 = localDB81_100.find(
            (item) => item.Name === charaName
          );
          /* console.log("81-100", found81_100); */
          if (found81_100 === undefined) {
            const found101_120 = localDB101_120.find(
              (item) => item.Name === charaName
            );
            /* console.log("101-120", found101_120); */
            if (found101_120 === undefined) {
              const found121_140 = localDB121_140.find(
                (item) => item.Name === charaName
              );
              /* console.log("121-140", found121_140); */
              return (result = found121_140);
            } else {
              return (result = found101_120);
            }
          } else {
            return (result = found81_100);
          }
        } else {
          return (result = found61_80);
        }
      } else {
        return (result = found41_60);
      }
    } else {
      return (result = found21_40);
    }
  } else {
    return (result = found1_20);
  }
}

// 140개 넘어갈시 121-140안에
// if(found121_140 === undefined) {솰라솰라 } else{return result =found121_140} .
