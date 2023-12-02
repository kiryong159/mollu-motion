import Card from "./Card";

/* 홈 화면 */
export default function Home() {
  return (
    <div className="w-[420px] bg-gray-300 mx-auto mt-[100px] p-3 space-y-3 ">
      <Card
        thumbSrc="https://i.ibb.co/Lnwrp7j/Aru-Thumb.webp"
        name="아루"
        nameEn="Aru"
      />
      <Card
        thumbSrc="https://i.ibb.co/QjkX1pr/image.webp"
        name="아루(정월)"
        nameEn="Aru_New"
      />
      <Card
        thumbSrc="https://i.ibb.co/qsjggcQ/Eimi-Thumb.webp"
        name="에이미"
        nameEn="Eimi"
      />
      <Card
        thumbSrc="https://i.ibb.co/w6LhJhB/Haruna-Thumb.webp"
        name="하루나"
        nameEn="Haruna"
      />
      <Card
        thumbSrc="https://i.ibb.co/h1SGQj1/Hifumi-Thumb.webp"
        name="히후미"
        nameEn="Hifumi"
      />
    </div>
  );
}
