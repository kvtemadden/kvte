"use client";

import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import Link from "next/link";

export const NavBar = () => {
  return (
    <>
      <header className="fixed top-0 z-50 scale-75 md:scale-100">
        <NavigationMenu.Root className="sticky top-0 z-50">
          <NavigationMenu.List className="flex text-sm py-2 md:py-6 md:px-8 justify-between">
            <div className="flex flex-nowrap gap-2">
              <Link href="/">
                <div className="bg-kate bg-primary-500 h-20 w-20 bg-[length:154px_225px] bg-[position:52%_5%] rounded-full"></div>
              </Link>
              <div className="flex flex-nowrap items-center">
                <div className="h-0 w-0 border-y-8 border-y-transparent border-r-8 border-r-white/80"></div>
                <div className="bg-white/80 text-black h-fit w-fit py-2 px-3 rounded-md">
                  hello world
                </div>
              </div>
            </div>
            <div className="flex flex-nowrap gap-4 pt-6 pr-2"></div>
          </NavigationMenu.List>
        </NavigationMenu.Root>
      </header>
    </>
  );
};
