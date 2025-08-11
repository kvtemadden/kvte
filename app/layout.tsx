import { League_Spartan } from "next/font/google";

import { SocialTag } from "@/components/social-tag";
import { NavBar } from "@/components/nav-bar";
import "./globals.css";
import { useEffect, useLayoutEffect } from "react";

const spartan = League_Spartan({ subsets: ["latin"] });

export default function Layout({ children }: { children: React.ReactNode }) {
  useLayoutEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);
  return (
    <>
      <NavBar />
      <SocialTag />

      <main className="min-h-screen gap-2">
        <div className="flex flex-col text-center items-center">{children}</div>
      </main>
    </>
  );
}
