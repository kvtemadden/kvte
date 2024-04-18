import React, { useState } from "react";
import clsx from "clsx";
import Link from "next/link";

interface JobCardProps {
  className?: string;
}

export const JobCard: React.FC<JobCardProps> = ({ className }) => {
  const [hoveredJob, setHoveredJob] = useState<string | null>(null);

  const jobs = [
    {
      title: "Keyte Heats",
      company: "Keyte Heats",
      link: "https://heating-xi.vercel.app/",
      description:
        "Keyte Heats is a heating company based in Birmingham. I built their website using TypeScript, Node.js, Next.js and Tailwind.",
      image: "bg-meter bg-cover bg-center",
      color: "to-blue-700/90",
    },
    {
      title: "AdBuilder AI",
      company: "AdBuilder",
      link: "https://adbuilder.io",
      description:
        "AdBuilder is a job ad creation tool that uses AI to write job ads. I worked on both the front and back end of the application, using TypeScript, Node.js, Next.js and Tailwind.",
      image: "bg-ABjob",
      color: "to-[#3292cf]/90",
    },
    {
      title: "AdGrader",
      company: "AdBuilder",
      link: "https://adgrader.io",
      description:
        "AdGrader is a tool that grades job adverts for inclusivity and readability. I worked on both the front and back end of the application, using TypeScript, Node.js, Next.js and Tailwind.",
      image: "bg-ABAG",
      color: "to-[#ff2779]/90",
    },
    {
      title: "What2Buy.me",
      company: "Side Project",
      link: "https://what2buy.me",
      description:
        "What2Buy.me is a web app that helps you decide what to buy for your friends and family. I built the app with a friend using TypeScript, Node.js, Next.js and Tailwind.",
      image: "bg-W2BM",
      color: "to-[#f45a5a]/90",
    },
    {
      title: "Mailer Builder",
      company: "Coburg Banks",
      link: "https://cb-mailer-builder.vercel.app/",
      description:
        "Mailer Builder is a tool that allows users to create and send email campaigns. It's a specific build made for Coburg Banks, not a wide-use tool. I built the app using TypeScript, Node.js, Next.js and Tailwind.",
      image: "bg-CBMB bg-cover bg-center",
      color: "to-[#a9b012]/90",
    },
  ];

  return (
    <div
      className={clsx(
        "flex flex-col md:flex-row flex-wrap gap-4 items-center justify-center",
        className
      )}
    >
      {jobs.map((job) => (
        <Link
          href={job.link}
          target="_blank"
          className={clsx("relative w-80 h-80 border-4", {
            "hovered-job": job.title === hoveredJob,
          })}
          key={job.title}
          onMouseEnter={() => setHoveredJob(job.title)}
          onMouseLeave={() => setHoveredJob(null)}
        >
          <div
            className={clsx(
              "bg-cover top-0 left-0 w-full h-full bg-right",
              job.image
            )}
          ></div>
          <div
            className={clsx(
              "absolute top-0 left-0 w-full h-full bg-gradient-to-t from-slate-900/90 flex justify-center items-center flex-col",
              job.color
            )}
          >
            {job.title === hoveredJob ? (
              <>
                <p className="text-white p-5">{job.description}</p>
              </>
            ) : (
              <>
                <h3 className="text-xl font-bold">{job.title}</h3>
                <h4 className="text-sm uppercase">{job.company}</h4>
              </>
            )}
          </div>
        </Link>
      ))}
    </div>
  );
};
