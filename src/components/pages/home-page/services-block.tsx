"use client";

import { motion } from "framer-motion";

import { blockUp } from "@/transition-variants";
import BlackContainer from "@/components/black-container";
import InteriorContainer from "@/components/interior-container";

const ServicesBlock = () => {
  return (
    <BlackContainer className='mt-24 sm:mt-32'>
      <InteriorContainer>
        <div className='mx-auto max-w-2xl lg:max-w-none'>
          <motion.div
            initial='offscreen'
            whileInView='onscreen'
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div
              variants={blockUp}
              className='flex items-center gap-x-8'
            >
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
            viewport={{ once: true, amount: 0.2 }}
          >
            <ul className='mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4'>
              <li>
                <motion.div variants={blockUp} className='text-white uppercase'>
                  Разработка сайтов
                </motion.div>
              </li>
              <li>
                <motion.div variants={blockUp} className='text-white uppercase'>
                  Брендирование
                </motion.div>
              </li>
              <li>
                <motion.div variants={blockUp} className='text-white uppercase'>
                  ДИЗАЙН САЙТОВ И ПРИЛОЖЕНИЙ
                </motion.div>
              </li>
              <li>
                <motion.div variants={blockUp} className='text-white uppercase'>
                  АНАЛИТИКА И АУДИТ
                </motion.div>
              </li>
              <li>
                <motion.div variants={blockUp} className='text-white uppercase'>
                  ИНТЕРНЕТ-МАРКЕТИНГ
                </motion.div>
              </li>
              <li>
                <motion.div variants={blockUp} className='text-white uppercase'>
                  ПОДДЕРЖКА И РАЗВИТИЕ
                </motion.div>
              </li>
              <li>
                <motion.div variants={blockUp} className='text-white uppercase'>
                  РАЗРАБОТКА СЕРВИСОВ
                </motion.div>
              </li>
              <li>
                <motion.div variants={blockUp} className='text-white uppercase'>
                  SEO продвижение
                </motion.div>
              </li>
            </ul>
          </motion.div>
        </div>
      </InteriorContainer>
    </BlackContainer>
  );
};

export default ServicesBlock;
