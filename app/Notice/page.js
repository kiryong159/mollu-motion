export default function Notice() {
  return (
    <div className="flex flex-col mt-[70px] mb-[100px] text-[35px] font-bold mx-auto bg-gray-700 text-white w-[315px] 3sm:w-[370px] 2sm:w-[420px] md:w-[500px] space-y-5">
      <span className="mt-3 text-center">알림말</span>

      <div className="p-5 text-[18px] space-y-7 md:text-[25px] bg-gray-500 rounded-md ">
        <h1>최근 업데이트 : 24.04.03</h1>
      </div>
      <div className="p-5 text-[18px] space-y-7 md:text-[25px] bg-gray-500 rounded-md ">
        <p className="flex w-full mx-auto text-[25px] md:text-[35px] justify-center ">
          없는캐릭 (16개)
        </p>
        <div className="space-y-3 ">
          <p>마시로 , 수사키 , 라로코</p>
          <p>수히나 , 수오리 , 미쿠</p>
          <p>응타하 , 칸나 , 하나에(클스)</p>
          <p>사쿠라코 ,카호 , 코토리(응원)</p>
          <p>수모리, 메루 , 모미지 </p>
          <p>하루나(체) </p>
        </div>
      </div>

      <div className="p-5 space-y-3 text-[15px] md:text-[25px] bg-gray-500 rounded-md leading-6 md:leading-10 ">
        <p className="text-red-300">Q : 데이터 얼마정도 사용됨?</p>
        <p>A : 10 ~ 30Mb 사이로 사용될듯?</p>

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
    </div>
  );
}
