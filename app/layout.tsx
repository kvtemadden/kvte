import { League_Spartan } from "next/font/google";
import clsx from "clsx";

import { NavBar } from "../components/NavBar";
import "./globals.css";

const spartan = League_Spartan({ subsets: ["latin"] });

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavBar />
      <main className="grid min-h-screen gap-2 p-24 md:grid-cols-[1fr,70%,1fr]">
        <div className="flex flex-col text-center col-start-2 items-center">
          {children}
        </div>
      </main>
    </>
  );
}
