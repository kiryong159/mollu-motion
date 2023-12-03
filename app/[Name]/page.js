import { connectDB } from "@/util/database";

export default async function CharaMotion(prop) {
  const charaName = prop.params.Name;

  const db = (await connectDB).db("mollu");
  let result = await db.collection("chara").findOne({ Name: charaName });

  return (
    <div className="charaDiv space-y-5">
      <h1 className="text-center text-[40px] font-bold my-5">{result.Kname}</h1>

      {result.Start ? (
        <>
          <h1 className="text-center text-[25px] font-bold">전투 시작</h1>
          <img
            className="rounded-md shadow-md"
            src={`${result.Start}`}
            alt="Start"
          />
        </>
      ) : null}

      {result.Attack ? (
        <>
          <h1 className="text-center text-[25px] font-bold">기본 공격</h1>
          <img
            className="rounded-md shadow-md"
            src={`${result.Attack}`}
            alt="Attack"
          />
        </>
      ) : null}

      {result.Hide ? (
        <>
          <h1 className="text-center text-[25px] font-bold">엄폐</h1>
          <img
            className="rounded-md shadow-md"
            src={`${result.Hide}`}
            alt="Hide"
          />
        </>
      ) : null}

      {result.HideAttack ? (
        <>
          <h1 className="text-center text-[25px] font-bold">엄폐 공격</h1>
          <img
            className="rounded-md shadow-md"
            src={`${result.HideAttack}`}
            alt="HideAttack"
          />
        </>
      ) : null}

      {result.HideReload ? (
        <>
          <h1 className="text-center text-[25px] font-bold">엄폐 재장전</h1>
          <img
            className="rounded-md shadow-md"
            src={`${result.HideReload}`}
            alt="HideReload"
          />
        </>
      ) : null}

      {result.Reload ? (
        <>
          <h1 className="text-center text-[25px] font-bold">재장전</h1>
          <img
            className="rounded-md shadow-md"
            src={`${result.Reload}`}
            alt="Reload"
          />
        </>
      ) : null}

      {result.Ex ? (
        <>
          <h1 className="text-center text-[25px] font-bold">EX</h1>
          <img className="rounded-md shadow-md" src={`${result.Ex}`} alt="Ex" />
        </>
      ) : null}

      {result.ExAttack ? (
        <>
          <h1 className="text-center text-[25px] font-bold">EX 공격 </h1>
          <img
            className="rounded-md shadow-md"
            src={`${result.ExAttack}`}
            alt="ExAttack"
          />
        </>
      ) : null}

      {result.ExReload ? (
        <>
          <h1 className="text-center text-[25px] font-bold">EX 재장전</h1>
          <img
            className="rounded-md shadow-md"
            src={`${result.ExReload}`}
            alt="ExReload"
          />
        </>
      ) : null}

      {result.Ns ? (
        <>
          <h1 className="text-center text-[25px] font-bold">1스</h1>
          <img className="rounded-md shadow-md" src={`${result.Ns}`} alt="Ns" />
        </>
      ) : null}

      {result.Win ? (
        <>
          <h1 className="text-center text-[25px] font-bold">전투 승리 </h1>
          <img
            className="rounded-md shadow-md"
            src={`${result.Win}`}
            alt="Win"
          />
        </>
      ) : null}

      {result.Pick ? (
        <>
          <h1 className="text-center text-[25px] font-bold">편성창</h1>
          <img
            className="rounded-md shadow-md"
            src={`${result.Pick}`}
            alt="Pick"
          />
        </>
      ) : null}

      {result.Cafe ? (
        <>
          <h1 className="text-center text-[25px] font-bold">카페 </h1>
          <img
            className="rounded-md shadow-md"
            src={`${result.Cafe}`}
            alt="Cafe"
          />
        </>
      ) : null}

      {result.Cafe2 ? (
        <>
          <h1 className="text-center text-[25px] font-bold">가구</h1>
          <img
            className="rounded-md shadow-md"
            src={`${result.Cafe2}`}
            alt="Cafe2"
          />
        </>
      ) : null}
    </div>
  );
}
