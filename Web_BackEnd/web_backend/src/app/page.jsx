import Image from "next/image";
import Products from "./components/Products";

export default function Home() {

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <h1 className="text-3xl font-bold p-3 border-2 border-gray-700  rounded-xl bg-black text-white m-auto "> BACK END </h1>
        <Products/>
    </div>
  );
}
