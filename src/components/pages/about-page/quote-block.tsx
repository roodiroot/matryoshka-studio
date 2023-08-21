"use client";

import { motion } from "framer-motion";

import { blockUp } from "@/transition-variants";
import InteriorContainer from "@/components/interior-container";
import PatternContainer from "@/components/pattern-container";
import NextBlog from "./components/next-blog";
import { useBlogStore } from "@/hooks/blog-store";

const QuoteBlock = () => {
  const { articles } = useBlogStore();
  return (
    <PatternContainer className='mt-24 sm:mt-32 lg:mt-40'>
      <InteriorContainer>
        <div className='mx-auto max-w-2xl lg:max-w-none'>
          <div className='max-w-2xl'>
            <motion.h2
              initial='offscreen'
              whileInView='onscreen'
              viewport={{ once: true, amount: 0.8 }}
            >
              <motion.span
                variants={blockUp}
                className='block font-display tracking-tight [text-wrap:balance] text-2xl font-semibold text-neutral-950'
              >
                Из блога
              </motion.span>
            </motion.h2>
            <motion.div
              initial='offscreen'
              whileInView='onscreen'
              viewport={{ once: true, amount: 0.8 }}
              className='mt-6 text-xl text-neutral-600'
            >
              <motion.p variants={blockUp}>
                Здесь вы&nbsp;найдёте отражение нашей страсти к&nbsp;достижению
                целей. За&nbsp;каждым текстом стоит команда профессионалов,
                готовых делать ваш проект не&nbsp;только успешным,
                но&nbsp;и&nbsp;вдохновляющим.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </InteriorContainer>
      <InteriorContainer className='mt-24'>
        <div className='mx-auto max-w-2xl lg:max-w-none'>
          <div className='grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2'>
            {articles.slice(-2).map((i) => (
              <NextBlog
                key={i.id}
                title={i.title}
                description={i.description}
                date={i.date}
              />
            ))}
          </div>
        </div>
      </InteriorContainer>
    </PatternContainer>
  );
};

export default QuoteBlock;
