import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export const SocialTag = () => {
  const socials = [
    {
      href: "https://github.com/kvtemadden",
      icon: <Github className="w-5 h-5 text-white hover:text-primary-400" />,
      title: "Github",
    },
    {
      href: "https://www.linkedin.com/in/kate-madden-703612125/",
      icon: <Linkedin className="w-5 h-5 text-white hover:text-primary-400" />,
      title: "LinkedIn",
    },
    {
      href: "https://twitter.com/k3_m5_",
      icon: <Twitter className="w-5 h-5 text-white hover:text-primary-400" />,
      title: "Twitter",
    },
  ];

  return (
    <div className="bg-zinc-700 rounded-r fixed left-0 top-40 w-fit p-2 flex flex-col gap-2">
      {socials.map(({ href, icon, title }) => (
        <Link href={href} key={title}>
          {icon}
        </Link>
      ))}
    </div>
  );
};
