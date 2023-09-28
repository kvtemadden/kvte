import Layout from "@/app/layout";
import { NavBar } from "../components/NavBar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Layout>
        <main className="flex min-h-screen flex-col items-center gap-2 p-24">
          <div className="grid text-center gap-2">
            <h1 className="text-3xl font-bold">Hi, I&rsquo;m Kate Madden</h1>
            <h2 className="text-2xl text-slate-400">
              I&rsquo;m a Full Stack Developer based in Birmingham, UK.
            </h2>
          </div>
        </main>
      </Layout>
    </>
  );
}
