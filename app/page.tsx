import Index from "@/components/home-page";
import { getAllProgrammingSkills } from "@/libs/api";

export default async function Home() {
  const pageData = await getAllProgrammingSkills();
  return (
    <main>
      <Index pageData={pageData} />
    </main>
  );
}
