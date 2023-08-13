'use client';

import { motion } from 'framer-motion';
import { blockUp } from '@/transition-variants';

interface TaskCompanyProps {
  title: string;
  description: string;
}

const TaskCompany: React.FC<TaskCompanyProps> = ({ title, description }) => {
  return (
    <motion.li
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.2 }}
      className="group mt-10 first:mt-0">
      <motion.div variants={blockUp}>
        <div className="pt-10 group-first:pt-0 group-first:before:hidden group-first:after:hidden relative before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-px before:w-6 after:left-8 after:right-0 after:top-0 after:h-px">
          <strong className="font-semibold text-neutral-950">{title}. </strong>
          {description}
        </div>
      </motion.div>
    </motion.li>
  );
};

export default TaskCompany;
