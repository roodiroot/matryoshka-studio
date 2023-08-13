"use client";

import { motion } from "framer-motion";

import { blockUp } from "@/transition-variants";

interface AchievedWorkingProps {
  title: string;
  description: string;
}

const AchievedWorking: React.FC<AchievedWorkingProps> = ({
  title,
  description,
}) => {
  return (
    <motion.div
      initial='offscreen'
      whileInView='onscreen'
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div
        variants={blockUp}
        className='flex flex-col-reverse pl-8 relative before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-6 before:w-px after:bottom-0 after:left-0 after:top-8 after:w-px'
      >
        <dt className='mt-2 text-base text-neutral-600'>{description}</dt>
        <dd className='font-display text-3xl font-semibold text-neutral-950 sm:text-4xl'>
          {title}
        </dd>
      </motion.div>
    </motion.div>
  );
};

export default AchievedWorking;
