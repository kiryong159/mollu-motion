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
          <details>
            <summary className="">전투 시작</summary>
            <img
              className="rounded-md shadow-md  w-full h-auto "
              src={`${result.Start}`}
              alt="Start"
            />
          </details>
        </>
      ) : null}

      {result.Start2 ? (
        <>
          <details>
            <summary className="  ">전투 시작2</summary>
            <img
              className="rounded-md shadow-md  w-full h-auto"
              src={`${result.Start2}`}
              alt="Start2"
            />
          </details>
        </>
      ) : null}

      {result.Attack ? (
        <>
          <details>
            <summary className="  ">기본 공격</summary>
            <img
              className="rounded-md shadow-md w-full h-auto"
              src={`${result.Attack}`}
              alt="Attack"
            />
          </details>
        </>
      ) : null}

      {result.Hide ? (
        <>
          <details>
            <summary className="  ">엄폐</summary>
            <img
              className="rounded-md shadow-md w-full h-auto"
              src={`${result.Hide}`}
              alt="Hide"
            />
          </details>
        </>
      ) : null}

      {result.HideAttack ? (
        <>
          <details>
            <summary className="  ">엄폐 공격</summary>
            <img
              className="rounded-md shadow-md w-full h-auto"
              src={`${result.HideAttack}`}
              alt="HideAttack"
            />
          </details>
        </>
      ) : null}

      {result.HideReload ? (
        <>
          <details>
            <summary className="  ">엄폐 재장전</summary>
            <img
              className="rounded-md shadow-md w-full h-auto"
              src={`${result.HideReload}`}
              alt="HideReload"
            />
          </details>
        </>
      ) : null}

      {result.HideReload2 ? (
        <>
          <details>
            <summary className="  ">엄폐 재장전2</summary>
            <img
              className="rounded-md shadow-md w-full h-auto"
              src={`${result.HideReload2}`}
              alt="HideReload2"
            />
          </details>
        </>
      ) : null}

      {result.Reload ? (
        <>
          <details>
            <summary className="  ">재장전</summary>
            <img
              className="rounded-md shadow-md w-full h-auto"
              src={`${result.Reload}`}
              alt="Reload"
            />
          </details>
        </>
      ) : null}

      {result.Reload2 ? (
        <>
          <details>
            <summary className="  ">재장전2</summary>
            <img
              className="rounded-md shadow-md w-full h-auto"
              src={`${result.Reload2}`}
              alt="Reload"
            />
          </details>
        </>
      ) : null}

      {result.Ex ? (
        <>
          <details>
            <summary className="  ">EX</summary>
            <img
              className="rounded-md shadow-md w-full h-auto"
              src={`${result.Ex}`}
              alt="Ex"
            />
          </details>
        </>
      ) : null}

      {result.Ex2 ? (
        <>
          <details>
            <summary className="  ">EX2</summary>
            <img
              className="rounded-md shadow-md w-full h-auto"
              src={`${result.Ex2}`}
              alt="Ex2"
            />
          </details>
        </>
      ) : null}

      {result.ExAttack ? (
        <>
          <details>
            <summary className="  ">EX 공격 </summary>
            <img
              className="rounded-md shadow-md w-full h-auto"
              src={`${result.ExAttack}`}
              alt="ExAttack"
            />
          </details>
        </>
      ) : null}

      {result.ExReload ? (
        <>
          <details>
            <summary className="  ">EX 재장전</summary>
            <img
              className="rounded-md shadow-md w-full h-auto"
              src={`${result.ExReload}`}
              alt="ExReload"
            />
          </details>
        </>
      ) : null}

      {result.ExNs ? (
        <>
          <details>
            <summary className="  ">Ex Ns</summary>
            <img
              className="rounded-md shadow-md w-full h-auto"
              src={`${result.ExNs}`}
              alt="ExNs"
            />
          </details>
        </>
      ) : null}

      {result.Ns ? (
        <>
          <details>
            <summary className="  ">Ns</summary>
            <img
              className="rounded-md shadow-md w-full h-auto"
              src={`${result.Ns}`}
              alt="Ns"
            />
          </details>
        </>
      ) : null}

      {result.Object ? (
        <>
          <details>
            <summary className="  ">오브젝트</summary>
            <img
              className="rounded-md shadow-md w-full h-auto"
              src={`${result.Object}`}
              alt="Obj"
            />
          </details>
        </>
      ) : null}

      {result.Win ? (
        <>
          <details>
            <summary className="  ">전투 승리 </summary>
            <img
              className="rounded-md shadow-md w-full h-auto"
              src={`${result.Win}`}
              alt="Win"
            />
          </details>
        </>
      ) : null}
      {result.Win2 ? (
        <>
          <details>
            <summary className="  ">전투 승리2 </summary>
            <img
              className="rounded-md shadow-md w-full h-auto"
              src={`${result.Win2}`}
              alt="Win2"
            />
          </details>
        </>
      ) : null}

      {result.Pick ? (
        <>
          <details>
            <summary className="  ">편성창</summary>
            <img
              className="rounded-md shadow-md w-full h-auto"
              src={`${result.Pick}`}
              alt="Pick"
            />
          </details>
        </>
      ) : null}

      {result.Cafe ? (
        <>
          <details>
            <summary className="  ">카페 </summary>
            <img
              className="rounded-md shadow-md w-full h-auto"
              src={`${result.Cafe}`}
              alt="Cafe"
            />
          </details>
        </>
      ) : null}

      {result.Cafe2Webm ? (
        <>
          <details>
            <summary className="  ">가구</summary>
            <video
              className="rounded-md shadow-md w-full h-auto"
              src={`${result.Cafe2Webm}`}
              alt="Cafe2Webm"
              controls
            />
          </details>
        </>
      ) : result.Cafe2 ? (
        <>
          <details>
            <summary className="  ">가구</summary>
            <img
              className="rounded-md shadow-md w-full h-auto"
              src={`${result.Cafe2}`}
              alt="Cafe2"
            />
          </details>
        </>
      ) : null}

      {result.Cafe3Webm ? (
        <>
          <details>
            <summary className="  ">가구</summary>
            <video
              className="rounded-md shadow-md w-full h-auto"
              src={`${result.CafeWebm}`}
              alt="Cafe2Webm"
              controls
            />
          </details>
        </>
      ) : result.Cafe3 ? (
        <>
          <details>
            <summary className="  ">가구2</summary>
            <img
              className="rounded-md shadow-md w-full h-auto"
              src={`${result.Cafe3}`}
              alt="Cafe3"
            />
          </details>
        </>
      ) : null}

      {result.Event ? (
        <>
          <details>
            <summary className="  ">이벤트</summary>
            <img
              className="rounded-md shadow-md w-full h-auto"
              src={`${result.Event}`}
              alt="Event"
            />
          </details>
        </>
      ) : null}
    </div>
  );
}
