"use client";

import Image from "next/image";
import React from "react";

import { StickyScroll } from "./ui/sticky-scroll-reveal";

const content = [
  {
    title: "Kate Talks Travel",
    description:
      "I built Kate Talks Travel, a fun travel blog using TypeScript, Next.js, and Tailwind CSS. I hooked it up with Sanity.io for easy content management and deployed it on Vercel to keep things fast and smooth. I wanted a way to document my travels whilst also building a community around my adventures. This is the result.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/ktt.png"
          width={300}
          height={200}
          className="h-full w-full object-contain"
          alt="Kate Talks Travel website"
        />
      </div>
    ),
  },
  {
    title: "Keyte Heats",
    description:
      "Keyte Heats is a heating company based in Birmingham. I built their website using TypeScript, Next.js, and Tailwind CSS. I used Framer Motion for the animations and Tailwind CSS for the design. The website is responsive and adapts to different screen sizes, ensuring a seamless user experience on all devices.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="/keyte-heats.png"
          width={300}
          height={200}
          className="h-full w-full object-contain"
          alt="Keyte Heats website"
        />
      </div>
    ),
  },
  {
    title: "CB Mailer Builder",
    description:
      "I created Mailer Builder for Coburg Banks as an internal tool. It's a straightforward app that helps build the HTML structure for emails. I built it using TypeScript, Next.js, and Tailwind CSS to keep things clean and efficient.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="/cbm.png"
          width={300}
          height={200}
          className="h-full w-full object-contain"
          alt="CB Mailer Builder website"
        />
      </div>
    ),
  },
  {
    title: "Wedding Website",
    description:
      "I built a wedding website for my own wedding using TypeScript, Next.js and Tailwind. Since adding it to my portfolio, I've amended the site to remove the personal touch and focus on showcasing the wedding itself. The website is responsive and adapts to different screen sizes, ensuring a seamless user experience on all devices.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="/wedding.png"
          width={300}
          height={200}
          className="h-full w-full object-contain"
          alt="Wedding website"
        />
      </div>
    ),
  },
];
export function WorkScrollSection() {
  return (
    <div className="w-full min-h-screen">
      <StickyScroll content={content} />
    </div>
  );
}
