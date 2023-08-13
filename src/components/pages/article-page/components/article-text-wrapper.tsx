'use client';

import { motion } from 'framer-motion';

import { blockUp } from '@/transition-variants';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import ArticleText from './article-text';

interface ArticleTextWrapperProps {
  article: string;
}

const ArticleTextWrapper: React.FC<ArticleTextWrapperProps> = ({ article }) => {
  const [a, setA]: [[], Dispatch<SetStateAction<[]>>] = useState([]);

  useEffect(() => {
    const artic: any = [];
    for (let i = 0; i < article.split('#title').slice(1).length; i++) {
      artic.push({
        title: article.split('#title').slice(1)[i].split('#p')[0],
        p: [],
      });
      for (
        let j = 0;
        j <
        article
          .split('#title')
          .slice(1)
          [i].split(/\#p|#i|#t/)
          .slice(1).length;
        j++
      ) {
        artic[i].p.push(
          article
            .split('#title')
            .slice(1)
            [i].split(/\#p|#i|#t/)
            .slice(1)[j],
        );
      }
    }
    setA(artic);
  }, [article]);

  return (
    <motion.div initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.2 }}>
      <motion.div
        variants={blockUp}
        className="[&>*]:mx-auto [&>*]:max-w-3xl [&>:first-child]:!mt-0 [&>:last-child]:!mb-0 mt-24 sm:mt-32 lg:mt-40">
        <ArticleText article={a} />
      </motion.div>
    </motion.div>
  );
};

export default ArticleTextWrapper;
