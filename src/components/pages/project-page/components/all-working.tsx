"use client";

import { motion } from "framer-motion";

import { blockUp } from "@/transition-variants";

interface AllWorkingProps {
  work_list: string[];
}

const AllWorking: React.FC<AllWorkingProps> = ({ work_list }) => {
  return (
    <motion.div
      initial='offscreen'
      whileInView='onscreen'
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div
        variants={blockUp}
        className='[&>h2]:text-2xl [&>p]:my-6 [&>h2]:font-bold [&>p]:text-lg [&>h2]:text-neutral-950 [&>h2]:mt-16 '
      >
        <h2>Выполненные работы</h2>
        <ul className='my-6 flex flex-wrap gap-4'>
          {work_list?.map((i) => (
            <li
              key={i}
              className='rounded-full bg-neutral-100 px-4 py-1.5 text-base text-neutral-600'
            >
              {i}
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
};

export default AllWorking;
