import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { Badges } from "./badges-v2";

export function Hero() {
  return (
    <BackgroundBeamsWithCollision>
      <section className="flex flex-col gap-2 items-center justify-center">
        <h2 className="relative z-20 text-4xl lg:text-7xl font-extrabold text-center text-black dark:text-white font-sans tracking-tight">
          Hi, I&rsquo;m {""}
          <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
            <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-primary-800 via-primary-500 to-primary py-4">
              <span className="">Kate Lakey.</span>
            </div>
          </div>
        </h2>
        <Badges />
      </section>
    </BackgroundBeamsWithCollision>
  );
}
