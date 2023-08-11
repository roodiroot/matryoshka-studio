"use client";

import { motion } from "framer-motion";

import { blockUp } from "@/transition-variants";
import BlackContainer from "@/components/black-container";
import InteriorContainer from "@/components/interior-container";

const cultureList = [
  { title: "Доверие" },
  { title: "Целеустремленность" },
  { title: "Работа на результат" },
];

const CultureBlock = () => {
  return (
    <BlackContainer className='mt-24 sm:mt-32'>
      <InteriorContainer>
        <motion.div
          initial='offscreen'
          whileInView='onscreen'
          viewport={{ once: true, amount: 0.2 }}
          className='mx-auto max-w-2xl lg:max-w-none'
        >
          <motion.div variants={blockUp} className='max-w-2xl'>
            <h2>
              <span className='mb-6 block font-display text-base font-semibold text-white'>
                Наша культура
              </span>
              <span className='sr-only'>-</span>
              <span className='block font-display tracking-tight [text-wrap:balance] text-4xl font-medium sm:text-5xl text-white'>
                Сбалансируйте свою страсть со страстью к жизни.
              </span>
            </h2>
            <div className='mt-6 text-xl text-neutral-300'>
              <p>Мы группа единомышленников, разделяющих общие ценности.</p>
            </div>
          </motion.div>
        </motion.div>
      </InteriorContainer>
      <InteriorContainer className='mt-16'>
        <div className='mx-auto max-w-2xl lg:max-w-none'>
          <ul className='grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3'>
            {cultureList?.map((i) => (
              <motion.li
                key={i.title}
                initial='offscreen'
                whileInView='onscreen'
                viewport={{ once: true, amount: 0.2 }}
                className='text-base text-neutral-300 before:bg-white after:bg-white/10'
              >
                <motion.div variants={blockUp}>
                  <div className='pl-8 relative before:absolute after:absolute before:bg-white after:bg-white/10 before:left-0 before:top-0 before:h-6 before:w-px after:bottom-0 after:left-0 after:top-8 after:w-px'>
                    <strong className='font-semibold text-white'>
                      {i.title}.{" "}
                    </strong>
                    Our team has been with us since the beginning because none
                    of them are allowed to have LinkedIn profiles.
                  </div>
                </motion.div>
              </motion.li>
            ))}
          </ul>
        </div>
      </InteriorContainer>
    </BlackContainer>
  );
};

export default CultureBlock;
