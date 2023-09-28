import Layout from "@/app/layout";
import { NavBar } from "../components/NavBar";
import Image from "next/image";
import { Duck } from "@/components/Duck";

export default function Home() {
  return (
    <>
      <Layout>
        <main className="grid min-h-screen gap-2 p-24 grid-cols-[1fr,70%,1fr]">
          <div className="flex flex-col text-center col-start-2">
            <h1 className="text-3xl font-bold">Hi, I&rsquo;m Kate Madden</h1>
            <h2 className="text-2xl text-slate-400">
              I&rsquo;m a Full Stack Developer based in Birmingham, UK.
            </h2>
          </div>
          <Duck width={450} height={450} className="rotate-6" />
        </main>
      </Layout>
    </>
  );
}
