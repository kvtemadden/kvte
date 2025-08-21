import Layout from "@/app/layout";
import { Eyes } from "@/components/eyes";
import { Card, CardContent } from "@/components/ui/card";

const Page = () => {
  return (
    <Layout>
      <div className="h-48 w-full" />
      <main className="flex min-h-screen items-start justify-start w-full px-20">
        <Card className="h-80 w-80 flex items-center justify-center">
          <CardContent className="p-0">
            <Eyes />
          </CardContent>
        </Card>
      </main>
    </Layout>
  );
};

export default Page;
