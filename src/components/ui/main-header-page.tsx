"use client";

import { motion } from "framer-motion";

import { blockUp } from "@/transition-variants";
import ClassicContainer from "@/components/classic-container";

interface MainHeaderPageProps {
  overhead: string;
  head: string;
  children: React.ReactNode;
}
const MainHeaderPage: React.FC<MainHeaderPageProps> = ({
  overhead,
  head,
  children,
}) => {
  return (
    <ClassicContainer className='mt-24 sm:mt-32 md:mt-56'>
      <motion.div
        initial='offscreen'
        whileInView='onscreen'
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div variants={blockUp}>
          <h1>
            <span className='block font-display text-base font-semibold text-neutral-950'>
              {overhead}
            </span>
            <span className='sr-only'>-</span>
            <span className='mt-6 block max-w-5xl font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-6xl'>
              {head}
            </span>
          </h1>
          <div className='mt-6 max-w-3xl text-xl text-neutral-600'>
            {children}
          </div>
        </motion.div>
      </motion.div>
    </ClassicContainer>
  );
};

export default MainHeaderPage;
