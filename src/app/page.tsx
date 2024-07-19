import Image from "next/image";
import { data } from "./utils/data";
import Link from "next/link";

export default function Home() {
  const models = data;
  return (
    <main className="flex min-h-screen flex-col items-center">
      <h1>Explore</h1>
      <ul className="mt-3">
        {models.map((model) => {
          return (
            <li key={model.title}>
              <a
                className="text-blue-500 mt-4"
                href={`/${model.owner}/${model.title}`}
              >
                {model.title || "hi"}
              </a>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
