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
      title: "AdBuilder AI",
      company: "AdBuilder",
      link: "https://adbuilder.ai",
      description:
        "AdBuilder is a job ad creation tool that uses AI to write job ads. I worked on both the front and back end of the application, using TypeScript, Node.js, Next.js and Tailwind.",
      image: "bg-ABjob",
      color: "to-[#3292cf]/90",
    },
    {
      title: "AdGrader",
      company: "AdBuilder",
      link: "https://adbuilder.ai",
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
  ];

  return (
    <div className={clsx("flex flew-row gap-4", className)}>
      {jobs.map((job) => (
        <Link
          href={job.link}
          target="_blank"
          className={clsx("relative w-96 h-96 border-4", {
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
