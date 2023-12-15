import Image from "next/image";
import { find } from "./find";

export default async function CharaMotion(prop) {
  const charaName = prop.params.Name;
  const result = find(charaName);

  return (
    <div className="charaDiv bg-gray-700 text-white w-[315px] 3sm:w-[370px] 2sm:w-[420px] md:w-[500px] lg:w-[600px] xl:w-[700px] space-y-5">
      {result.Kname.length > 9 ? (
        <h1 className=" text-[30px]  my-5">{result.Kname}</h1>
      ) : (
        <h1 className=" text-[40px]  my-5">{result.Kname}</h1>
      )}
      {result.Start ? (
        <>
          <h1 className="">전투 시작</h1>
          <Image
            loading="lazy"
            className="rounded-md shadow-md  w-full h-auto "
            src={`${result.Start}`}
            width="500"
            height="750"
            alt="Start"
          />
        </>
      ) : null}

      {result.Start2 ? (
        <>
          <h1 className="  ">전투 시작2</h1>
          <Image
            loading="lazy"
            className="rounded-md shadow-md  w-full h-auto"
            src={`${result.Start2}`}
            width="500"
            height="750"
            alt="Start2"
          />
        </>
      ) : null}

      {result.Attack ? (
        <>
          <h1 className="  ">기본 공격</h1>
          <Image
            loading="lazy"
            className="rounded-md shadow-md w-full h-auto"
            src={`${result.Attack}`}
            width="440"
            height="400"
            alt="Attack"
          />
        </>
      ) : null}

      {result.Hide ? (
        <>
          <h1 className="  ">엄폐</h1>
          <Image
            loading="lazy"
            className="rounded-md shadow-md w-full h-auto"
            src={`${result.Hide}`}
            width="440"
            height="400"
            alt="Hide"
          />
        </>
      ) : null}

      {result.HideAttack ? (
        <>
          <h1 className="  ">엄폐 공격</h1>
          <Image
            loading="lazy"
            className="rounded-md shadow-md w-full h-auto"
            src={`${result.HideAttack}`}
            width="480"
            height="360"
            alt="HideAttack"
          />
        </>
      ) : null}

      {result.HideReload ? (
        <>
          <h1 className="  ">엄폐 재장전</h1>
          <Image
            loading="lazy"
            className="rounded-md shadow-md w-full h-auto"
            src={`${result.HideReload}`}
            width="480"
            height="360"
            alt="HideReload"
          />
        </>
      ) : null}

      {result.HideReload2 ? (
        <>
          <h1 className="  ">엄폐 재장전2</h1>
          <Image
            loading="lazy"
            className="rounded-md shadow-md w-full h-auto"
            src={`${result.HideReload2}`}
            width="480"
            height="360"
            alt="HideReload2"
          />
        </>
      ) : null}

      {result.Reload ? (
        <>
          <h1 className="  ">재장전</h1>
          <Image
            loading="lazy"
            className="rounded-md shadow-md w-full h-auto"
            src={`${result.Reload}`}
            width="480"
            height="440"
            alt="Reload"
          />
        </>
      ) : null}

      {result.Reload2 ? (
        <>
          <h1 className="  ">재장전2</h1>
          <Image
            loading="lazy"
            className="rounded-md shadow-md w-full h-auto"
            src={`${result.Reload2}`}
            width="480"
            height="440"
            alt="Reload"
          />
        </>
      ) : null}

      {result.Ex ? (
        <>
          <h1 className="  ">EX</h1>
          <Image
            loading="lazy"
            className="rounded-md shadow-md w-full h-auto"
            src={`${result.Ex}`}
            width="480"
            height="500"
            alt="Ex"
          />
        </>
      ) : null}

      {result.Ex2 ? (
        <>
          <h1 className="  ">EX2</h1>
          <Image
            loading="lazy"
            className="rounded-md shadow-md w-full h-auto"
            src={`${result.Ex2}`}
            width="500"
            height="500"
            alt="Ex2"
          />
        </>
      ) : null}

      {result.ExAttack ? (
        <>
          <h1 className="  ">EX 공격 </h1>
          <Image
            loading="lazy"
            className="rounded-md shadow-md w-full h-auto"
            src={`${result.ExAttack}`}
            width="500"
            height="400"
            alt="ExAttack"
          />
        </>
      ) : null}

      {result.ExReload ? (
        <>
          <h1 className="  ">EX 재장전</h1>
          <Image
            loading="lazy"
            className="rounded-md shadow-md w-full h-auto"
            src={`${result.ExReload}`}
            width="500"
            height="400"
            alt="ExReload"
          />
        </>
      ) : null}

      {result.ExNs ? (
        <>
          <h1 className="  ">Ex Ns</h1>
          <Image
            loading="lazy"
            className="rounded-md shadow-md w-full h-auto"
            src={`${result.ExNs}`}
            width="500"
            height="750"
            alt="ExNs"
          />
        </>
      ) : null}

      {result.Ns ? (
        <>
          <h1 className="  ">Ns</h1>
          <Image
            loading="lazy"
            className="rounded-md shadow-md w-full h-auto"
            src={`${result.Ns}`}
            width="500"
            height="400"
            alt="Ns"
          />
        </>
      ) : null}

      {result.Object ? (
        <>
          <h1 className="  ">오브젝트</h1>
          <Image
            loading="lazy"
            className="rounded-md shadow-md w-full h-auto"
            src={`${result.Object}`}
            width="500"
            height="450"
            alt="Obj"
          />
        </>
      ) : null}

      {result.Win ? (
        <>
          <h1 className="  ">전투 승리 </h1>
          <Image
            loading="lazy"
            className="rounded-md shadow-md w-full h-auto"
            src={`${result.Win}`}
            width="500"
            height="750"
            alt="Win"
          />
        </>
      ) : null}
      {result.Win2 ? (
        <>
          <h1 className="  ">전투 승리2 </h1>
          <Image
            loading="lazy"
            className="rounded-md shadow-md w-full h-auto"
            src={`${result.Win2}`}
            width="500"
            height="750"
            alt="Win2"
          />
        </>
      ) : null}

      {result.Pick ? (
        <>
          <h1 className="  ">편성창</h1>
          <Image
            loading="lazy"
            className="rounded-md shadow-md w-full h-auto"
            src={`${result.Pick}`}
            width="500"
            height="750"
            alt="Pick"
          />
        </>
      ) : null}

      {result.Cafe ? (
        <>
          <h1 className="  ">카페 </h1>
          <Image
            loading="lazy"
            className="rounded-md shadow-md w-full h-auto"
            src={`${result.Cafe}`}
            width="500"
            height="750"
            alt="Cafe"
          />
        </>
      ) : null}

      {result.Cafe2 ? (
        <>
          <h1 className="  ">가구</h1>
          <Image
            loading="lazy"
            className="rounded-md shadow-md w-full h-auto"
            src={`${result.Cafe2}`}
            width="500"
            height="500"
            alt="Cafe2"
          />
        </>
      ) : null}

      {result.Cafe3 ? (
        <>
          <h1 className="  ">가구2</h1>
          <Image
            loading="lazy"
            className="rounded-md shadow-md w-full h-auto"
            src={`${result.Cafe3}`}
            width="500"
            height="500"
            alt="Cafe3"
          />
        </>
      ) : null}
    </div>
  );
}
