"use client";

import { motion } from "framer-motion";

import { blockUp } from "@/transition-variants";
import ClassicContainer from "@/components/classic-container";
import MainHeaderPage from "@/components/ui/main-header-page";

const abUsList = [
  { title: "Underpaid employees", meaning: "35" },
  { title: "Placated clients", meaning: "52" },
  { title: "Invoices billed", meaning: "$25M" },
];

const MainBlock = () => {
  return (
    <>
      <MainHeaderPage overhead='О нас' head='Наша сила в сотрудничестве'>
        <p>
          Мы считаем, что наша сила заключается в нашем совместном подходе,
          который ставит наших клиентов в центр всего, что мы делаем.
        </p>
        <div className='mt-10 max-w-2xl space-y-6 text-base'>
          <p>
            Студия была основана тремя друзьями, которые заметили, что студии
            разработчиков берут с клиентов двойную плату по сравнению с
            собственной командой. С самого начала мы стремились делать вещи
            по-другому, вместо этого взимая тройную плату.
          </p>
          <p>
            В Studio мы больше, чем просто коллеги — мы семья. Это означает, что
            мы платим очень мало и ожидаем, что люди будут работать допоздна. Мы
            хотим, чтобы наши сотрудники полностью отдавались работе. Взамен мы
            просто просим, ​​чтобы они оставались там как минимум до 18:30.
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
