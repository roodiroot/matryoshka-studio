"use client";

import { motion } from "framer-motion";

import { blockUp } from "@/transition-variants";
import InteriorContainer from "@/components/interior-container";
import PatternContainer from "@/components/pattern-container";

const feauterList = [
  {
    title: "Meticulous.",
    description:
      "Первая часть любого партнерства — заставить нашего дизайнера разместить ваш логотип в нашем шаблоне. Второй шаг — заставить их сделать цвета.",
  },
  {
    title: "Efficient.",
    description:
      "Мы гордимся тем, что никогда не пропускаем сроки, что легко, потому что большая часть работы была сделана много лет назад.",
  },
  {
    title: "Adaptable.",
    description:
      "У каждого бизнеса есть уникальные потребности, и наша самая большая задача — впихнуть эти потребности в то, что мы уже создали.",
  },
  {
    title: "Honest.",
    description:
      "Мы прозрачны во всех наших процессах, делая ставку на тот простой факт, что наши клиенты никогда ничего не читают.",
  },
  {
    title: "Loyal.",
    description:
      "Мы поддерживаем долгосрочные отношения с нашими клиентами, которые выходят за рамки простой поставки продукта, что позволяет нам выставлять им счета на десятилетия.",
  },
  {
    title: "Innovative.",
    description:
      "Технологический ландшафт постоянно развивается, и мы тоже. Мы постоянно ищем новые проекты с открытым исходным кодом для клонирования.",
  },
];

const FeatureBlock = () => {
  return (
    <PatternContainer className='mt-24 sm:mt-32 lg:mt-40'>
      <InteriorContainer>
        <motion.div
          initial='offscreen'
          whileInView='onscreen'
          viewport={{ once: true, amount: 0.2 }}
          className='mx-auto max-w-2xl lg:max-w-none'
        >
          <motion.div variants={blockUp} className='max-w-2xl'>
            <h2>
              <span className='mb-6 block font-display text-base font-semibold text-neutral-950'>
                Наши ценности
              </span>
              <span className='sr-only'> - </span>
              <span className='block font-display tracking-tight [text-wrap:balance] text-4xl font-medium sm:text-5xl text-neutral-950'>
                Баланс надежности и инноваций
              </span>
            </h2>
            <div className='mt-6 text-xl text-neutral-600'>
              <p>
                Мы стремимся оставаться в авангарде новых тенденций и
                технологий, полностью игнорируя их и разветвляя тот старый
                проект Rails, который нам удобно использовать. Мы поддерживаем
                наши основные ценности, чтобы оправдать это решение.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </InteriorContainer>
      <InteriorContainer className='mt-24'>
        <div className='mx-auto max-w-2xl lg:max-w-none'>
          <div>
            <ul className='grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3'>
              {feauterList.map((i) => (
                <motion.li
                  key={i.title}
                  initial='offscreen'
                  whileInView='onscreen'
                  viewport={{ once: true, amount: 0.2 }}
                  className='text-base text-neutral-600 before:bg-neutral-950 after:bg-neutral-100'
                >
                  <motion.div variants={blockUp}>
                    <div className='pl-8 relative before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-6 before:w-px after:bottom-0 after:left-0 after:top-8 after:w-px'>
                      <strong className='font-semibold text-neutral-950'>
                        {i.title}
                      </strong>
                      {i.description}
                    </div>
                  </motion.div>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </InteriorContainer>
    </PatternContainer>
  );
};

export default FeatureBlock;
