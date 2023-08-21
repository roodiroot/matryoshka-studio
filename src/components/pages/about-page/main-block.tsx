"use client";

import { motion } from "framer-motion";

import { blockUp } from "@/transition-variants";
import ClassicContainer from "@/components/classic-container";
import MainHeaderPage from "@/components/ui/main-header-page";

const abUsList = [
  { title: "Проектов в работе", meaning: "37" },
  { title: "Увеличение команды за год", meaning: "120%" },
  { title: "Рост доходов", meaning: "30%" },
];

const MainBlock = () => {
  return (
    <>
      <MainHeaderPage overhead='О нас' head='Имя, которое говорит за себя'>
        <p>
          Название нашей студии, &laquo;Матрёшка&raquo;, не&nbsp;просто символ
          русской культуры и&nbsp;традиций, но&nbsp;и&nbsp;метафора того, как
          мы&nbsp;подходим к&nbsp;нашей работе.
        </p>
        <div className='mt-10 max-w-2xl space-y-6 text-base'>
          <p>
            Как и&nbsp;у&nbsp;классической русской матрёшки, в&nbsp;нашей работе
            есть много уровней. Мы&nbsp;начинаем с&nbsp;общей идеи, а&nbsp;затем
            раскрываем&nbsp;её, создавая сложную структуру с&nbsp;глубоким
            смыслом и&nbsp;
            <span className='font-semibold'>многогранностью</span>. Каждый
            проект&nbsp;&mdash; это целая система вложенных элементов, где
            каждый следующий уровень дополняет предыдущий.
          </p>
          <p>
            Каждая матрёшка уникальна и&nbsp;неповторима, как и&nbsp;каждый наш
            клиент. Мы&nbsp;создаём уникальные,{" "}
            <span className='font-semibold'>персонализированные решения</span>,
            которые отражают индивидуальность вашего бренда или продукта.
          </p>
          <p>
            Название &laquo;Матрёшка&raquo; также символизирует наши корни
            и&nbsp;культурное наследие. Мы&nbsp;гордимся нашим происхождением
            и&nbsp;стремимся объединить лучшие российские традиции
            с&nbsp;мировыми стандартами в&nbsp;области{" "}
            <span className='font-semibold'>веб-дизайна</span> и{" "}
            <span className='font-semibold'>технологий</span>.
          </p>
        </div>
      </MainHeaderPage>
      <ClassicContainer className='mt-16'>
        <div className='mx-auto max-w-2xl lg:max-w-none'>
          <div>
            <dl className='grid grid-cols-1 gap-10 sm:grid-cols-2 lg:auto-cols-fr lg:grid-flow-col lg:grid-cols-none'>
              {abUsList.map((i) => (
                <motion.div
                  key={i.title}
                  initial='offscreen'
                  whileInView='onscreen'
                  viewport={{ once: true, amount: 0.8 }}
                >
                  <motion.div
                    key={i.title}
                    variants={blockUp}
                    className='flex flex-col-reverse pl-8 relative before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-6 before:w-px after:bottom-0 after:left-0 after:top-8 after:w-px'
                  >
                    <dt className='mt-2 text-base text-neutral-600'>
                      {i.title}
                    </dt>
                    <dd className='font-display text-3xl font-semibold text-neutral-950 sm:text-4xl'>
                      {i.meaning}
                    </dd>
                  </motion.div>
                </motion.div>
              ))}
            </dl>
          </div>
        </div>
      </ClassicContainer>
    </>
  );
};

export default MainBlock;
