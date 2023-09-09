"use client";

import { motion } from "framer-motion";

import { blockUp } from "@/transition-variants";
import Link from "next/link";
import { formateDate } from "@/utils";

interface NextBlogProps {
  title: string;
  date: string;
  description: string;
}

const NextBlog: React.FC<NextBlogProps> = ({ title, date, description }) => {
  if (date?.length > 16) {
    date = formateDate(date, true);
  }
  return (
    <motion.div
      initial='offscreen'
      whileInView='onscreen'
      viewport={{ once: true, amount: 0.8 }}
    >
      <motion.article variants={blockUp}>
        <div className='relative flex flex-col items-start pl-8 before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-6 before:w-px after:bottom-0 after:left-0 after:top-8 after:w-px'>
          <h3 className='mt-6 text-base font-semibold text-neutral-950'>
            {title}
          </h3>
          <time
            className='order-first text-sm text-neutral-600'
            dateTime='2023-04-06'
          >
            {date}.
          </time>
          <p className='mt-2.5 text-base text-neutral-600'>{description}</p>
          <Link
            href={"/"}
            className='mt-6 flex gap-x-3 text-base font-semibold text-neutral-950 transition hover:text-neutral-700'
          >
            Читать далее
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-6 flex-none fill-current'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3'
              />
            </svg>
            <span className='absolute inset-0'></span>
          </Link>
        </div>
      </motion.article>
    </motion.div>
  );
};

export default NextBlog;
