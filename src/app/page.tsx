import Image from "next/image";
import { data } from "./utils/data";
import Link from "next/link";

export default function Home() {
  const models = data;
  return (
    <main className="flex min-h-screen flex-col items-center">
      <h1 className="text-4xl mb-5 font-semibold">Explore</h1>
      <div className="grid grid-cols-2 w-full max-w-6xl gap-8">
        {models.map((model) => {
          return (
            <div key={model.title} className="border border-black">
              <Link
                className="text-blue-500 mt-4"
                href={`/${model.owner}/${model.title}`}
              >
               <div className="pt-[66%] relative bg-red-100">
                <img src={model.display_image} alt="" className="absolute top-0 left-0 w-full h-full object-center object-cover"/>
               </div>
               <h1 className="text-2xl py-2 px-4 text-black"><span className="text-gray-600">{model.owner}/</span> <span>{model.title}</span></h1>
              </Link>
            </div>
          );
        })}
      </div>
    </main>
  );
}
