"use client";

import { motion } from "framer-motion";

import { blockUp } from "@/transition-variants";

const ArticleHead = () => {
  return (
    <motion.div
      initial='offscreen'
      whileInView='onscreen'
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.header
        variants={blockUp}
        className='mx-auto flex max-w-5xl flex-col text-center'
      >
        <h1 className='mt-6 font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-6xl'>
          A Short Guide to Component Naming
        </h1>
        <time
          dateTime='2022-12-01'
          className='order-first text-sm text-neutral-950'
        >
          December 1, 2022
        </time>
        <p className='mt-6 text-sm font-semibold text-neutral-950'>
          by Angela Fisher, Front-end Developer
        </p>
      </motion.header>
    </motion.div>
  );
};

export default ArticleHead;
