"use client";

import { useEffect, useState } from "react";
import ClassicContainer from "@/components/classic-container";
import { useWorkStore } from "@/hooks/work-store";
import ProjItemForHome from "./components/proj-item-for-home";
import { Project } from "@/types";

const ProjectListForHomePage = () => {
  const { projectsTest, fetchProjects } = useWorkStore();

  useEffect(() => {
    fetchProjects();
  }, []);

  console.log();

  const projectsTestSort = projectsTest
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);

  return (
    <ClassicContainer className='mt-16'>
      <div className='grid grid-cols-1 gap-8 lg:grid-cols-3'>
        {projectsTestSort?.map((i) => (
          <ProjItemForHome
            key={i?.name}
            name={i?.name}
            year={
              i?.infoProject?.filter((d) => d.title === "Дата")[0]?.description
            }
            teme={i?.teme}
            title={i?.title}
            description={i?.description}
          />
        ))}
      </div>
    </ClassicContainer>
  );
};

export default ProjectListForHomePage;
