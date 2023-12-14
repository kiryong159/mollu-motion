export default function Notice() {
  return (
    <div className="flex flex-col mt-[70px] mb-[100px] text-[35px] font-bold mx-auto bg-gray-700 text-white w-[315px] 3sm:w-[370px] 2sm:w-[420px] md:w-[500px] space-y-5">
      <span className="mt-3 text-center">알림말</span>

      <div className="p-5 text-[18px] space-y-7 md:text-[25px] bg-gray-500 rounded-md ">
        <p className="flex w-full mx-auto text-[25px] md:text-[35px] justify-center ">
          없는캐릭 (20개)
        </p>
        <div className="space-y-3 ">
          <p>히나 , 마시로 , 유즈</p>
          <p>미노리 , 수히나 , 수오리</p>
          <p>라로코 , 사사야 , 미쿠</p>
          <p>온도카 , 미사키 ,히요리</p>
          <p>응타하 ,노아 ,하나에(클스)</p>
          <p>칸나 , 사쿠라코 ,코유키 </p>
          <p>하루카(새해) , 카호</p>
        </div>
      </div>

      <div className="p-5 space-y-3 text-[15px] md:text-[25px] bg-gray-500 rounded-md leading-6 md:leading-10 ">
        <p className="text-red-300">Q : 데이터 얼마정도 사용됨?</p>
        <p>
          A : 카페 가구 까지 있는애들은 18Mb 근처 없는애들은 10Mb 근처라고
          생각하면될듯?
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
        <p className="text-red-300">Q : 카페, 가구 모션 없는 애들은 뭐임?</p>
        <p>
          A : 아직 애들이 카페 방문을 안한 애들이 많음.. 거기에 가구없는거도
          있슴..
        </p>
        <p className="text-red-300">Q : 재생속도가 이상함 </p>
        <p>
          A : 온나츠 같이 가구모션 존나 긴애들은 거의2배속 수준으로 촬영 했음.
        </p>
        <p>
          느린 경우는 만들때 속도 조절을 잘못했거나 모션같은거 좀 보라고 느리게
          한경우도 있음(와카모승리모션)
        </p>
        <p className="text-red-300">Q : 없는캐릭 빌리면 안됨? </p>
        <p>
          A : 일단 스트라이커는 빌리면 리더 지정 이안되서 시작모션을 못찍음
          스페셜은 테스트로 하루카(새해) 칸나 찍어봤음. 하지만 카페모션을
          못찍음..
        </p>
      </div>

      <div className="p-5 space-y-3 text-[15px] md:text-[25px] bg-gray-500 rounded-md leading-6 md:leading-10 ">
        <p className="text-red-300">12.14 수정 내용</p>
        <ul className="px-3">
          <li>아루,하스미,츠루기,수시로,세나,운마리 카페 모션 추가 </li>
          <li>수시로 운마리 세나 가구 모션 추가</li>
          <li>코하루 추가</li>
          <li>오브젝트 넘는모션 누락 수정</li>
        </ul>
      </div>
    </div>
  );
}
