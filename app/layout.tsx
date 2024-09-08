import { League_Spartan } from "next/font/google";

import { SocialTag } from "@/components/social-tag";
import { NavBar } from "@/components/nav-bar";
import "./globals.css";

const spartan = League_Spartan({ subsets: ["latin"] });

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavBar />
      <SocialTag />

      <main className="grid min-h-screen gap-2 p-10 md:grid-cols-[1fr,80%%,1fr]">
        <div className="flex flex-col text-center items-center">{children}</div>
      </main>
    </>
  );
}
