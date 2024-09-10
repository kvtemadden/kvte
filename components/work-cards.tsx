"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "./ui/cards-carousel";

export function WorkCards() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20 bg-neutral-900">
      <h2 className="font-extrabold max-w-7xl pl-4 mx-auto text-xl md:text-5xl  text-neutral-800 dark:text-neutral-200 font-sans">
        Projects.
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const data = [
  {
    category: "Personal Project",
    title: "Kate Talks Travel",
    src: "/ktt.jpeg",
    content: (
      <>
        <p className="max-w-[500px] mx-auto pb-8 opacity-80  font-light">
          I built Kate Talks Travel, a fun travel blog using TypeScript,
          Next.js, and Tailwind CSS. I hooked it up with Sanity.io for easy
          content management and deployed it on Vercel to keep things fast and
          smooth. I wanted a way to document my travels whilst also building a
          community around my adventures. This is the result.
        </p>
        <div className="max-w-[500px] mx-auto rounded-md overflow-hidden flex items-center justify-center text-white">
          <Image
            src="/ktt-preview.png"
            width={300}
            height={200}
            className="h-full w-full object-contain"
            alt="Kate Talks Travel website"
          />
        </div>
      </>
    ),
  },
  {
    category: "Freelance Project",
    title: "Keyte Heats",
    src: "/meter.jpg",
    content: (
      <>
        <p className="max-w-[500px] mx-auto pb-8 opacity-80  font-light">
          Keyte Heats is a heating company based in Birmingham. I built their
          website using TypeScript, Next.js, and Tailwind CSS. I used Framer
          Motion for the animations and Tailwind CSS for the design. The website
          is responsive and adapts to different screen sizes, ensuring a
          seamless user experience on all devices.
        </p>
        <div className="max-w-[500px] mx-auto rounded-md overflow-hidden flex items-center justify-center text-white">
          <Image
            src="/kh-preview.png"
            width={300}
            height={200}
            className="h-full w-full object-contain"
            alt="Keyte Heats website"
          />
        </div>
      </>
    ),
  },
  {
    category: "Personal Project",
    title: "Wedding website.",
    src: "/wedding.jpg",
    content: (
      <>
        <p className="max-w-[500px] mx-auto pb-8 opacity-80  font-light">
          I built a wedding website for my own wedding using TypeScript, Next.js
          and Tailwind. Since adding it to my portfolio, I&apos;ve amended the
          site to remove the personal touch and focus on showcasing the wedding
          itself. The website is responsive and adapts to different screen
          sizes, ensuring a seamless user experience on all devices.
        </p>
        <div className="max-w-[500px] mx-auto rounded-md overflow-hidden flex items-center justify-center text-white">
          <Image
            src="/wed-preview.png"
            width={300}
            height={200}
            className="h-full w-full object-contain"
            alt="Wedding website"
          />
        </div>
      </>
    ),
  },

  {
    category: "Employed Project",
    title: "Mailer Builder",
    src: "/email.jpg",
    content: (
      <>
        <p className="max-w-[500px] mx-auto pb-8 opacity-80  font-light">
          I created Mailer Builder for Coburg Banks as an internal tool.
          It&apos;s a straightforward app that helps build the HTML structure
          for emails. I built it using TypeScript, Next.js, and Tailwind CSS to
          keep things clean and efficient.
        </p>
        <div className="max-w-[500px] mx-auto rounded-md overflow-hidden flex items-center justify-center text-white">
          <Image
            src="/mailer-preview.png"
            width={300}
            height={200}
            className="h-full w-full object-contain"
            alt="Mailer Builder website"
          />
        </div>
      </>
    ),
  },
];
