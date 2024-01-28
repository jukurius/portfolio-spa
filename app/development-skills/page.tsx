import React from "react";
import Index from "@/containers/skills-page";
import { getAllProgrammingSkills } from "@/libs/api";

const WorkPage = async () => {
  const pageData = await getAllProgrammingSkills();
  return (
    <main>
      <Index pageData={pageData} />
    </main>
  );
};

export default WorkPage;
