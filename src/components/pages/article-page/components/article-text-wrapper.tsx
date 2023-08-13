"use client";

import { motion } from "framer-motion";

import { blockUp } from "@/transition-variants";
import PhotoElement from "@/components/ui/photo-element";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import ArticleText from "./article-text";

interface ArticleTextWrapperProps {
  article: string;
}

// const art = [
//   {
//     title: "1. Brevity is Key",
//     p: [
//       "Time is scarce, don’t waste it typing out long, descriptive component names. One approach is to give them short, cryptic names that only you will understand.",
//       'Need a button? Call it "btn". A modal? How about "md"? You’ll save',
//     ],
//   },
// ];

const ArticleTextWrapper: React.FC<ArticleTextWrapperProps> = ({ article }) => {
  const [a, setA]: [[], Dispatch<SetStateAction<[]>>] = useState([]);

  useEffect(() => {
    const artic: any = [];
    for (let i = 0; i < article.split("#title").slice(1).length; i++) {
      artic.push({
        title: article.split("#title").slice(1)[i].split("#p")[0],
        p: [],
      });
      for (
        let j = 0;
        j <
        article
          .split("#title")
          .slice(1)
          [i].split(/\#p|#i|#t/)
          .slice(1).length;
        j++
      ) {
        artic[i].p.push(
          article
            .split("#title")
            .slice(1)
            [i].split(/\#p|#i|#t/)
            .slice(1)[j]
        );
      }
    }
    setA(artic);
  }, [article]);

  return (
    <motion.div
      initial='offscreen'
      whileInView='onscreen'
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div
        variants={blockUp}
        className='[&>*]:mx-auto [&>*]:max-w-3xl [&>:first-child]:!mt-0 [&>:last-child]:!mb-0 mt-24 sm:mt-32 lg:mt-40'
      >
        <ArticleText article={a} />
      </motion.div>
    </motion.div>
  );
};

export default ArticleTextWrapper;

{
  /* <h2>1. Brevity is Key</h2>
          <p>
            Time is scarce, don’t waste it typing out long, descriptive
            component names. One approach is to give them short, cryptic names
            that only you will understand.
          </p>
          <p>
            Need a button? Call it "btn". A modal? How about "md"? You’ll save
            precious minutes per day and you’ll get the added benefit of being
            the only person in the codebase who knows where anything is. This is
            called job security.
          </p>
          <PhotoElement className='my-10  max-sm:-mx-6' />
          <h2>2. Rank High in Search</h2>
          <p>
            When working in large repos with lots of collaborators, it’s
            important that your component ranks high when people search for
            anything.
          </p>
          <p>
            You can create an index file that maps all the different languages
            within your repo. Need a dropdown? Look for “Desplegable”. A form?
            Search “Форма”. You’ll learn multiple new languages while being more
            inclusive to your colleagues.
          </p>
          <PhotoElement className='my-10  max-sm:-mx-6' />
          <h2>3. Mix Languages</h2>
          <p>
            If you work remotely, it’s likely you are on a global team and yet
            all your components have English names. This slows down your
            non-english colleagues considerably so you should allow them to use
            their native tongue when naming components.
          </p>
          <p>
            You can create an index file that maps all the different languages
            within your repo. Need a dropdown? Look for “Desplegable”. A form?
            Search “Форма”. You’ll learn multiple new languages while being more
            inclusive to your colleagues.
          </p>
          <PhotoElement className='my-10  max-sm:-mx-6' /> */
}
