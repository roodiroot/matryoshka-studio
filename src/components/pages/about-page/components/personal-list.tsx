"use client";

import { motion } from "framer-motion";

import { blockUp } from "@/transition-variants";
import PersonalItem from "./personal-item";
import { mangersListType } from "../command-block";

interface PersonalListProps {
  title: string;
  personal: mangersListType[];
}

const PersonalList: React.FC<PersonalListProps> = ({ title, personal }) => {
  return (
    <motion.div
      initial='offscreen'
      whileInView='onscreen'
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div
        variants={blockUp}
        className='relative before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-px before:w-6 after:left-8 after:right-0 after:top-0 after:h-px'
      ></motion.div>
      <div className='grid grid-cols-1 gap-6 pt-12 sm:pt-16 lg:grid-cols-4 xl:gap-8'>
        <motion.div variants={blockUp}>
          <h2 className='font-display text-2xl font-semibold text-neutral-950'>
            {title}
          </h2>
        </motion.div>
        <div className='lg:col-span-3'>
          <ul className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8'>
            {personal.map((i) => (
              <PersonalItem
                key={i.id}
                img={i.img}
                name={i.name}
                jobTitle={i.jobTitle}
              />
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default PersonalList;
