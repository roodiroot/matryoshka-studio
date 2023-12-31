"use client";

import { motion } from "framer-motion";

import { blockUp } from "@/transition-variants";
import InteriorContainer from "@/components/interior-container";
import PatternContainer from "@/components/pattern-container";

const feauterList = [
  {
    title: "Клиентоориентированность.",
    description:
      "Мы понимаем уникальные потребности каждого клиента и стремимся обеспечить персонализированные, рабочие решения.",
  },
  {
    title: "Инновационность и Творчество.",
    description:
      "Объединяя традиции и новаторство, мы создаём дизайн, который не только красив, но и функционален.",
  },
  {
    title: "Качество и Совершенство.",
    description:
      "Мы верим, что детали имеют значение. Наш подход гарантирует выдающиеся результаты.",
  },
  {
    title: "Честность и Прозрачность.",
    description:
      "Открытая и честная коммуникация с клиентами и внутри команды лежит в основе нашего бизнеса.",
  },
  {
    title: "Сотрудничество и Командная Работа.",
    description:
      "Наша культура поддерживает сотрудничество и взаимоуважение. Мы работаем с единой целью: вашим успехом.",
  },
  {
    title: "Устойчивое Развитие и Обучение.",
    description:
      "Мы стремимся к постоянному росту и развитию, чтобы оставаться на передовой веб-технологий.",
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
                Наши Ценности
              </span>
              <span className='sr-only'> - </span>
              <span className='block font-display tracking-tight [text-wrap:balance] text-4xl font-medium sm:text-5xl text-neutral-950'>
                Компас, Ведущий к Успеху
              </span>
            </h2>
            <div className='mt-6 text-xl text-neutral-600'>
              <p>
                Мы&nbsp;не&nbsp;просто следуем модным трендам и&nbsp;стандартам
                отрасли. Мы&nbsp;придерживаемся незыблемых правил и&nbsp;устоев,
                которые стали фундаментом нашего профессионализма.
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
                        {i.title}{" "}
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
