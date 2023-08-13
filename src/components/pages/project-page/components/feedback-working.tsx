"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import { blockUp } from "@/transition-variants";

interface FeedbackWorkingProps {
  feedback: {
    name: string;
    job_title: string;
    img: string;
    text: string;
  };
}

const FeedbackWorking: React.FC<FeedbackWorkingProps> = ({ feedback }) => {
  return (
    <motion.div
      initial='offscreen'
      whileInView='onscreen'
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.figure
        variants={blockUp}
        className='grid grid-cols-[auto,1fr] items-center gap-x-4 gap-y-8 sm:grid-cols-12 sm:grid-rows-[1fr,auto,auto,1fr] sm:gap-x-10 lg:gap-x-16 my-32'
      >
        <blockquote className='col-span-2 text-xl/7 text-neutral-600 sm:col-span-7 sm:col-start-6 sm:row-start-2'>
          <p>{feedback.text}</p>
        </blockquote>
        <div className='col-start-1 row-start-2 overflow-hidden rounded-xl bg-neutral-100 sm:col-span-5 sm:row-span-full sm:rounded-3xl'>
          <Image
            alt=''
            loading='lazy'
            width='1800'
            height='1800'
            decoding='async'
            data-nimg='1'
            className='h-12 w-12 object-cover grayscale sm:aspect-[7/9] sm:h-auto sm:w-full'
            sizes='(min-width: 1024px) 17.625rem, (min-width: 768px) 16rem, (min-width: 640px) 40vw, 3rem'
            src={feedback.img}
          />
        </div>
        <figcaption className='text-sm text-neutral-950 sm:col-span-7 sm:row-start-3 sm:text-base'>
          <span className='font-semibold'>{feedback?.name}</span>
          <span>, </span>
          <span className='sm:font-semibold'>{feedback?.job_title}</span>
        </figcaption>
      </motion.figure>
    </motion.div>
  );
};

export default FeedbackWorking;
