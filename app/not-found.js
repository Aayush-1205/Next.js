import Link from "next/link";

export default function NotFound() {

  return (
    <div className="bg-black text-white w-full h-[100vh] flex flex-col justify-center gap-5 items-center">
      <h2 className="text-6xl font-semibold">Not Found</h2>
      <Link href="/" className="border border-white font-medium px-5 py-1 rounded-full hover:bg-white hover:text-black">Return Home</Link>
    </div>
  );
}
