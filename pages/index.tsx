import Layout from "@/app/layout";
import { Hero } from "@/components/hero";
import timelineData from "@/components/lib/constants";
import { Timeline } from "@/components/timeline";
import { WorkCards } from "@/components/work-cards";

export default function Home() {
  return (
    <>
      <Layout>
        <Hero />
        <WorkCards />
        <Timeline points={timelineData} />
      </Layout>
    </>
  );
}
