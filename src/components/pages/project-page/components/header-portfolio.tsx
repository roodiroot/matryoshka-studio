"use client";

import { motion } from "framer-motion";

import { blockUp } from "@/transition-variants";

interface HeaderPortfolioProps {
  overTitle: string;
  title: string;
  children?: React.ReactNode;
}
const HeaderPortfolio: React.FC<HeaderPortfolioProps> = ({
  overTitle,
  title,
  children,
}) => {
  return (
    <motion.div
      initial='offscreen'
      whileInView='onscreen'
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.h1 variants={blockUp}>
        <span className='block font-display text-base font-semibold text-neutral-950'>
          {overTitle}
        </span>
        <span className='sr-only'> - </span>
        <span className='mt-6 block max-w-5xl font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-6xl mx-auto'>
          {title}
        </span>
      </motion.h1>
      <motion.div
        variants={blockUp}
        className='mt-6 max-w-3xl text-xl text-neutral-600 mx-auto'
      >
        <p>{children}</p>
      </motion.div>
    </motion.div>
  );
};

export default HeaderPortfolio;
