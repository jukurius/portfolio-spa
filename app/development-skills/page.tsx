import React from "react";
import Index from "@/components/skills-page";
import { getAllProgrammingSkills, getAllSkillbars } from "@/libs/api";

const WorkPage = async () => {
  const pageData = await getAllProgrammingSkills();
  const skillbars = await getAllSkillbars();
  const combinedData = { ...pageData, ...skillbars };
  return (
    <main>
      <Index pageData={combinedData} />
    </main>
  );
};

export default WorkPage;
