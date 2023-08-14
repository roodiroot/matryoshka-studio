"use client";
import { motion } from "framer-motion";

import { blockUp } from "@/transition-variants";
import Image from "next/image";
import Link from "next/link";

interface ProjItemForHomeProps {
  name: string;
  year: string;
  teme: string;
  title: string;
  description: string;
}

const ProjItemForHome: React.FC<ProjItemForHomeProps> = ({
  name,
  year,
  teme,
  title,
  description,
}) => {
  return (
    <motion.div
      initial='offscreen'
      whileInView='onscreen'
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div variants={blockUp} className='flex'>
        <article className='relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8'>
          <h3>
            <Link href={`/work/${name}`}>
              <span className='absolute inset-0 rounded-3xl'></span>
              <Image
                loading='lazy'
                decoding='async'
                className='h-16 w-16'
                width={36}
                height={36}
                src='https://studio.tailwindui.com/_next/static/media/logomark-dark.4d2947be.svg'
                alt='hi'
              />
            </Link>
          </h3>
          <p className='mt-6 flex gap-x-2 text-sm text-neutral-950'>
            <time className='font-semibold'>{year}</time>
            <span className='text-neutral-300'>/</span>
            <span className=''>{teme}</span>
          </p>
          <p className='mt-6 font-display text-2xl font-semibold text-neutral-950'>
            {title}
          </p>
          <p className='mt-4 text-base text-neutral-600'>{description}</p>
        </article>
      </motion.div>
    </motion.div>
  );
};

export default ProjItemForHome;
