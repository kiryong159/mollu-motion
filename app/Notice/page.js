export default function Notice() {
  return (
    <div className="flex flex-col mt-[70px] mb-[100px] text-[35px] font-bold mx-auto bg-gray-700 text-white w-[315px] 3sm:w-[370px] 2sm:w-[420px] md:w-[500px] space-y-5">
      <span className="mt-3 text-center">알림말</span>

      <div className="p-5 text-[18px] space-y-7 md:text-[25px] bg-gray-500 rounded-md ">
        <p className="flex w-full mx-auto text-[25px] md:text-[35px] justify-center ">
          없는캐릭 (17개)
        </p>
        <div className="space-y-3 ">
          <p>마시로 , 수사키</p>
          <p>미노리 , 수히나 , 수오리</p>
          <p>라로코 , 미쿠</p>
          <p>온도카 , 미사키 ,히요리</p>
          <p>응타하 , 노아 , 하나에(클스)</p>
          <p>칸나 , 사쿠라코 </p>
          <p>하루카(새해) , 카호</p>
        </div>
      </div>

      <div className="p-5 space-y-3 text-[15px] md:text-[25px] bg-gray-500 rounded-md leading-6 md:leading-10 ">
        <p className="text-red-300">Q : 데이터 얼마정도 사용됨?</p>
        <p>
          A : 카페 가구 까지 있는애들은 18Mb 근처 없는애들은 10Mb 근처라고
          생각하면될듯? (접힌거 안펼쳐도 사진은 전부 다운받음)
        </p>

        <p className="text-red-300">Q : 왜케 화질구지 임? </p>
        <p>
          A : 용량 문제로 사진 을 최소한 의 크기로 만들어서 저장 한걸 웹에서
          늘렸기 때문에 화질구지임
        </p>
        <p className="text-red-300">Q : 왜케 끊김 ? </p>
        <p>
          A : 이것도 용량문제로 크기를 너무줄이면 안보일까봐 프레임을 줄인 경우
          임
        </p>

        <p className="text-red-300">Q : 없는캐릭 빌리면 안됨? </p>
        <p>A : 빌릴수 있으면 일부라도 찍어서 올리는중</p>
        <p>스트라이커 는 승리,시작,카페모션 촬영불가</p>
        <p>스페셜은 카페모션 촬영불가.</p>
      </div>

      <div className="p-5 space-y-3 text-[15px] md:text-[25px] bg-gray-500 rounded-md leading-6 md:leading-10 ">
        <details>
          <summary>
            <span className="text-red-300 hover:cursor-pointer hover:text-red-400 transition-all">
              01.23 수정 내용
            </span>
          </summary>
          <ul className="px-4">
            <li>수로코 기본 모션 추가</li>
          </ul>
        </details>

        <details>
          <summary>
            <span className="text-red-300 hover:cursor-pointer hover:text-red-400 transition-all">
              12.27 수정 내용
            </span>
          </summary>
          <ul className="px-4">
            <li>카페,가구 Webp(gif) 에서 동영상 으로 교체 진행중 </li>
            <li>유즈 기본 모션 추가</li>
          </ul>
        </details>

        <details>
          <summary>
            <span className="text-red-300 hover:cursor-pointer hover:text-red-400 transition-all">
              12.26 수정 내용
            </span>
          </summary>
          <ul className="px-4">
            <li>이오리,수즈사,아스나,온리노,수미유 카페 모션 추가 </li>
            <li>라로코,수즈사,유즈,온리노,수미유 가구 모션 추가</li>
            <li>수야코,수사키,수미유,코유키,히나 기본 모션 추가</li>
          </ul>
        </details>

        <details>
          <summary>
            <span className="text-red-300 hover:cursor-pointer hover:text-red-400 transition-all">
              12.24 수정 내용
            </span>
          </summary>
          <ul className="px-4">
            <li>시로코 카페 모션 추가 </li>
            <li>시로코,준코,나츠 가구 모션 추가</li>
          </ul>
        </details>

        <details>
          <summary>
            <span className="text-red-300 hover:cursor-pointer hover:text-red-400 transition-all">
              12.23 수정 내용
            </span>
          </summary>
          <ul className="px-4">
            <li>후부키,스미레 카페 모션 추가 </li>
            <li>후부키 가구 모션 추가</li>
            <li>클나에,미사키,노아,수히나,히요리 기본 모션 일부 추가</li>
          </ul>
        </details>

        <details>
          <summary>
            <span className="text-red-300 hover:cursor-pointer hover:text-red-400 transition-all">
              12.22 수정 내용
            </span>
          </summary>
          <ul className="px-4">
            <li>후우카,슌(어린이),바카네,시구레 카페 모션 추가 </li>
            <li>미사키,토모에,미노리,바카네,시구레 가구 모션 추가</li>
            <li>
              히나,사사야,미노리,수오리,온도카,응타하,코유키,라로코 기본 모션
              일부 추가
            </li>
          </ul>
        </details>

        <details className="1주일묶음">
          <summary>
            <span className="text-red-300 hover:cursor-pointer hover:text-red-400 transition-all">
              1주일치
            </span>
          </summary>
          <div className="px-5">
            <details>
              <summary>
                <span className="text-red-300 hover:cursor-pointer hover:text-red-400 transition-all">
                  12.20 수정 내용
                </span>
              </summary>
              <ul className="px-4">
                <li>카에데 카페 모션 추가 </li>
                <li>카에데,노노미,세리카 가구 모션 추가</li>
                <li>스크롤이 너무 긴거같아 접는기능 넣어봤습니다.</li>
              </ul>
            </details>

            <details>
              <summary>
                <span className="text-red-300 hover:cursor-pointer hover:text-red-400 transition-all">
                  12.19 수정 내용
                </span>
              </summary>
              <ul className="px-4">
                <li>와카모,하나코,아이리,수즈나,사키, 카페 모션 추가 </li>
                <li>와카모,아이리,수즈나,사키 가구 모션 추가</li>
                <li>모바일 세줄보기 버튼 추가</li>
              </ul>
            </details>

            <details>
              <summary>
                <span className="text-red-300 hover:cursor-pointer hover:text-red-400 transition-all">
                  12.18 수정 내용
                </span>
              </summary>
              <ul className="px-4">
                <li>아즈사,히비키,사야 카페 모션 추가 </li>
                <li>수즈코,온도카 가구 모션 추가</li>
              </ul>
            </details>

            <details>
              <summary>
                <span className="text-red-300 hover:cursor-pointer hover:text-red-400 transition-all">
                  12.17 수정 내용
                </span>
              </summary>
              <ul className="px-4">
                <li>히마리,카린,메유즈,코코나 카페 모션 추가 </li>
                <li>히마리,코유키,메유즈,코코나,노아 가구 모션 추가</li>
              </ul>
            </details>
            <details>
              <summary>
                <span className="text-red-300 hover:cursor-pointer hover:text-red-400 transition-all">
                  12.16 수정 내용
                </span>
              </summary>
              <ul className="px-4">
                <li>수카모,미모리 카페 모션 추가 </li>
                <li>카호,수카모,미모리 가구 모션 추가</li>
              </ul>
            </details>

            <details>
              <summary>
                <span className="text-red-300 hover:cursor-pointer  hover:text-red-400 transition-all">
                  12.15 수정 내용
                </span>
              </summary>
              <ul className="px-4">
                <li>루미,시즈코,미유,모에 카페 모션 추가 </li>
                <li>루미,시즈코,미유,모에,하나에(크리스마스) 가구 모션 추가</li>
              </ul>
            </details>

            <details>
              <summary>
                <span className="text-red-300 hover:cursor-pointer  hover:text-red-400 transition-all">
                  12.14 수정 내용
                </span>
              </summary>
              <ul className="px-4">
                <li>아루,하스미,츠루기,수시로,세나,운마리 카페 모션 추가 </li>
                <li>수시로 운마리 세나 가구 모션 추가</li>
                <li>코하루 추가</li>
                <li>오브젝트 넘는모션 누락 수정</li>
              </ul>
            </details>
          </div>
        </details>
      </div>
    </div>
  );
}
