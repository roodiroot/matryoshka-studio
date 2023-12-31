"use client";

import { motion } from "framer-motion";

import { blockUp } from "@/transition-variants";
import InteriorContainer from "@/components/interior-container";
import PatternContainer from "@/components/pattern-container";
import NextBlog from "../../about-page/components/next-blog";
import { useWorkStore } from "@/hooks/work-store";

const MoreProjects = () => {
  const { projectsTest, projectSelect } = useWorkStore();
  const arrayOutProjectSelect = projectsTest.filter(
    (p) => p?.id !== projectSelect?.id
  );
  const projectNextRandom = arrayOutProjectSelect
    .sort(() => 0.5 - Math.random())
    .slice(0, 2);

  return (
    <PatternContainer>
      <InteriorContainer>
        <div className='mx-auto max-w-2xl lg:max-w-none'>
          <motion.div
            initial='offscreen'
            whileInView='onscreen'
            viewport={{ once: true, amount: 0.2 }}
            className='max-w-2xl'
          >
            <motion.h2 variants={blockUp}>
              <span className='block font-display tracking-tight [text-wrap:balance] text-2xl font-semibold text-neutral-950'>
                Другие наши работы
              </span>
            </motion.h2>
          </motion.div>
        </div>
      </InteriorContainer>
      <InteriorContainer className='mt-16'>
        <div className='mx-auto max-w-2xl lg:max-w-none'>
          <div className='grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2'>
            {projectNextRandom &&
              projectNextRandom.map((i) => (
                <NextBlog
                  key={i.id}
                  title={i.title}
                  description={i.description}
                  date={
                    i.infoProject.filter((l) => l.title === "Дата")[0]
                      ?.description
                  }
                  name={i?.name}
                  type='work'
                />
              ))}
          </div>
        </div>
      </InteriorContainer>
    </PatternContainer>
  );
};

export default MoreProjects;
