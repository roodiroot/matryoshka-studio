"use client";

import ClassicContainer from "@/components/classic-container";
import { useWorkStore } from "@/hooks/work-store";
import ProjItemForHome from "./components/proj-item-for-home";

const ProjectListForHomePage = () => {
  const { projects } = useWorkStore();
  return (
    <ClassicContainer className='mt-16'>
      <div className='grid grid-cols-1 gap-8 lg:grid-cols-3'>
        {projects.slice(-3).map((i) => (
          <ProjItemForHome
            key={i?.name}
            name={i?.name}
            year={i?.info?.filter((d) => d.title === "Дата")[0]?.name}
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
