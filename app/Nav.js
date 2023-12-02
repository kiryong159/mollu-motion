import Link from "next/link";

export default function Nav() {
  return (
    <div className="flex fixed top-0 w-full bg-blue-50 left-0 right-0 h-[100px]  ">
      <div className="flex mx-auto p-3 items-center justify-center text-[25px]">
        <h1>Mollu-Motion</h1>
      </div>
      <Link href={"/"}>Home</Link>
    </div>
  );
}
