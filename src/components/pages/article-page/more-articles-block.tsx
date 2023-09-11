"use client";

import { motion } from "framer-motion";

import { blockUp } from "@/transition-variants";
import InteriorContainer from "@/components/interior-container";
import PatternContainer from "@/components/pattern-container";
import { useBlogStore } from "@/hooks/blog-store";
import NextBlog from "../about-page/components/next-blog";

const MoreArticles = () => {
  const { testArticles, articleSelect } = useBlogStore();
  let arrayOutSelectArticle;
  if (articleSelect) {
    arrayOutSelectArticle = testArticles?.filter(
      (a) => a.id !== articleSelect?.id
    );
  } else {
    arrayOutSelectArticle = testArticles;
  }
  const articlesNextRandom = arrayOutSelectArticle
    ?.sort(() => 0.5 - Math.random())
    .slice(0, 2);

  return (
    <PatternContainer>
      <InteriorContainer>
        <div className='mx-auto max-w-2xl lg:max-w-none'>
          <motion.div
            initial='offscreen'
            whileInView='onscreen'
            viewport={{ once: true, amount: 0.2 }}
            className='max-w-2xl'
          >
            <motion.h2 variants={blockUp}>
              <span className='block font-display tracking-tight [text-wrap:balance] text-2xl font-semibold text-neutral-950'>
                Еще статьи
              </span>
            </motion.h2>
          </motion.div>
        </div>
      </InteriorContainer>
      <InteriorContainer className='mt-16'>
        <div className='mx-auto max-w-2xl lg:max-w-none'>
          <div className='grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2'>
            {articlesNextRandom &&
              articlesNextRandom.map((i) => (
                <NextBlog
                  key={i?.id}
                  title={i?.title}
                  description={i?.description}
                  date={i?.createdAt}
                  name={i?.name}
                  type='blog'
                />
              ))}
          </div>
        </div>
      </InteriorContainer>
    </PatternContainer>
  );
};

export default MoreArticles;
