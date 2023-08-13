'use client';
import { motion } from 'framer-motion';

import ClassicContainer from '@/components/classic-container';
import { blockUp } from '@/transition-variants';

const TehnologyBlock = () => {
  return (
    <ClassicContainer className="mt-24 sm:mt-32 md:mt-56">
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-2xl">
        <motion.div variants={blockUp}>
          <h2 className="block font-display tracking-tight [text-wrap:balance] text-4xl font-medium sm:text-5xl text-neutral-950">
            Некоторые из наших успешных проектов
          </h2>
          <p className="mt-6 text-xl text-neutral-600">
            Использование современных технологий в&nbsp;создании сайтов помогает улучшить
            пользовательский опыт,качественно повысить безопасность, обеспечить высокую
            производительность и&nbsp;легкую интеграцию с&nbsp;другими сервисами.
          </p>
        </motion.div>
      </motion.div>
    </ClassicContainer>
  );
};

export default TehnologyBlock;
