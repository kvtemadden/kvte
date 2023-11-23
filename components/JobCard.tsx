import clsx from "clsx";

interface JobCardProps {
  className?: string;
}

export const JobCard: React.FC<JobCardProps> = ({ className }) => {
  const jobs = [
    {
      title: "AdBuilder AI",
      company: "AdBuilder",
      link: "https://adbuilder.ai",
      description:
        "AdBuilder is a job ad creation tool that uses AI to write job ads. I worked on both the front and back end of the application, using TypeScript, Node.js, Next.js and Tailwind.",
      image: "bg-ABjob",
    },
    {
      title: "AdGrader",
      company: "AdBuilder",
      link: "https://adbuilder.ai",
      description:
        "AdGrader is a tool that grades job adverts for inclusivity and readability. I worked on both the front and back end of the application, using TypeScript, Node.js, Next.js and Tailwind.",
      image: "bg-ABAG",
    },
  ];
  return (
    <div className={clsx("flex flew-row gap-4", className)}>
      {jobs.map((job) => (
        <div className="relative w-96 h-96 border-4" key={job.title}>
          <div
            className={clsx(
              "bg-cover top-0 left-0 w-full h-full bg-right",
              job.image
            )}
          ></div>
          <div className="absolute top-0 left-0 w-full h-full bg-zinc-900/80 flex justify-center items-center">
            <div className="flex flex-col">
              <h3 className="text-xl font-bold">{job.title}</h3>
              <h4 className="text-sm uppercase">{job.company}</h4>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
