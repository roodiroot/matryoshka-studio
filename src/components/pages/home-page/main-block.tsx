'use client';

import { motion } from 'framer-motion';

import { blockUp } from '@/transition-variants';
import ClassicContainer from '@/components/classic-container';

const MainBlock = () => {
  return (
    <ClassicContainer className="mt-24 sm:mt-32 md:mt-56">
      <motion.div initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.2 }}>
        <motion.div variants={blockUp} className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
            Решения которые вдохновляют и&nbsp;удивляют.
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            Присоединяйтесь к&nbsp;нам и&nbsp;дайте Вашему бизнесу новые возможности. Вместе
            мы&nbsp;создадим проекты, которые востребованы на&nbsp;рынке, будут привлекать внимание
            клиентов и&nbsp;обеспечивать ваш успех.
          </p>
        </motion.div>
      </motion.div>
    </ClassicContainer>
  );
};

export default MainBlock;
