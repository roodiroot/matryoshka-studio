'use client';

import { motion } from 'framer-motion';

import { blockUp } from '@/transition-variants';
import ClassicContainer from '@/components/classic-container';
import Image from 'next/image';
import PhotoElement from '@/components/ui/photo-element';

const AllArticleBlock = () => {
  return (
    <ClassicContainer teg="article" className="mt-24 sm:mt-32 lg:mt-40">
      <motion.div initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.2 }}>
        <motion.header variants={blockUp} className="mx-auto flex max-w-5xl flex-col text-center">
          <h1 className="mt-6 font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-6xl">
            A Short Guide to Component Naming
          </h1>
          <time dateTime="2022-12-01" className="order-first text-sm text-neutral-950">
            December 1, 2022
          </time>
          <p className="mt-6 text-sm font-semibold text-neutral-950">
            by Angela Fisher, Front-end Developer
          </p>
        </motion.header>
      </motion.div>
      <motion.div initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.2 }}>
        <motion.div
          variants={blockUp}
          className="[&>*]:mx-auto [&>*]:max-w-3xl [&>:first-child]:!mt-0 [&>:last-child]:!mb-0 mt-24 sm:mt-32 lg:mt-40">
          <div className="typography [&>h2]:text-2xl [&>p]:my-6 [&>h2]:font-bold [&>h2]:text-neutral-950 [&>h2]:mt-16">
            <h2>1. Brevity is Key</h2>
            <p>
              Time is scarce, don’t waste it typing out long, descriptive component names. One
              approach is to give them short, cryptic names that only you will understand.
            </p>
            <p>
              Need a button? Call it "btn". A modal? How about "md"? You’ll save precious minutes
              per day and you’ll get the added benefit of being the only person in the codebase who
              knows where anything is. This is called job security.
            </p>
            <PhotoElement className="my-10  max-sm:-mx-6" />
            <h2>2. Rank High in Search</h2>
            <p>
              When working in large repos with lots of collaborators, it’s important that your
              component ranks high when people search for anything.
            </p>
            <p>
              You can create an index file that maps all the different languages within your repo.
              Need a dropdown? Look for “Desplegable”. A form? Search “Форма”. You’ll learn multiple
              new languages while being more inclusive to your colleagues.
            </p>
            <PhotoElement className="my-10  max-sm:-mx-6" />
            <h2>3. Mix Languages</h2>
            <p>
              If you work remotely, it’s likely you are on a global team and yet all your components
              have English names. This slows down your non-english colleagues considerably so you
              should allow them to use their native tongue when naming components.
            </p>
            <p>
              You can create an index file that maps all the different languages within your repo.
              Need a dropdown? Look for “Desplegable”. A form? Search “Форма”. You’ll learn multiple
              new languages while being more inclusive to your colleagues.
            </p>
            <PhotoElement className="my-10  max-sm:-mx-6" />
          </div>
        </motion.div>
      </motion.div>
    </ClassicContainer>
  );
};

export default AllArticleBlock;
