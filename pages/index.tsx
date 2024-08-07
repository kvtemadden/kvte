import Layout from "@/app/layout";
import { Badges } from "@/components/Badges";
import { JobCard } from "@/components/JobCard";

export default function Home() {
  return (
    <>
      <Layout>
        <div className="flex flex-col text-center relative">
          <h1 className="text-3xl font-bold">Hi, I&rsquo;m Kate Lakey</h1>
          <h2 className="text-2xl text-slate-400">
            I&rsquo;m a Full Stack Developer based in Birmingham, UK.
          </h2>
          <Badges />
          <JobCard className="pt-10" />
        </div>
      </Layout>
    </>
  );
}
