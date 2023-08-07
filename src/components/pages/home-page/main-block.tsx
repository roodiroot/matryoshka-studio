"use client";

import { motion } from "framer-motion";

import ClassicContainer from "@/components/classic-container";
import { blockUp } from "@/transition-variants";

const MainBlock = () => {
  return (
    <ClassicContainer className='mt-24 sm:mt-32 md:mt-56'>
      <motion.div
        initial='offscreen'
        whileInView='onscreen'
        viewport={{ once: true, amount: 0.8 }}
      >
        <motion.div variants={blockUp} className='max-w-3xl'>
          <h1 className='font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl'>
            Отмеченная наградами студия разработчиков из Дании.
          </h1>
          <p className='mt-6 text-xl text-neutral-600'>
            Мы студия разработчиков, работающая на стыке дизайна и технологий.{" "}
          </p>
        </motion.div>
      </motion.div>
    </ClassicContainer>
  );
};

export default MainBlock;
