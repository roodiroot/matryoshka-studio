"use client";

import { motion } from "framer-motion";

import { blockUp } from "@/transition-variants";

const ServicesBlock = () => {
  return (
    <div className='mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto max-w-2xl lg:max-w-none'>
          <motion.div
            initial='offscreen'
            whileInView='onscreen'
            viewport={{ once: true, amount: 0.8 }}
            className='flex items-center gap-x-8'
          >
            <motion.div variants={blockUp}>
              <h2 className='text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left'>
                Мы можем решить любые задачи связанные с развитием бизнеса в
                сети
              </h2>
              <div className='h-px flex-auto bg-neutral-800'></div>
            </motion.div>
          </motion.div>
          <motion.div
            initial='offscreen'
            whileInView='onscreen'
            viewport={{ once: true, amount: 0.8 }}
          >
            <ul className='mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4'>
              <li>
                <motion.div variants={blockUp}>Брендирование</motion.div>
              </li>
              <li>
                <motion.div variants={blockUp}>Брендирование</motion.div>
              </li>
              <li>
                <motion.div variants={blockUp}>Брендирование</motion.div>
              </li>
              <li>
                <motion.div variants={blockUp}>Брендирование</motion.div>
              </li>
              <li>
                <motion.div variants={blockUp}>Брендирование</motion.div>
              </li>
              <li>
                <motion.div variants={blockUp}>Брендирование</motion.div>
              </li>
              <li>
                <motion.div variants={blockUp}>Брендирование</motion.div>
              </li>
              <li>
                <motion.div variants={blockUp}>Брендирование</motion.div>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ServicesBlock;
