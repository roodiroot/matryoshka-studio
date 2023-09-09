"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";

import { blockUp } from "@/transition-variants";
import ClassicContainer from "@/components/classic-container";
import PortfolioItem from "@/components/pages/work/components/portfolio-item";
import { useWorkStore } from "@/hooks/work-store";

const PortfolioBlock = () => {
  const { projectsTest, fetchProjects } = useWorkStore();

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <ClassicContainer className='mt-40'>
      <div className='mx-auto max-w-2xl lg:max-w-none'>
        <motion.div
          initial='offscreen'
          whileInView='onscreen'
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h2
            variants={blockUp}
            className='font-display text-2xl font-semibold text-neutral-950'
          >
            Наши последние работы
          </motion.h2>
        </motion.div>
        <div className='mt-10 space-y-20 sm:space-y-24 lg:space-y-32'>
          {projectsTest?.map((i) => (
            <PortfolioItem
              key={i.name}
              title={i.title}
              description={i.description}
              teme={i.teme}
              name={i.name}
              year={
                i?.infoProject?.filter((d) => d.title === "Дата")[0]
                  ?.description
              }
              company={
                i?.infoProject?.filter((d) => d.title === "Клиент")[0]
                  ?.description
              }
              stack={i.stack}
              review={i?.review}
            />
          ))}
        </div>
      </div>
    </ClassicContainer>
  );
};

export default PortfolioBlock;
