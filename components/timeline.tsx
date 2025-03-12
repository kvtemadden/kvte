import React from "react";
import "tailwindcss/tailwind.css";

interface TimelinePointProps {
  date: string;
  title: string;
  description: string;
  index: number;
}

const TimelinePoint: React.FC<TimelinePointProps> = ({
  date,
  title,
  description,
  index,
}) => {
  const isEven = index % 2 === 0;

  return (
    <div className="relative flex items-center w-full my-12">
      {/* Left Side (Alternates Between Title & Description) */}
      <div className="w-1/2 px-8 text-right">
        {isEven ? (
          <>
            <time className="block text-sm text-gray-400">{date}</time>
            <h3 className="text-2xl font-semibold text-primary-500">{title}</h3>
          </>
        ) : (
          <p
            className="text-sm cursor-pointer text-gray-300 bg-gray-900 bg-opacity-80 p-6 rounded-lg border border-gray-700 shadow-lg backdrop-blur-xl 
          hover:shadow-primary-500/50 hover:border-primary-500 transition-all duration-300"
          >
            {description}
          </p>
        )}
      </div>

      {/* Timeline Line Connector */}
      <div className="w-6 h-6 bg-primary-500 border-4 border-gray-950 shadow-lg rounded-full absolute left-1/2 transform -translate-x-1/2" />

      {/* Right Side (Alternates Between Description & Title) */}
      <div className="w-1/2 px-8 text-left">
        {!isEven ? (
          <>
            <time className="block text-sm text-gray-400">{date}</time>
            <h3 className="text-2xl font-semibold text-primary-500">{title}</h3>
          </>
        ) : (
          <p
            className="text-sm cursor-pointer text-gray-300 bg-gray-900 bg-opacity-80 p-6 rounded-lg border border-gray-700 shadow-lg backdrop-blur-xl 
          hover:shadow-primary-500/50 hover:border-primary-500 transition-all duration-300"
          >
            {description}
          </p>
        )}
      </div>
    </div>
  );
};

interface TimelineProps {
  points: Omit<TimelinePointProps, "index">[];
}

export const Timeline: React.FC<TimelineProps> = ({ points }) => {
  return (
    <div className="relative flex flex-col items-center min-h-screen py-20 bg-neutral-950 overflow-hidden w-full">
      <h2 className="font-extrabold max-w-7xl pl-4 mx-auto text-xl md:text-5xl  text-neutral-800 dark:text-neutral-200 font-sans">
        Timeline.
      </h2>

      <div className="pt-4">
        {/* Static Timeline Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b via-primary-500 via-10% from-transparent to-transparent opacity-40" />

        {/* Timeline Items */}
        <div className="w-full max-w-4xl">
          {points.map((point, index) => (
            <TimelinePoint key={index} {...point} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};
