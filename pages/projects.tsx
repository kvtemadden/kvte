import { NavBar } from "../components/NavBar";

export default function Home() {
  return (
    <>
      <NavBar />
      <main className="flex min-h-screen flex-col items-center gap-2 p-24">
        <div className="grid text-center gap-2">
          <h1 className="text-3xl">Hi, I&rsquo;m Kate Madden</h1>
          <h2 className="text-2xl text-slate-400">
            I&rsquo;m a software engineer based in Birmingham, UK.
          </h2>
        </div>
      </main>
    </>
  );
}
