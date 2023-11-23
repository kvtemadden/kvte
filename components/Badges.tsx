import {
  BiLogoCss3,
  BiLogoHtml5,
  BiLogoJavascript,
  BiLogoNodejs,
  BiLogoReact,
  BiLogoTailwindCss,
  BiLogoTypescript,
} from "react-icons/bi";
import { Transition } from "@headlessui/react";
import { useState } from "react";
import clsx from "clsx";

export const Badges: React.FC = () => {
  const [showBadges, setShowBadges] = useState(false);

  setTimeout(() => {
    setShowBadges(true);
  }, 2000);

  const badges = [
    {
      badge: <BiLogoNodejs className="w-8 h-8" title="Nodejs" />,
      title: "Nodejs",
      delay: "delay-[0ms]",
    },
    {
      badge: <BiLogoTypescript className="w-8 h-8" title="Typescript" />,
      title: "Typescript",
      delay: "delay-[500ms]",
    },
    {
      badge: <BiLogoJavascript className="w-8 h-8" title="Javascript" />,
      title: "Javascript",
      delay: "delay-[1000ms]",
    },
    {
      badge: <BiLogoReact className="w-8 h-8" title="React" />,
      title: "React",
      delay: "delay-[1500ms]",
    },
    {
      badge: <BiLogoTailwindCss className="w-8 h-8" title="Tailwind" />,
      title: "Tailwind",
      delay: "delay-[2000ms]",
    },
    {
      badge: <BiLogoHtml5 className="w-8 h-8" title="HTML5" />,
      title: "HTML5",
      delay: "delay-[2500ms]",
    },
    {
      badge: <BiLogoCss3 className="w-8 h-8" title="CSS3" />,
      title: "CSS3",
      delay: "delay-[3000ms]",
    },
  ];

  return (
    <>
      <Transition
        className="flex flex-row justify-center py-2 gap-2 transition-all duration-1000 ease-in-out transform"
        show={showBadges}
      >
        {badges.map((badge, index) => (
          <Transition.Child
            key={index}
            enter={clsx(
              "transition duration-1000 ease-in-out transform",
              badge.delay
            )}
            enterFrom="-translate-y-4 opacity-0"
            enterTo="translate-y-0 opacity-100"
            leave="transition duration-1000 ease-in-out transform"
            leaveFrom="translate-y-0 opacity-100"
            leaveTo="-translate-y-4 opacity-0"
          >
            {badge.badge}
          </Transition.Child>
        ))}
      </Transition>
    </>
  );
};
