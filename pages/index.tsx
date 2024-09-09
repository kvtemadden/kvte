import Layout from "@/app/layout";
import { Hero } from "@/components/hero";
import { WorkCards } from "@/components/work-cards";
import { WorkScrollSection } from "@/components/work-scroll-section";

export default function Home() {
  return (
    <>
      <Layout>
        <Hero />
        <WorkCards />
      </Layout>
    </>
  );
}
