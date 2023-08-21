"use client";

import { motion } from "framer-motion";

import { blockUp } from "@/transition-variants";
import BlackContainer from "@/components/black-container";
import InteriorContainer from "@/components/interior-container";

const cultureList = [
  {
    title: "Страсть к успеху",
    description:
      "Мы не просто создаем сайты, мы создаем искусство, вдохновленное вашими целями и нашим стремлением к совершенству.",
  },
  {
    title: "Клиент в центре",
    description:
      "Для нас каждый проект – это партнерство, где ваше видение и наши экспертные навыки объединяются для достижения великолепных результатов.",
  },
  {
    title: "Непрерывное развитие",
    description:
      "В мире постоянных технологических изменений мы постоянно обучаемся и адаптируемся, чтобы предоставлять вам только лучшие решения.",
  },
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
                Основы философии &rsquo;Матрёшки&rsquo;
              </span>
            </h2>
            <div className='mt-6 text-xl text-neutral-300'>
              <p>
                Отражая нашу уникальную культуру и&nbsp;подход, эти принципы
                являются фундаментом нашего отношения к&nbsp;каждому проекту
                и&nbsp;каждому клиенту.
              </p>
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
                    {i.description}
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
