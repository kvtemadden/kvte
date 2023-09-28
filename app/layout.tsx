import { League_Spartan } from "next/font/google";
import clsx from "clsx";

import { NavBar } from "../components/NavBar";
import "./globals.css";

const spartan = League_Spartan({ subsets: ["latin"] });

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={clsx("overflow-hidden", spartan.className)}>
        <NavBar />

        {children}
      </body>
    </html>
  );
}
