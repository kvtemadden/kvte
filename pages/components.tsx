import Layout from "@/app/layout";
import { Eyes } from "@/components/eyes";
import { Card, CardContent } from "@/components/ui/card";
import type { ComponentType } from "react";
import { CalendarModal } from "@/components/display/calendar-modal";

const components: ComponentType[] = [Eyes, CalendarModal];

const Page = () => {
  return (
    <Layout>
      <div className="h-48 w-full" />
      <main className="flex min-h-screen items-start justify-start w-full px-20">
        {components.map((Comp, idx) => (
          <Card
            key={idx}
            className="h-80 w-80 flex items-center justify-center"
          >
            <CardContent className="p-0">
              <Comp />
            </CardContent>
          </Card>
        ))}
      </main>
    </Layout>
  );
};

export default Page;
